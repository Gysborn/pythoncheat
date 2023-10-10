from django.urls import path

from testing.views import *

urlpatterns = [
    path('testing/', testing, name='testing'),
    path('testing/<slug:post_slug>/', show_video, name='testing_video'),

]