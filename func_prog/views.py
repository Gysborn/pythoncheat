from django.shortcuts import render

from func_prog.models import *


def func_prog(request):
    return render(request,
                  'func_prog/fp.html',
                  {
                      'fp_232': F232.objects.all(),
                  }
                  )
