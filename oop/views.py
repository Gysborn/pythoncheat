from django.shortcuts import render, get_object_or_404

from oop.models import *

oops = {
    '211': Oop211,
    '212': Oop212,
    '221': Oop221,
    '222': Oop222,
    '223': Oop223,

}


def oop(request):
    return render(request,
                  'oop/oop.html',
                  {
                      'oop_211': Oop211.objects.all(),
                      'oop_212': Oop212.objects.all(),
                      'oop_221': Oop221.objects.all(),
                      'oop_222': Oop222.objects.all(),
                      'oop_223': Oop223.objects.all(),

                  }
                  )


def show_video(request, post_slug):
    obj = post_slug[:3]
    vid = get_object_or_404(oops[obj], slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request,
                  'video/show_video.html', context=context)
