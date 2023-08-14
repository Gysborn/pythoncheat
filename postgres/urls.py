from django.urls import path

from postgres.views import *

urlpatterns = [
    path('postgres/', postgres, name='postgres')
]