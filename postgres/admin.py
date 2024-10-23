from django.contrib import admin

from .models import *


class PostgresAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'code', 'description', 'slag')
    list_display_links = ('id', 'name')
#     # search_fields = ('description')


admin.site.register(Postgres)
