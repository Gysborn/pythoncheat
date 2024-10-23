from django.contrib import admin

from .models import *


class DateTimeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'code', 'description', 'slag')
    list_display_links = ('id', 'name', 'code', 'description', 'slag')


#     # search_fields = ('description')


admin.site.register(DateTime)
