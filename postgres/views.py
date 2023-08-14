from django.shortcuts import render

from postgres.models import *


def postgres(request):
    return render(request,
                  'postgres/postgres.html',
                  {
                      'postgres': Postgres.objects.all(),

                  }
                  )
