from django.urls import path

from exceptions.views import *

urlpatterns = [
    path('ex/', ex, name='ex')
]