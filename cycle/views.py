from django.shortcuts import render, get_object_or_404

from cycle.models import *


def cycle(request):
    return render(request,
                  'cycle/cycle.html',
                  {
                      'cycle': Cycle.objects.all(),
                  }
                  )


def show_video(request, post_slug):
    vid = get_object_or_404(cycle, slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request,
                  'video/show_video.html', context=context)
