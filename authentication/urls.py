from django.urls import path

from authentication.views import *

urlpatterns = [
    path('user_create/', RegisterUser.as_view(), name='user_create'),
    path('login/', LoginUser.as_view(), name='login'),
    path('logout/', logout_user, name='logout'),
]
