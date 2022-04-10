import datetime
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from . import models
from . import serializers

# FLIGHT
class Flight(APIView):
    def get(self, request, flight, format=None):
        _flight = models.Flight.objects.get(pk=flight)
        serializer = serializers.FlightSerializer(_flight)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = serializers.FlightSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, flight, format=None):
        _flight = models.Flight.objects.get(pk=flight)
        serializer = serializers.FlightSerializer(_flight, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, flight, format=None):
        _flight = models.Flight.objects.get(pk=flight)
        _flight.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# DESTINATION
class Destination(APIView):
    def get(self, request, destination, format=None):
        oneDestination = models.Destination.objects.get(pk=destination)
        serializer = serializers.DestinationSerializer(oneDestination)
        return Response(serializer.data)

class Destinations(APIView):
    def get(self, request, format=None):
        destinations = models.Destination.objects.all()
        serializer = serializers.DestinationSerializer(destinations, many=True)
        return Response(serializer.data)


# TICKET
class Ticket(APIView):
    def put(self, request, ticket, format=None):
        _ticket = models.Ticket.objects.get(pk=ticket)
        serializer = serializers.TicketSerializer(_ticket, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# TRANSACTION
class Transaction(APIView):
    def post(self, request, format=None):
        serializer = serializers.TicketSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# STAY
class Stay(APIView):
    def post(self, request, format=None):
        serializer = serializers.StaySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, stay, format=None):
        _stay = models.Stay.objects.get(pk=stay)
        serializer = serializers.StaySerializer(_stay, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# AIRLINE COMPLAINT
class AirlineComplaint(APIView):
    def post(self, request, format=None):
        serializer = serializers.AirlineComplaintSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, complaint, format=None):
        _complaint = models.AirlineComplaint.objects.get(pk=complaint)
        serializer = serializers.AirlineComplaintSerializer(_complaint, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, complaint, format=None):
        _complaint = models.AirlineComplaint.objects.get(pk=complaint)
        _complaint.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class AirlineComplaints(APIView):
    def get(self, request, airline, format=None):
        complaints = models.AirlineComplaint.objects.filter(airline=airline)
        serializer = serializers.AirlineComplaintSerializer(complaints, many=True)
        return Response(serializer.data)


# AIRPORT COMPLAINT
class AirportComplaint(APIView):
    def post(self, request, format=None):
        serializer = serializers.AirportComplaintSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, complaint, format=None):
        _complaint = models.AirportComplaint.objects.get(pk=complaint)
        serializer = serializers.AirportComplaintSerializer(_complaint, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, complaint, format=None):
        _complaint = models.AirportComplaint.objects.get(pk=complaint)
        _complaint.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class AirportComplaints(APIView):
    def get(self, request, format=None):
        complaints = models.AirportComplaint.objects.all()
        serializer = serializers.AirportComplaintSerializer(complaints, many=True)
        return Response(serializer.data)


# COMPANY
class Company(APIView):
    def post(self, request, format=None):
        serializer = serializers.CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, company, format=None):
        _company = models.Company.objects.get(pk=company)
        serializer = serializers.CompanySerializer(_company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, company, format=None):
        _company = models.Company.objects.get(pk=company)
        _company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class Companies(APIView):
    def get(self, request, format=None):
        companies = models.Company.objects.all()
        serializer = serializers.CompanySerializer(companies, many=True)
        return Response(serializer.data)


# HOTEL
class Hotel(APIView):
    def post(self, request, format=None):
        serializer = serializers.HotelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, hotel, format=None):
        _hotel = models.Hotel.objects.get(pk=hotel)
        serializer = serializers.HotelSerializer(_hotel, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# PASSENGER

# AIRPORT ADMIN

# AIRLINE ADMIN

# AIRLINE

# AIRPLANE

# FARE


# MORE COMPLICATED VIEWS
class SearchFlights(APIView):
    def get(self, request, destination, departure, format=None):
        date = datetime.datetime.strptime(departure, '%Y-%m-%d').date()
        flights = models.Flight.objects.filter(destination=destination).filter(dep_time__date=date)
        serializer = serializers.FlightSerializer(flights, many=True)
        return Response(serializer.data)

class FlightFares(APIView):
    def get(self, request, flight, format=None):
        fares = models.Fare.objects.filter(flight=flight)
        serializer = serializers.FareSerializer(fares, many=True)
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

class AirlineFlights(APIView):
    def get(self, request, airline, format=None):
        flights = models.Flight.objects.filter(airline=airline)
        serializer = serializers.FlightSerializer(flights, many=True)
        return Response(serializer.data)
