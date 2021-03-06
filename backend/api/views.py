import datetime
import re
from django.conf import settings
from django.forms import ValidationError
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.authentication import get_authorization_header
from rest_framework import generics
import jwt

from . import models
from . import serializers

# REGISTRATION, AUTHENTICATION, AND AUTHORIZATION
class PassengerCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = serializers.RegisterPassengerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BlacklistTokenView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        try:
            refresh_token = request.data['refresh_token']
            print(refresh_token)
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


# USER
class User(APIView):
    def get(self, request, format=None):
        token = get_authorization_header(request).decode('utf-8')
        print(token)
        try:
            payload = jwt.decode(
                jwt=token, key=settings.SECRET_KEY, algorithms=['HS256'])
            user = models.User.objects.get(pk=payload['user_id'])
            serializer = serializers.AllUserSerializer(user)
            return Response(serializer.data)
        except jwt.ExpiredSignatureError as e:
            return Response({'error': 'Activations link expired'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError as e:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)

class IdUser(APIView):
    def get(self, request, user, format=None):
        _user = models.User.objects.get(pk=user)
        serializer = serializers.AllUserSerializer(_user)
        return Response(serializer.data)


# PASSENGER
class Passenger(APIView):
    def get(self, request, user, format=None):
        passenger = models.Passenger.objects.get(user=user)
        serializer = serializers.PassengerSerializer(passenger)
        return Response(serializer.data)


# AIRPORT ADMIN
class AirportAdmin(APIView):
    def get(self, request, user, format=None):
        airportAdmin = models.AirportAdmin.objects.get(user=user)
        serializer = serializers.AirportAdminSerializer(airportAdmin)
        return Response(serializer.data)


# AIRLINE ADMIN
class AirlineAdmin(APIView):
    def get(self, request, user, format=None):
        airlineAdmin = models.AirlineAdmin.objects.get(user=user)
        serializer = serializers.AirlineAdminSerializer(airlineAdmin)
        return Response(serializer.data)


# FLIGHT
class Flight(APIView):
    def get(self, request, flight, format=None):
        _flight = models.Flight.objects.get(pk=flight)
        serializer = serializers.GetFlightSerializer(_flight)
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


# BOOKS
# bulk create BOOKS
class MultipleBooksCreate(generics.CreateAPIView):
    serializer_class = serializers.BooksSerializer

    def post(self, request, *args, **kwargs):
        if isinstance(request.data, list):
            for item in request.data:
                if models.Books.objects.filter(fare=item['fare']).filter(passenger=item['passenger']).exists():
                    return Response("you have already purchased this fare", status=status.HTTP_400_BAD_REQUEST)
                # decrement the tickets count in fare
                fare = models.Fare.objects.get(pk=item['fare'])
                # can decrement
                if fare.tickets_quantity > 0:
                    data = serializers.FareSerializer(fare).data
                    data["tickets_quantity"] -= 1
                    fare_serializer = serializers.FareSerializer(fare, data=data)
                    if fare_serializer.is_valid():
                        fare_serializer.save()
                    else:
                        return Response(fare_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                # can not decrement
                else:
                    return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        return super(MultipleBooksCreate, self).post(request, *args, **kwargs)

    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get("data", {}), list):
            kwargs["many"] = True

        return super(MultipleBooksCreate, self).get_serializer(*args, **kwargs)


# TRANSACTION
class Transaction(APIView):
    def post(self, request, format=None):
        serializer = serializers.TransactionSerializer(data=request.data)
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

# bulk put the STAYS
class MultipleStaysUpdate(generics.UpdateAPIView):
    serializer_class = serializers.PutStaySerializer
    lookup_field = "id"

    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get("data", {}), list):
            kwargs["many"] = True

        return super(MultipleStaysUpdate, self).get_serializer(*args, **kwargs)

    def get_queryset(self, ids=None):
        if ids:
            return models.Stay.objects.filter(name__in=ids)

        return models.Stay.objects.filter(name=self.kwargs['name'])        

    def update(self, request, *args, **kwargs):
        ids = validate_ids(request.data)
        instances = self.get_queryset(ids=ids)
        serializer = self.get_serializer(
            instances, data=request.data, partial=False, many=True
        )
        print(serializer)
        serializer.is_valid(raise_exception=True)

        self.perform_update(serializer)

        return Response(serializer.data)


def validate_ids(data, field="name", unique=True):

    if isinstance(data, list):
        id_list = [x[field] for x in data]

        if unique and len(id_list) != len(set(id_list)):
            raise ValidationError("Multiple updates to a single {} found".format(field))

        print('id list created')
        return id_list

    return [data]


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
        serializer = serializers.AirlineComplaintSerializer(
            _complaint, data=request.data)
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
        serializer = serializers.GetAirlineComplaintSerializer(
            complaints, many=True)

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
        serializer = serializers.AirportComplaintSerializer(
            _complaint, data=request.data)
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
        serializer = serializers.GetAirportComplaintSerializer(
            complaints, many=True)
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


# AIRLINE
class Airline(APIView):
    def get(self, request, airline, format=None):
        airline = models.Airline.objects.filter(pk=airline).values()
        serializer = serializers.AirlineSerializer(airline, many=True)
        return Response(serializer.data)

    def get(self, request, format=None):
        airlines = models.Airline.objects.all()
        serializer = serializers.AirlineSerializer(airlines, many=True)
        return Response(serializer.data)


# AIRPLANE
class Airplane(APIView):
    def get(self, request, id, format=None):
        plane = models.Airplane.objects.filter(pk=id)
        serializer = serializers.AirplaneSerializer(plane, many=True)
        return Response(serializer.data)


# FARE
class Fare(APIView):
    def post(self, request, format=None):
        serializer = serializers.FareSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# MORE COMPLICATED VIEWS
class SearchFlights(APIView):
    def get(self, request, destination, departure, format=None):
        date = datetime.datetime.strptime(departure, '%Y-%m-%d').date()
        flights = models.Flight.objects.filter(
            destination=destination).filter(dep_time__date=date)
        serializer = serializers.GetFlightSerializer(flights, many=True)
        return Response(serializer.data)


class FlightFares(APIView):
    def get(self, request, flight, format=None):
        fares = models.Fare.objects.filter(
            flight=flight).exclude(tickets_quantity=0)
        serializer = serializers.FareSerializer(fares, many=True)
        return Response(serializer.data)


class CompanyHotels(APIView):
    def get(self, request, company, format=None):
        hotels = models.Hotel.objects.filter(company=company)
        serializer = serializers.GetHotelSerializer(hotels, many=True)
        return Response(serializer.data)


class HotelStays(APIView):
    def get(self, request, hotel, format=None):
        stays = models.Stay.objects.filter(hotel=hotel).filter(transaction=None)
        serializer = serializers.GetStaySerializer(stays, many=True)
        return Response(serializer.data)


class AirlineFlights(APIView):
    def get(self, request, airline, format=None):
        flights = models.Flight.objects.filter(airline=airline)
        serializer = serializers.FlightSerializer(flights, many=True)
        return Response(serializer.data)


class AirlineAirplanes(APIView):
    def get(self, request, airline, format=None):
        airplanes = models.Airplane.objects.filter(airline=airline)
        serializer = serializers.AirplaneSerializer(airplanes, many=True)
        return Response(serializer.data)

class PassengerAirportComplaints(APIView):
    def get(self, request, user, format=None):
        passenger = models.Passenger.objects.get(user=user)
        p_serializer = serializers.PassengerSerializer(passenger)
        complaints = models.AirportComplaint.objects.filter(passenger=p_serializer.data['id'])
        serializer = serializers.GetAirportComplaintSerializer(complaints, many=True)
        return Response(serializer.data)

class PassengerAirlineComplaints(APIView):
    def get(self, request, user, format=None):
        passenger = models.Passenger.objects.get(user=user)
        p_serializer = serializers.PassengerSerializer(passenger)
        complaints = models.AirlineComplaint.objects.filter(passenger=p_serializer.data['id'])
        serializer = serializers.GetAirlineComplaintSerializer(complaints, many=True)
        return Response(serializer.data)