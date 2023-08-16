from django.shortcuts import render

from ide.models import *


def ide(request):
    return render(request,
                  'ide/ide.html',
                  {
                      'ide': Ide.objects.all(),
                  }
                  )
