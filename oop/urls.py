from django.urls import path

from oop.views import *

urlpatterns = [
    path('oop/', oop, name='oop')
]