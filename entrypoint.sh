#!/bin/bash
sleep 10
python manage.py collectstatic  --no-input
python manage.py migrate --check
status=$?
if [[ $status != 0 ]]; then
  python manage.py migrate

fi
exec "$@"