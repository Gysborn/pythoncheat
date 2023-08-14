from django.shortcuts import render

from regulars.models import *


def re(request):
    return render(request,
                  're/re.html',
                  {
                      're_241': R241.objects.all(),
                  }
                  )
