import datetime
from rest_framework.views import APIView
from rest_framework.response import Response

from . import models
from . import serializers

class AllDestinations(APIView):
    def get(self, request, format=None):
        destinations = models.Destination.objects.all()
        serializer = serializers.DestinationSerializer(destinations, many=True)
        return Response(serializer.data)

class SearchFlights(APIView):
    def get(self, request, destination, departure, format=None):
        date = datetime.datetime.strptime(departure, '%Y-%m-%d').date()
        flights = models.Flight.objects.filter(destination=destination).filter(dep_time__date=date)
        serializer = serializers.FlightSerializer(flights, many=True)
        return Response(serializer.data)

class OneFlight(APIView):
    def get(self, request, flight, format=None):
        flight = models.Flight.objects.get(pk=flight)
        serializer = serializers.FlightSerializer(flight)
        return Response(serializer.data)

class OneDestination(APIView):
    def get(self, request, airport_code, format=None):
        destination = models.Destination.objects.get(pk=airport_code)
        serializer = serializers.DestinationSerializer(destination)
        return Response(serializer.data)

class FlightFares(APIView):
    def get(self, request, flight, format=None):
        fares = models.Fare.objects.filter(flight=flight)
        serializer = serializers.FareSerializer(fares, many=True)
        return Response(serializer.data)

class AllCompanies(APIView):
    def get(self, request, format=None):
        companies = models.Company.objects.all()
        serializer = serializers.CompanySerializer(companies, many=True)
        return Response(serializer.data)

class CompanyHotels(APIView):
    def get(self, request, company, format=None):
        hotels = models.Hotel.objects.filter(company=company)
        serializer = serializers.HotelSerializer(hotels, many=True)
        return Response(serializer.data)

class HotelStays(APIView):
    def get(self, request, hotel, format=None):
        stays = models.Stay.objects.filter(hotel=hotel)
        serializer = serializers.StaySerializer(stays, many=True)
        return Response(serializer.data)