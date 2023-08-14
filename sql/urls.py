from django.urls import path

from sql.views import *

urlpatterns = [
    path('sql/', sql, name='sql')
]