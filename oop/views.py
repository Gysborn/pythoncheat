from django.shortcuts import render

from oop.models import *


def oop(request):
    return render(request,
                  'oop/oop.html',
                  {
                      'oop_211': Oop211.objects.all(),
                      'oop_212': Oop212.objects.all(),
                      'oop_221': Oop221.objects.all(),
                      'oop_222': Oop222.objects.all(),
                  }
                  )
