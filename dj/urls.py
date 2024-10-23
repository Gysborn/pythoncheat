from django.urls import path

from dj.views import *

urlpatterns = [
    path('dj/', index, name='index'),
    path('dj/<slug:post_slug>/', show_video, name='dj_video'),
]
