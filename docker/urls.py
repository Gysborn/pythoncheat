from django.urls import path

from docker.views import *

urlpatterns = [
    path('docker/', docker, name='docker'),
    path('docker/<slug:post_slug>/', show_video, name='docker_video'),

]
