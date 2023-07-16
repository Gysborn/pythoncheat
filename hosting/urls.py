from django.urls import path

from hosting.views import *

urlpatterns = [
    path('hosting/', hosting, name='hosting')
]