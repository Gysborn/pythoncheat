from django.shortcuts import render

from git.models import *


def git(request):
    return render(request,
                  'git/git.html',
                  {
                      'git_10': Git10.objects.all(),
                      'git_11': Git11.objects.all(),

                  }
                  )
