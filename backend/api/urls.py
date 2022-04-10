from django.urls import path
from . import views

urlpatterns = [
    # get all destinations
    path('destinations/', views.AllDestinations.as_view()),
    # get searched flights
    path('flights/<slug:destination>/<slug:departure>/', views.SearchFlights.as_view()),
    # get one flight
    path('flight/<int:flight>/', views.OneFlight.as_view()),
    # get one destination
    path('destination/<slug:airport_code>/', views.OneDestination.as_view()),
    # get flight fares
    path('fares/<int:flight>/', views.FlightFares.as_view()),
    # get all companies
    path('companies/', views.AllCompanies.as_view()),
    # get company hotels
    path('hotels/<slug:company>/', views.CompanyHotels.as_view()),
    # get hotel stays
    path('stays/<int:hotel>/', views.HotelStays.as_view()),
    # get any fare ticket
    path('ticket/<int:fare>/', views.FareTicket.as_view()),
]
