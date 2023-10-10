from django.urls import path

from git.views import *

urlpatterns = [
    path('git/', git, name='git'),
    path('git/<slug:post_slug>/', show_video, name='git_video'),

]