from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
     # REGISTRATION, AUTHENTICATION, AND AUTHORIZATION
     # JWT tokens to log in
     path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
     # POST passenger to sign up
     path('register/', views.PassengerCreate.as_view()),
     # POST refresh_token to blacklist token when logging out
     path('logout/blacklist/', views.BlacklistTokenView.as_view()),

     # USER
     # GET user using JWT in Header
     path('user/', views.User.as_view()),
     # GET user
     path('user/<int:user>/', views.IdUser.as_view()),

     # PASSENGER
     # GET passenger
     path('passenger/<int:user>/', views.Passenger.as_view()),

     # AIRPORT ADMIN
     # GET airport admin
     path('airport-admin/<int:user>/', views.AirportAdmin.as_view()),

     # AIRLINE ADMIN
     # GET airline admin
     path('airline-admin/<int:user>/', views.AirlineAdmin.as_view()),

     # FLIGHT
     # POST flight
     path('flight/', views.Flight.as_view()),
     # GET flight, # PUT flight, # DELETE flight
     path('flight/<int:flight>/', views.Flight.as_view()),

     # DESTINATION
     # GET destination
     path('destination/<slug:destination>/', views.Destination.as_view()),
     # GET all destinations
     path('destinations/', views.Destinations.as_view()),

     # BOOKS
     # POST list of books
     path('multiple-books/', views.MultipleBooksCreate.as_view()),

     # TRANSACTION
     # POST transaction
     path('transaction/', views.Transaction.as_view()),

     # STAY
     # POST stay
     path('stay/', views.Stay.as_view()),
     # PUT stay
     path('stay/<int:stay>/', views.Stay.as_view()),
     # PUT list of stays
     path('multiple-stays/', views.MultipleStaysUpdate.as_view()),

     # AIRLINE COMPLAINT
     # POST airline complaint
     path('airline-complaint/', views.AirlineComplaint.as_view()),
     # PUT airline complaint, DELETE airline complaint
     path('airline-complaint/<int:complaint>/', views.AirlineComplaint.as_view()),
     # GET airline complaints
     path('airline-complaints/<int:airline>/', views.AirlineComplaints.as_view()),

     # AIRPORT COMPLAINT
     # POST airport complaint
     path('airport-complaint/', views.AirportComplaint.as_view()),
     # PUT airport complaint, DELETE airport complaint
     path('airport-complaint/<int:complaint>/', views.AirportComplaint.as_view()),
     # GET airport complaints
     path('airport-complaints/', views.AirportComplaints.as_view()),

     # COMPANY
     # POST company
     path('company/', views.Company.as_view()),
     # PUT company, DELETE company
     path('company/<int:company>/', views.Company.as_view()),
     # GET companies
     path('companies/', views.Companies.as_view()),

     # HOTEL
     # POST hotel
     path('hotel/', views.Hotel.as_view()),
     # PUT hotel
     path('hotel/<int:hotel>/', views.Hotel.as_view()),

     # AIRPLANE
     # GET airplane
     path('airplane/<int:id>/', views.Airplane.as_view()),

     # AIRLINE
     # GET airline information based on id
     path('airlines/<int:airline>/', views.Airline.as_view()),
     # GET all airlines
     path('airlines/', views.Airline.as_view()),

     # FARE
     # POST fare
     path('fare/', views.Fare.as_view()),

     # MORE COMPLICATED END-POINTS
     # GET searched flights
     path('flights/<slug:destination>/<slug:departure>/', views.SearchFlights.as_view()),
     # GET available flight fares
     path('fares/<int:flight>/', views.FlightFares.as_view()),
     # GET company hotels
     path('hotels/<int:company>/', views.CompanyHotels.as_view()),
     # GET hotel stays
     path('stays/<int:hotel>/', views.HotelStays.as_view()),
     # GET airline flights
     path('flights/<int:airline>/', views.AirlineFlights.as_view()),
     # GET airline airplanes
     path('airplanes/<int:airline>/', views.AirlineAirplanes.as_view()),
     # GET user airport complaints
     path('passenger/airport-complaints/<int:user>/', views.PassengerAirportComplaints.as_view()),
     # GET user airline complaints
     path('passenger/airline-complaints/<int:user>/', views.PassengerAirlineComplaints.as_view()),
]
