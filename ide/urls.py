from django.urls import path

from ide.views import *

urlpatterns = [
    path('ide/', ide, name='sql')
]