from rest_framework.views import APIView
from rest_framework.response import Response

from . import models
from . import serializers

class AllDestinations(APIView):
    def get(self, request, format=None):
        destinations = models.Destination.objects.all()
        serializer = serializers.DestinationSerializer(destinations, many=True)
        return Response(serializer.data)

