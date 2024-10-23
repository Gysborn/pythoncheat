from django.urls import path

from storage.views import index, temp

urlpatterns = [
    path('', index, name='index'),
    path('temp/', temp, name='temp'),
]
