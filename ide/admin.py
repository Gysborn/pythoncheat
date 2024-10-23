from django.contrib import admin

from ide.models import *


class IdeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'code', 'description', 'slag')
    list_display_links = ('id', 'name')


admin.site.register(Ide)
admin.site.register(Ide_env)
admin.site.register(Ide_env_com)

