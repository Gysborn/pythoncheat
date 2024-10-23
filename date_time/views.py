from django.shortcuts import render

from .models import *


def date_time(request):
    context = {
        'dt': DateTime.objects.all(),
    }
    return render(request, 'date_time/date_time.html', context=context)
