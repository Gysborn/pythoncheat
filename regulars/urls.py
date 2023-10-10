from django.urls import path

from regulars.views import *

urlpatterns = [
    path('re/', re, name='re'),
    path('re/<slug:post_slug>/', show_video, name='re_video'),

]