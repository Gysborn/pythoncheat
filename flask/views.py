from django.shortcuts import render
from flask.models import *


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
