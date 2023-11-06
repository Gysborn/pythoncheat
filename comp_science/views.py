from django.shortcuts import render, get_object_or_404

from comp_science.models import *


def comp_sci(request):
    return render(request,
                  'comp_sci/comp_sci.html',
                  {
                      'cs': CompSci.objects.all(),
                  }
                  )


def show_video(request, post_slug):
    vid = get_object_or_404(CompSci, slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request,
                  'video/show_video.html', context=context)
