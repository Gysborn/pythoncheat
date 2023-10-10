from django.shortcuts import render, get_object_or_404

from docker.models import *

d = {
    '252': D252,
    '261': D261,
    '262': D262,
}


def docker(request):
    return render(request,
                  'docker/docker.html',
                  {
                      'content_252': D252.objects.all(),
                      'content_261': D261.objects.all(),
                      'content_262': D262.objects.all(),
                  }
                  )


def show_video(request, post_slug):
    obj = post_slug[:3]
    vid = get_object_or_404(d[obj], slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request, 'video/show_video.html', context=context)
