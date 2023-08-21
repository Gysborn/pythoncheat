from django.shortcuts import render

from ide.models import *


def ide(request):
    return render(request,
                  'ide/ide.html',
                  {
                      'ide': Ide.objects.all(),
                      'ide_env': Ide_env.objects.all(),
                      'ide_env_com': Ide_env_com.objects.all()
                  }
                  )
