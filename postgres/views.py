from django.shortcuts import render, get_object_or_404

from postgres.models import *


def postgres(request):
    return render(request,
                  'postgres/postgres.html',
                  {
                      'postgres': Postgres.objects.all(),

                  }
                  )


def show_video(request, post_slug):
    vid = get_object_or_404(Postgres, slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request,
                  'video/show_video.html', context=context)
