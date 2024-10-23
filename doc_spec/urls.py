from django.urls import path

from doc_spec.views import *

urlpatterns = [
    path('doc/', doc, name='doc'),
    path('doc/<slug:post_slug>/', show_video, name='doc_video'),

]
