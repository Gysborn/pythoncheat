from django.urls import path

from typs.views import *

urlpatterns = [
    path('types/', types, name='types'),
    path('types/<slug:post_slug>/', show_video, name='types_video'),

]