from django.shortcuts import render, get_object_or_404

from ide.models import *

i = {
    '061': Ide,
    '062': Ide_env,
    '063': Ide_env_com,
}


def ide(request):
    return render(request,
                  'ide/ide.html',
                  {
                      'ide': Ide.objects.all(),
                      'ide_env': Ide_env.objects.all(),
                      'ide_env_com': Ide_env_com.objects.all()
                  }
                  )


def show_video(request, post_slug):
    obj = post_slug[:3]
    vid = get_object_or_404(g[obj], slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request, 'video/show_video.html', context=context)
