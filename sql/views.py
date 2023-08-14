from django.shortcuts import render

from sql.models import *


def sql(request):
    return render(request,
                  'sql/sql.html',
                  {
                      'sql_141': S141.objects.all(),
                      'sql_142': S142.objects.all(),
                      'sql_151': S151.objects.all(),
                      'sql_152': S152.objects.all(),
                      'sql_161': S161.objects.all(),
                      'sql_162': S162.objects.all(),
                  }
                  )
