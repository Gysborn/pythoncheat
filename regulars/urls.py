from django.urls import path

from regulars.views import *

urlpatterns = [
    path('re/', re, name='re')
]