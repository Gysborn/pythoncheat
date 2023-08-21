from django.shortcuts import render

from doc_spec.models import *


def doc(request):
    return render(request,
                  'doc/doc.html',
                  {
                      'doc': Docspec.objects.all(),
                  }
                  )
