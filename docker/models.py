from django.db import models
from embed_video.fields import EmbedVideoField
from storage.models import Chapters


class D252(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    code = models.CharField(max_length=2000, null=True, blank=True)
    slug = models.SlugField(max_length=50, null=True)
    photo = models.ImageField(upload_to="photos/", null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)
    git = models.CharField(max_length=100, null=True, blank=True)
    colab = models.CharField(max_length=100, null=True, blank=True)
    video = EmbedVideoField(blank=True, verbose_name='Видео')
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    cat = models.ForeignKey(Chapters, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class D261(models.Model):
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


class D262(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    code = models.CharField(max_length=2000, null=True, blank=True)
    slug = models.SlugField(max_length=50, null=True)
    photo = models.ImageField(upload_to="photos/", null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)
    git = models.CharField(max_length=100, null=True, blank=True)
    colab = models.CharField(max_length=100, null=True, blank=True)
    video = EmbedVideoField(blank=True, verbose_name='Видео')
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    cat = models.ForeignKey(Chapters, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name