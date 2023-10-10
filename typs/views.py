from django.shortcuts import render, get_object_or_404

from typs.models import *


def types(request):
    return render(request,
                  'types/types.html',
                  {
                      'types_10': T242.objects.all(),
                  }
                  )


def show_video(request, post_slug):
    obj = post_slug[:3]
    vid = get_object_or_404(T242, slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request,
                  'video/show_video.html', context=context)
