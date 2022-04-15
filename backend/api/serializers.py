from django.db import IntegrityError
from django.forms import ValidationError
from rest_framework import serializers
from . import models

# USER
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = (
            'email',
            'password',
            'first_name',
            'last_name'
        )

class AllUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        exclude = ('password',)


# PASSENGER REGISTRATION
class RegisterPassengerSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)

    class Meta:
        model = models.Passenger
        fields = '__all__'

    def create(self, validated_data):
        user = models.User.objects.create_user(validated_data['user']['email'], validated_data['user']['password'],
                                                validated_data['user']['first_name'], validated_data['user']['last_name'])
        user.a_passenger = True
        user.save()
        passenger = models.Passenger.objects.create(user=user, ssn=validated_data.pop('ssn'), address=validated_data.pop('address'))
        return passenger


# PASSENGER
class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Passenger
        fields = '__all__'


# AIRPORT ADMIN
class AirportAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AirportAdmin
        fields = '__all__'


# AIRLINE ADMIN
class AirlineAdminSerializer(serializers.ModelSerializer):
    airline_name = serializers.CharField(source='airline.name')

    class Meta:
        model = models.AirlineAdmin
        fields = ('id', 'user', 'employee_id', 'airline', 'airline_name')


# COMPANY
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Company
        fields = '__all__'


# HOTEL
class GetHotelSerializer(serializers.ModelSerializer):
    company_name = serializers.CharField(source='company.name')

    class Meta:
        model = models.Hotel
        fields = ('pk', 'name', 'location', 'company_name')


class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Hotel
        fields = '__all__'


# TRANSACTION
class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Transaction
        fields = '__all__'


# STAY
class StaySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Stay
        fields = '__all__'


class GetStaySerializer(serializers.ModelSerializer):
    hotel_name = serializers.CharField(source='hotel.name')

    class Meta:
        model = models.Stay
        fields = ('id', 'name', 'price', 'description', 'hotel_name')


# AIRPORT COMPLAINT
class AirportComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AirportComplaint
        fields = '__all__'


class GetAirportComplaintSerializer(serializers.ModelSerializer):
    passenger_email = serializers.EmailField(source='passenger.user.email')

    class Meta:
        model = models.AirportComplaint
        fields = ('pk', 'description', 'admin', 'passenger_email', 'passenger')


# AIRLINE
class AirlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Airline
        fields = '__all__'


# AIRLINE COMPLAINT
class AirlineComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AirlineComplaint
        fields = '__all__'


class GetAirlineComplaintSerializer(serializers.ModelSerializer):
    passenger_email = serializers.EmailField(source='passenger.user.email')
    airline_name = serializers.CharField(source='airline.name')

    class Meta:
        model = models.AirlineComplaint
        fields = ('pk', 'description', 'admin', 'passenger_email', 'passenger', 'airline', 'airline_name')


# AIRPLANE
class AirplaneSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Airplane
        fields = '__all__'


# DESTINATION
class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Destination
        fields = '__all__'


# FLIGHT
class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Flight
        fields = '__all__'

class GetFlightSerializer(serializers.ModelSerializer):
    airline_name = serializers.CharField(source='airline.name')
    destination_city = serializers.CharField(source='destination.city')

    class Meta:
        model = models.Flight
        fields = ('id', 'airline', 'dep_time', 'arrival_time',
                  'destination', 'plane', 'airline_name', 'destination_city')

# FARE
class FareSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Fare
        fields = '__all__'


# BOOKS
class BulkCreateListSerializer(serializers.ListSerializer):
    def create(self, validated_data):
        result = [self.child.create(attrs) for attrs in validated_data]

        try:
            self.child.Meta.model.objects.bulk_create(result)
        except IntegrityError as e:
            raise ValidationError(e)

        return result

class BooksSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        instance = models.Books(**validated_data)

        if isinstance(self._kwargs["data"], dict):
            instance.save()

        return instance

    class Meta:
        model = models.Books
        fields = '__all__'
        list_serializer_class = BulkCreateListSerializer