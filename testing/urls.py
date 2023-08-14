from django.urls import path

from testing.views import *

urlpatterns = [
    path('testing/', testing, name='testing')
]