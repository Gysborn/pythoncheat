from django.shortcuts import render, get_object_or_404

from exceptions.models import *


def ex(request):
    return render(request,
                  'exceptions/ex.html',
                  {
                      'ex_231': E231.objects.all(),
                  }
                  )


def show_video(request, post_slug):
    vid = get_object_or_404(E231, slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request, 'video/show_video.html', context=context)
