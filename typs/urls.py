from django.urls import path

from typs.views import *

urlpatterns = [
    path('types/', types, name='types')
]