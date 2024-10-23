from django.contrib.auth import logout, login
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.views import LoginView
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView

from authentication.forms import UserAuthForm


class RegisterUser(CreateView):
    form_class = UserAuthForm
    template_name = 'users/user.html'
    success_url = '/'

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('/')


class LoginUser(LoginView):
    form_class = AuthenticationForm
    template_name = 'users/login.html'


def logout_user(request):
    logout(request)
    return redirect('login')

