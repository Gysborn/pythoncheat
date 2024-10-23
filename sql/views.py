from django.shortcuts import render, get_object_or_404

from sql.models import *

_sql = {
    '141': S141,
    '142': S142,
    '151': S151,
    '152': S152,
    '161': S161,
    '162': S162,
}


def sql(request):
    return render(request,
                  'sql/sql.html',
                  {
                      'sql_141': S141.objects.all(),
                      'sql_142': S142.objects.all(),
                      'sql_151': S151.objects.all(),
                      'sql_152': S152.objects.all(),
                      'sql_161': S161.objects.all(),
                      'sql_162': S162.objects.all(),
                  }
                  )


def show_video(request, post_slug):
    obj = post_slug[:3]
    vid = get_object_or_404(_sql[obj], slug=post_slug)
    context = {
        'name': vid.name,
        'code': vid.code,
        'description': vid.description,
        'movie': vid.video,

    }
    return render(request,
                  'video/show_video.html', context=context)
