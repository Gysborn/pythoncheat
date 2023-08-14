from django.shortcuts import render

from testing.models import *


def testing(request):
    return render(request,
                  'testing/testing.html',
                  {
                      'testing_131': Ts131.objects.all(),
                      'testing_201': Ts201.objects.all(),
                      'testing_202': Ts202.objects.all(),
                  }
                  )
