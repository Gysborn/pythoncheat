from django.shortcuts import render

from hosting.models import *


def hosting(request):
    return render(request,
                  'hosting/hosting.html',
                  {
                      'hosting_251': H251.objects.all(),
                  }
                  )
