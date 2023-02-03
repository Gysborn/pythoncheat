from django.urls import path

from storage.views import index, temp, base

urlpatterns = [
    path('', index, name='index'),
    path('temp/', temp, name='temp'),
    path('base/', base, name='base'),
]
