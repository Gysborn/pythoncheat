"""cheat URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from cheat import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('storage.urls')),
    path('', include('dj.urls')),
    path('', include('docker.urls')),
    path('', include('flask.urls')),
    path('', include('func_prog.urls')),
    path('', include('hosting.urls')),
    path('', include('oop.urls')),
    path('', include('exceptions.urls')),
    path('', include('git.urls')),
    path('', include('postgres.urls')),
    path('', include('sql.urls')),
    path('', include('testing.urls')),
    path('', include('typs.urls')),
    path('', include('regulars.urls')),
    path('', include('ide.urls')),
    path('', include('doc_spec.urls')),
    path('', include('lib.urls')),
    path('', include('cycle.urls')),
    path('', include('working_files.urls')),
    path('', include('date_time.urls')),
    path('', include('comp_science.urls')),
    path('', include('authentication.urls')),

]

if settings.DEBUG:
    import debug_toolbar

    urlpatterns += path("__debug__/", include("debug_toolbar.urls")),
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
