from django.shortcuts import render

from storage.models import *

menu = ['О сайте', 'Добавить статью', 'Войти']
chapters = Chapters.objects.all()


def index(request):
    return render(request, 'chapters/index.html', )


def temp(request):
    return render(request, 'chapters/tmp.html')


def base(request):
    return render(request, 'chapters/base.html')
