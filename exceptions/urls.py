from django.urls import path

from exceptions.views import *

urlpatterns = [
    path('ex/', ex, name='ex'),
    path('ex/<slug:post_slug>/', show_video, name='ex_video'),

]