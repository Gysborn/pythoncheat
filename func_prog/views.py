from django.shortcuts import render, get_object_or_404

from func_prog.models import *


def func_prog(request):
    return render(request,
                  'func_prog/fp.html',
                  {
                      'fp_232': F232.objects.all(),
                  }
                  )


def show_video(request, post_slug):
    vid = get_object_or_404(F232, slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request,
                  'video/show_video.html', context=context)
