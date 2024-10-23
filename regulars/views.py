from django.shortcuts import render, get_object_or_404

from regulars.models import *


def re(request):
    return render(request,
                  're/re.html',
                  {
                      're_241': R241.objects.all(),
                  }
                  )


def show_video(request, post_slug):
    vid = get_object_or_404(R241, slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request,
                  'video/show_video.html', context=context)
