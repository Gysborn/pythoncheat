from django.shortcuts import render, get_object_or_404

from git.models import *

g = {
    '010': Git10,
    '011': Git11,
}


def git(request):
    return render(request,
                  'git/git.html',
                  {
                      'git_10': Git10.objects.all(),
                      'git_11': Git11.objects.all(),

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
