from django.urls import path

from flask.views import *

urlpatterns = [
    path('flask/', flask, name='flask')
]