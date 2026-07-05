begin;

-- Tool48 Garapon cloud-save hard limit.
-- Safe to run more than once in Supabase SQL Editor.
-- Existing rows are untouched; new inserts are blocked after each user reaches 200.

create or replace function public.tool48_enforce_garapon_record_limit()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.user_id is null then
    raise exception 'tool48_garapon_cloud_record_user_missing';
  end if;

  if (
    select count(*)
    from public.garapon_records
    where user_id = new.user_id
      and created_at >= now() - interval '24 hours'
  ) >= 10 then
    raise exception 'tool48_garapon_daily_insert_limit_reached';
  end if;

  if (
    select count(*)
    from public.garapon_records
    where user_id = new.user_id
  ) >= 200 then
    raise exception 'tool48_garapon_cloud_record_limit_reached';
  end if;

  return new;
end;
$$;

drop trigger if exists tool48_garapon_record_limit_before_insert on public.garapon_records;
create trigger tool48_garapon_record_limit_before_insert
before insert on public.garapon_records
for each row execute function public.tool48_enforce_garapon_record_limit();

create or replace function public.tool48_enforce_public_submission_guards()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.user_id is null then
    raise exception 'tool48_public_submission_user_missing';
  end if;

  if pg_column_size(new.public_payload) > 65536 then
    raise exception 'tool48_public_submission_payload_too_large';
  end if;

  if tg_op = 'INSERT' and (
    select count(*)
    from public.public_submissions
    where user_id = new.user_id
      and created_at >= now() - interval '24 hours'
      and coalesce(status, '') <> 'deleted'
  ) >= 10 then
    raise exception 'tool48_public_submission_daily_insert_limit_reached';
  end if;

  return new;
end;
$$;

drop trigger if exists tool48_public_submission_guards_before_insert on public.public_submissions;
drop trigger if exists tool48_public_submission_guards_before_write on public.public_submissions;
create trigger tool48_public_submission_guards_before_write
before insert or update on public.public_submissions
for each row execute function public.tool48_enforce_public_submission_guards();

notify pgrst, 'reload schema';

commit;
