from django.db import models
from embed_video.fields import EmbedVideoField
from storage.models import Chapters


class S141(models.Model):
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


class S142(models.Model):
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


class S151(models.Model):
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


class S152(models.Model):
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


class S161(models.Model):
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


class S162(models.Model):
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
