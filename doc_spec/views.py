from django.shortcuts import render, get_object_or_404

from doc_spec.models import *


def doc(request):
    return render(request,
                  'doc/doc.html',
                  {
                      'doc': Docspec.objects.all(),
                  }
                  )


def show_video(request, post_slug):
    vid = get_object_or_404(Docspec, slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request, 'video/show_video.html', context=context)
