from django.urls import path

from doc_spec.views import *

urlpatterns = [
    path('doc/', doc, name='doc')
]
