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
        date = datetime.datetime.strptime(departure, '%Y-%M-%d').date()
        flights = models.Flight.objects.filter(dest=destination).filter(dep_time__date=date)
        serializer = serializers.FlightSerializer(flights, many=True)
        return Response(serializer.data)
