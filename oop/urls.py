from django.urls import path

from oop.views import *

urlpatterns = [
    path('oop/', oop, name='oop'),
    path('oop/<slug:post_slug>/', show_video, name='oop_video'),

]