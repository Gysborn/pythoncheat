from django.urls import path

from docker.views import *

urlpatterns = [
    path('docker/', docker, name='docker'),
]
