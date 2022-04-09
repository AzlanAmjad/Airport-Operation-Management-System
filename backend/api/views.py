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
    def get(self, request, flight_num, format=None):
        flight = models.Flight.objects.filter(flight_num=flight_num)
        serializer = serializers.FlightSerializer(flight, many=True)
        return Response(serializer.data)