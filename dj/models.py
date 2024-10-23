from django.db import models
from embed_video.fields import EmbedVideoField

from storage.models import Chapters


class Dj(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    code = models.CharField(max_length=1000, null=True, blank=True)
    slug = models.SlugField(max_length=50, null=True)
    photo = models.ImageField(upload_to="photos/", null=True, blank=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    git = models.CharField(max_length=100, null=True, blank=True)
    colab = models.CharField(max_length=100, null=True, blank=True)
    video = EmbedVideoField(blank=True, verbose_name='Видео')
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    cat = models.ForeignKey(Chapters, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Dj272(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    code = models.CharField(max_length=1000, null=True, blank=True)
    slug = models.SlugField(max_length=50, null=True)
    photo = models.ImageField(upload_to="photos/", null=True, blank=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    git = models.CharField(max_length=100, null=True, blank=True)
    colab = models.CharField(max_length=100, null=True, blank=True)
    video = EmbedVideoField(blank=True, verbose_name='Видео')
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    cat = models.ForeignKey(Chapters, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Dj280(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    code = models.CharField(max_length=1000, null=True, blank=True)
    slug = models.SlugField(max_length=50, null=True)
    photo = models.ImageField(upload_to="photos/", null=True, blank=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    git = models.CharField(max_length=100, null=True, blank=True)
    colab = models.CharField(max_length=100, null=True, blank=True)
    video = EmbedVideoField(blank=True, verbose_name='Видео')
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    cat = models.ForeignKey(Chapters, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Dj282(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    code = models.CharField(max_length=1000, null=True, blank=True)
    slug = models.SlugField(max_length=50, null=True)
    photo = models.ImageField(upload_to="photos/", null=True, blank=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    git = models.CharField(max_length=100, null=True, blank=True)
    colab = models.CharField(max_length=100, null=True, blank=True)
    video = EmbedVideoField(blank=True, verbose_name='Видео')
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    cat = models.ForeignKey(Chapters, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Dj291(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    code = models.CharField(max_length=1000, null=True, blank=True)
    slug = models.SlugField(max_length=50, null=True)
    photo = models.ImageField(upload_to="photos/", null=True, blank=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    git = models.CharField(max_length=100, null=True, blank=True)
    colab = models.CharField(max_length=100, null=True, blank=True)
    video = EmbedVideoField(blank=True, verbose_name='Видео')
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    cat = models.ForeignKey(Chapters, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Dj292(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    code = models.CharField(max_length=1000, null=True, blank=True)
    slug = models.SlugField(max_length=50, null=True)
    photo = models.ImageField(upload_to="photos/", null=True, blank=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    git = models.CharField(max_length=100, null=True, blank=True)
    colab = models.CharField(max_length=100, null=True, blank=True)
    video = EmbedVideoField(blank=True, verbose_name='Видео')
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    cat = models.ForeignKey(Chapters, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Dj301(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    code = models.CharField(max_length=1000, null=True, blank=True)
    slug = models.SlugField(max_length=50, null=True)
    photo = models.ImageField(upload_to="photos/", null=True, blank=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    git = models.CharField(max_length=100, null=True, blank=True)
    colab = models.CharField(max_length=100, null=True, blank=True)
    video = EmbedVideoField(blank=True, verbose_name='Видео')
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    cat = models.ForeignKey(Chapters, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Dj302(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    code = models.CharField(max_length=1000, null=True, blank=True)
    slug = models.SlugField(max_length=50, null=True)
    photo = models.ImageField(upload_to="photos/", null=True, blank=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    git = models.CharField(max_length=100, null=True, blank=True)
    colab = models.CharField(max_length=100, null=True, blank=True)
    video = EmbedVideoField(blank=True, verbose_name='Видео')
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    cat = models.ForeignKey(Chapters, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Dj311(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    code = models.CharField(max_length=1000, null=True, blank=True)
    slug = models.SlugField(max_length=50, null=True)
    photo = models.ImageField(upload_to="photos/", null=True, blank=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    git = models.CharField(max_length=100, null=True, blank=True)
    colab = models.CharField(max_length=100, null=True, blank=True)
    video = EmbedVideoField(blank=True, verbose_name='Видео')
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    cat = models.ForeignKey(Chapters, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Dj312(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    code = models.CharField(max_length=1000, null=True, blank=True)
    slug = models.SlugField(max_length=50, null=True)
    photo = models.ImageField(upload_to="photos/", null=True, blank=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    git = models.CharField(max_length=100, null=True, blank=True)
    colab = models.CharField(max_length=100, null=True, blank=True)
    video = EmbedVideoField(blank=True, verbose_name='Видео')
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    cat = models.ForeignKey(Chapters, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Dj320(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    code = models.CharField(max_length=1000, null=True, blank=True)
    slug = models.SlugField(max_length=50, null=True)
    photo = models.ImageField(upload_to="photos/", null=True, blank=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    git = models.CharField(max_length=100, null=True, blank=True)
    colab = models.CharField(max_length=100, null=True, blank=True)
    video = EmbedVideoField(blank=True, verbose_name='Видео')
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    cat = models.ForeignKey(Chapters, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
