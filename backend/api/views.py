import datetime
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from . import models
from . import serializers


class Destinations(APIView):
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


class Flight(APIView):
    def get(self, request, flight, format=None):
        flight = models.Flight.objects.get(pk=flight)
        serializer = serializers.FlightSerializer(flight)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = serializers.FlightSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, flight, format=None):
        flight = models.Flight.objects.get(pk=flight)
        serializer = serializers.FlightSerializer(flight, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, flight, format=None):
        flight = models.Flight.objects.get(pk=flight)
        flight.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class Destination(APIView):
    def get(self, request, destination, format=None):
        oneDestination = models.Destination.objects.get(pk=destination)
        serializer = serializers.DestinationSerializer(oneDestination)
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


class FareTicket(APIView):
    def get(self, request, fare, format=None):
        ticket = models.Ticket.objects.filter(fare=fare).filter(passenger=None).first()
        serializer = serializers.TicketSerializer(ticket)
        return Response(serializer.data)


class Ticket(APIView):
    def put(self, request, ticket, format=None):
        ticket = models.Ticket.objects.get(pk=ticket)
        serializer = serializers.TicketSerializer(ticket, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Transaction(APIView):
    def post(self, request, format=None):
        serializer = serializers.TicketSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Stay(APIView):
    def put(self, request, stay, format=None):
        stay = models.Stay.objects.get(pk=stay)
        serializer = serializers.StaySerializer(stay, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AirlineFlights(APIView):
    def get(self, request, airline, format=None):
        flights = models.Flight.objects.filter(airline=airline)
        serializer = serializers.FlightSerializer(flights, many=True)
        return Response(serializer.data)


class AirlineComplaint(APIView):
    def post(self, request, format=None):
        serializer = serializers.AirlineComplaintSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, complaint, format=None):
        complaint = models.AirlineComplaint.objects.get(pk=complaint)
        serializer = serializers.AirlineComplaintSerializer(complaint, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, complaint, format=None):
        complaint = models.AirlineComplaint.objects.get(pk=complaint)
        complaint.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AirlineComplaints(APIView):
    def get(self, request, airline, format=None):
        complaints = models.AirlineComplaint.objects.filter(airline=airline)
        serializer = serializers.AirlineComplaintSerializer(complaints, many=True)
        return Response(serializer.data)


class AirportComplaint(APIView):
    def post(self, request, format=None):
        serializer = serializers.AirportComplaintSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, complaint, format=None):
        complaint = models.AirportComplaint.objects.get(pk=complaint)
        serializer = serializers.AirportComplaintSerializer(complaint, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, complaint, format=None):
        complaint = models.AirportComplaint.objects.get(pk=complaint)
        complaint.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AirportComplaints(APIView):
    def get(self, request, format=None):
        complaints = models.AirportComplaint.objects.all()
        serializer = serializers.AirportComplaintSerializer(complaints, many=True)
        return Response(serializer.data)