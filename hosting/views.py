from django.shortcuts import render, get_object_or_404

from hosting.models import *


def hosting(request):
    return render(request,
                  'hosting/hosting.html',
                  {
                      'hosting_251': H251.objects.all(),
                  }
                  )


def show_video(request, post_slug):
    vid = get_object_or_404(H251, slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request, 'video/show_video.html', context=context)
