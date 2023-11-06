from django.shortcuts import render, get_object_or_404

from .models import *


def files(request):
    context = {
        'files': Files.objects.all(),
    }
    return render(request, 'files/files.html', context=context)
