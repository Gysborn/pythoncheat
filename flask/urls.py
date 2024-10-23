from django.urls import path

from flask.views import *

urlpatterns = [
    path('flask/', flask, name='flask'),
    path('flask/<slug:post_slug>/', show_video, name='flask_video'),

]