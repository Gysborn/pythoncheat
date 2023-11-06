from django.urls import path

from comp_science.views import *

urlpatterns = [
    path('cs/', comp_sci, name='comp_sci'),
    path('cs/<slug:post_slug>/', show_video, name='cs_video'),
]
