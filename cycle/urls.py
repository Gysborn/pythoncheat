from django.urls import path

from cycle.views import *

urlpatterns = [
    path('cycle/', cycle, name='cycle'),
    path('cycle/<slug:post_slug>/', show_video, name='cycle_video'),

]
