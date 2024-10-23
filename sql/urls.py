from django.urls import path

from sql.views import *

urlpatterns = [
    path('sql/', sql, name='sql'),
    path('sql/<slug:post_slug>/', show_video, name='sql_video'),

]