from django import forms
from django.contrib.auth.forms import UserCreationForm

from .models import *


class UserAuthForm(UserCreationForm):
    username = forms.CharField(label='Username', widget=forms.TextInput(attrs={"class": "form-input"}))
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput(attrs={"class": "form-input"}))
    password2 = forms.CharField(label='Pass retry', widget=forms.PasswordInput(attrs={"class": "form-input"}))
    email = forms.EmailField(label='Email', widget=forms.EmailInput(attrs={"class": "form-input"}))


    class Meta:
        model = User
        fields = ('username', 'password1', 'password2', 'email')

        # widgets = {
        #     'password1': forms.PasswordInput(attrs={"class": "form-input"}),
        #     'password2': forms.PasswordInput(attrs={"class": "form-input"}),
        #     'email': forms.EmailInput(attrs={"class": "form-input"})
        # }