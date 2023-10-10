from django.shortcuts import render, get_object_or_404

from testing.models import *

t = {
    '131': Ts131,
    '201': Ts201,
    '202': Ts202,
}


def testing(request):
    return render(request,
                  'testing/testing.html',
                  {
                      'testing_131': Ts131.objects.all(),
                      'testing_201': Ts201.objects.all(),
                      'testing_202': Ts202.objects.all(),
                  }
                  )


def show_video(request, post_slug):
    obj = post_slug[:3]
    vid = get_object_or_404(t[obj], slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request,
                  'video/show_video.html', context=context)

