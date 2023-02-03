from django.db import models


class Chapters(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    photo = models.ImageField(upload_to="photos/", null=True, blank=True)
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.name
