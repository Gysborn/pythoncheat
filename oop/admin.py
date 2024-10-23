from django.contrib import admin

from .models import *


class OopAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'code', 'description', 'slag')
    list_display_links = ('id', 'name')
#     # search_fields = ('description')


admin.site.register(Oop211)
admin.site.register(Oop212)
admin.site.register(Oop221)
admin.site.register(Oop222)
admin.site.register(Oop223)
