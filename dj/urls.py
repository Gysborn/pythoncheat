from django.urls import path

from dj.views import index

urlpatterns = [
    path('dj', index, name='index'),
]
