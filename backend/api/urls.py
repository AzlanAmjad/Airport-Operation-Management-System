from django.urls import path
from . import views

urlpatterns = [
    path('destinations/', views.AllDestinations.as_view()),
    path('flights/<slug:destination>/<slug:departure>/', views.SearchFlights.as_view()),
    path('flight/<int:flight>/', views.OneFlight.as_view()),
    path('destination/<slug:airport_code>/', views.OneDestination.as_view()),
    path('fares/<int:flight>', views.FlightFares.as_view())
]
