from django.urls import path

from func_prog.views import *

urlpatterns = [
    path('fp/', func_prog, name='func_prog'),
    path('fp/<slug:post_slug>/', show_video, name='fp_video'),
]
