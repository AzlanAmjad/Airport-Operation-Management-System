from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # REGISTRATION, AUTHENTICATION, AND AUTHORIZATION
    # JWT tokens
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # post passenger
    path('register/', views.PassengerCreate.as_view()),
    # post refresh_token to blacklist token when logging out
    path('logout/blacklist/', views.BlacklistTokenView.as_view()),

    # USER
    # get user
    path('user/', views.User.as_view()),

    # FLIGHT
    # post flight
    path('flight/', views.Flight.as_view()),
    # get flight, # put flight, # delete flight
    path('flight/<int:flight>/', views.Flight.as_view()),

    # DESTINATION
    # get destination
    path('destination/<slug:destination>/', views.Destination.as_view()),
    # get all destinations
    path('destinations/', views.Destinations.as_view()),

    # BOOKS
    # post books
    path('books/', views.Books.as_view()),

    # TRANSACTION
    # post transaction
    path('transaction/', views.Transaction.as_view()),

    # STAY
    # post stay
    path('stay/', views.Stay.as_view()),
    # put stay
    path('stay/<int:stay>/', views.Stay.as_view()),

    # AIRLINE COMPLAINT
    # post airline complaint
    path('airline-complaint/', views.AirlineComplaint.as_view()),
    # put airline complaint, delete airline complaint
    path('airline-complaint/<int:complaint>/',
         views.AirlineComplaint.as_view()),
    # get airline complaints
    path('airline-complaints/<int:airline>/',
         views.AirlineComplaints.as_view()),

    # AIRPORT COMPLAINT
    # post airport complaint
    path('airport-complaint/', views.AirportComplaint.as_view()),
    # put airport complaint, delete airport complaint
    path('airport-complaint/<int:complaint>/',
         views.AirportComplaint.as_view()),
    # get airport complaints
    path('airport-complaints/', views.AirportComplaints.as_view()),

    # COMPANY
    # post company
    path('company/', views.Company.as_view()),
    # put company, delete company
    path('company/<int:company>', views.Company.as_view()),
    # get companies
    path('companies/', views.Companies.as_view()),

    # HOTEL
    # post hotel
    path('hotel/', views.Hotel.as_view()),
    # put hotel
    path('hotel/<int:hotel>', views.Hotel.as_view()),

    # PASSENGER
    # AIRPORT ADMIN
    # AIRLINE ADMIN
    # AIRLINE
    # AIRPLANE

    # get airline information based on id
    path('airlines/<int:airline>/', views.Airline.as_view()),

    # FARE
    # post fare
    path('fare/', views.Fare.as_view()),

    # MORE COMPLICATED END-POINTS
    # get searched flights
    path('flights/<slug:destination>/<slug:departure>/',
         views.SearchFlights.as_view()),
    # get available flight fares
    path('fares/<int:flight>/', views.FlightFares.as_view()),
    # get company hotels
    path('hotels/<int:company>/', views.CompanyHotels.as_view()),
    # get hotel stays
    path('stays/<int:hotel>/', views.HotelStays.as_view()),
    # get airline flights
    path('flights/<int:airline>/', views.AirlineFlights.as_view()),
    # get airline airplanes
    path('airplanes/<int:airline>/', views.AirlineAirplanes.as_view()),
]
