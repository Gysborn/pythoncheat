from django.urls import path

from hosting.views import *

urlpatterns = [
    path('hosting/', hosting, name='hosting'),
    path('hosting/<slug:post_slug>/', show_video, name='hosting_video'),

]