from django.shortcuts import render

from hosting.models import *


def hosting(request):
    return render(request,
                  'hosting/hosting.html',
                  {
                      'hosting_232': H251.objects.all(),
                  }
                  )
