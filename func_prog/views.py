from django.shortcuts import render, get_object_or_404

from func_prog.models import *

fp = {
    '232': F232,
    '233': F233,

}


def func_prog(request):
    return render(request,
                  'func_prog/fp.html',
                  {
                      'fp_232': F232.objects.all(),
                      'fp_233': F233.objects.all(),
                  }
                  )


def show_video(request, post_slug):
    obj = post_slug[:3]
    vid = get_object_or_404(fp[obj], slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request,
                  'video/show_video.html', context=context)
