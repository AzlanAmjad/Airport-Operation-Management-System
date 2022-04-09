from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import User, Passenger, AirportAdmin, AirlineAdmin, Company, Hotel, Transaction, Stay, AirportComplaint, Airline, AirlineComplaint, Airplane, Destination, Flight, Fare, Ticket
from .serializers import UserSerializer, PassengerSerializer, AirportAdminSerializer, AirlineAdminSerializer, CompanySerializer, HotelSerializer, TransactionSerializer, StaySerializer, AirportComplaintSerializer, AirlineSerializer, AirlineComplaintSerializer, AirplaneSerializer, DestinationSerializer, FlightSerializer, FareSerializer, TicketSerializer 

# Create your views here.

