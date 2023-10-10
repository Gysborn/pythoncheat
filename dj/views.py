from django.shortcuts import render, get_object_or_404

from dj.models import *

djs = {
    '271': Dj,
    '272': Dj272,
    '281': Dj280,
    '282': Dj282,
    '291': Dj291,
    '292': Dj292,
    '301': Dj301,
    '302': Dj302,
    '311': Dj311,
    '312': Dj312,
    '320': Dj320,
}


def index(request):
    context = {
        'dj_271': Dj.objects.all(),
        'dj_272': Dj272.objects.all(),
        'dj_281': Dj280.objects.all(),
        'dj_282': Dj282.objects.all(),
        'dj_291': Dj291.objects.all(),
        'dj_292': Dj292.objects.all(),
        'dj_301': Dj301.objects.all(),
        'dj_302': Dj302.objects.all(),
        'dj_311': Dj311.objects.all(),
        'dj_312': Dj312.objects.all(),
        'dj_320': Dj320.objects.all(),
    }
    return render(request, 'django/index.html', context=context)


def show_video(request, post_slug):
    obj = post_slug[:3]
    vid = get_object_or_404(djs[obj], slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request,
                  'video/show_video.html', context=context)
