from django.urls import path

from postgres.views import *

urlpatterns = [
    path('postgres/', postgres, name='postgres'),
    path('postgres/<slug:post_slug>/', show_video, name='postgres_video'),

]