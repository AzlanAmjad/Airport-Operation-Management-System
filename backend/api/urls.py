from django.urls import path
from . import views

urlpatterns = [
    path('destinations/', views.AllDestinations.as_view())
]
