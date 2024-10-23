from django.urls import path

from ide.views import *

urlpatterns = [
    path('ide/', ide, name='ide'),
    path('ide/<slug:post_slug>/', show_video, name='ide_video'),

]