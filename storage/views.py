from django.shortcuts import render


def index(request):
    return render(request, 'chapters/index.html', )


def temp(request):
    return render(request, 'chapters/tmp.html')
