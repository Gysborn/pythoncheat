from django.shortcuts import render, get_object_or_404
from flask.models import *

f = {
    '102': Fl102,
    '171': Fl171,
    '172': Fl172,
    '181': Fl181,
    '182': Fl182,
    '191': Fl191,
    '192': Fl192,
}


def flask(request):
    return render(request,
                  'flask/flask.html',
                  {
                      'fl_102': Fl102.objects.all(),
                      'fl_171': Fl171.objects.all(),
                      'fl_172': Fl172.objects.all(),
                      'fl_181': Fl181.objects.all(),
                      'fl_182': Fl182.objects.all(),
                      'fl_191': Fl191.objects.all(),
                      'fl_192': Fl192.objects.all(),
                  }
                  )


def show_video(request, post_slug):
    obj = post_slug[:3]
    vid = get_object_or_404(f[obj], slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request, 'video/show_video.html', context=context)
