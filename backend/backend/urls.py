from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/v1/', include('api.urls')),
    path('api/v1/', include('djoser.urls')),
    path('api/v1/', include('djoser.urls.jwt')),

    path('__debug__/', include('debug_toolbar.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
