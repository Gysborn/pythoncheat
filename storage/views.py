from django.shortcuts import render

from storage.models import *
from dj.models import Dj, Dj272, Dj280

menu = ['О сайте', 'Добавить статью', 'Войти']
chapters = Chapters.objects.all()


def index(request):
    return render(request, 'chapters/index.html', )


def eindexe(request):
    content_271 = Dj.objects.all()
    content_272 = Dj272.objects.all()
    content_281 = Dj280.objects.all()
    rows = {
        'content_271': content_271,
        'content_272': content_272,
        'content_281': content_281,
    }
    context = {'rows': rows}
    return render(request, 'chapters/tmp.html', context=context)


def temp(request):
    return render(request, 'chapters/tmp.html')


def base(request):
    return render(request, 'chapters/base.html')
