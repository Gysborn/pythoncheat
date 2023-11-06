from django.contrib import admin

from .models import *


class FuncAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'code', 'description', 'slag')
    list_display_links = ('id', 'name')
#     # search_fields = ('description')


admin.site.register(F232)
admin.site.register(F233)
