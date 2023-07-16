from django.shortcuts import render

from exceptions.models import *


def ex(request):
    res = E231.objects.all(),
    print(res)
    return render(request,
                  'exceptions/ex.html',
                  {
                      'ex_231': E231.objects.all(),
                  }
                  )
