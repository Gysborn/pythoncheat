from django.urls import path

from git.views import *

urlpatterns = [
    path('git/', git, name='git')
]