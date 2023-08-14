from django.shortcuts import render

from typs.models import *


def types(request):
    return render(request,
                  'types/types.html',
                  {
                      'types_10': T242.objects.all(),
                  }
                  )
