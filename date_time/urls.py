from django.urls import path

from .views import *

urlpatterns = [
    path('dt/', date_time, name='date_time'),
]