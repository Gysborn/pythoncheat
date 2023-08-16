from django.shortcuts import render

from dj.models import *


def index(request):
    return render(request,
                  'django/index.html',
                  {
                      'content_271': Dj.objects.all(),
                      'content_272': Dj272.objects.all(),
                      'content_281': Dj280.objects.all(),
                      'content_282': Dj282.objects.all(),
                      'content_291': Dj291.objects.all(),
                      'content_292': Dj292.objects.all(),
                      'content_301': Dj301.objects.all(),
                      'content_302': Dj302.objects.all(),
                      'content_311': Dj311.objects.all(),
                      'content_312': Dj312.objects.all(),
                      'content_320': Dj320.objects.all(),
                  }
                  )
