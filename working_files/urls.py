from django.urls import path

from .views import *

urlpatterns = [
    path('files/', files, name='files'),
]