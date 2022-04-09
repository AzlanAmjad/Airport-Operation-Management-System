from django.urls import path
from . import views

urlpatterns = [
    path('destinations/', views.AllDestinations.as_view()),
    path('flights/<slug:destination>/<slug:departure>/', views.SearchFlights.as_view()),
    path('flight/<int:flight_num>/', views.OneFlight.as_view()),
    path('destination/<slug:airport_code>/', views.OneDestination.as_view()),
    path('fares/<int:flight_num>', views.FlightFares.as_view())
]
