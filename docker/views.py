from django.shortcuts import render

from docker.models import *


def docker(request):
    return render(request,
                  'docker/docker.html',
                  {
                      'content_252': D252.objects.all(),
                      'content_261': D261.objects.all(),
                      'content_262': D262.objects.all(),
                  }
                  )
