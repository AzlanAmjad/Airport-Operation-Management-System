import email
from pyexpat import model
from pkg_resources import require
from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = (
            'email',
            'password',
            'first_name',
            'last_name'
        )

class RegisterPassengerSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)

    class Meta:
        model = models.Passenger
        fields = (
            "email",
            "ssn",
            "address"
        )

    def create(self, validated_data):
        user = models.User.objects.create_user(validated_data['user']['email'], validated_data['user']['password'], 
            validated_data['user']['first_name'], validated_data['user']['last_name'])
        user.a_passenger = True
        user.save()
        passenger = models.Passenger.objects.create(email=user, ssn=validated_data.pop('ssn'), address=validated_data.pop('address'))
        return passenger

class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Passenger
        fields = (
            "email",
            "ssn",
            "address"
        )

class AirportAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AirportAdmin
        fields = (
            "email",
            "admin_id"
        )

class AirlineAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AirlineAdmin
        fields = (
            "email",
            "employee_id"
        )

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Company
        fields = (
            "id",
            "name",
            "admin"
        )

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Hotel
        fields = (
            "id",
            "name",
            "location",
            "company",
            "get_image",
            "get_thumbnail"
        )

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Transaction
        fields = (
            "id",
            "passenger",
            "company",
            "type",
            "date"
        )

class StaySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Stay
        fields = (
            "id",
            "name",
            "price",
            "description",
            "hotel",
            "transac",
            "get_image",
            "get_thumbnail"
        )

class AirportComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AirportComplaint
        fields = (
            "id",
            "description",
            "admin",
            "passenger"
        )

class AirlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Airline
        fields = (
            "id",
            "name",
            "location"
        )

class AirlineComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AirlineComplaint
        fields = (
            "id",
            "description",
            "admin",
            "passenger",
            "airline"
        )

class AirplaneSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Airplane
        fields = (
            "id",
            "model",
            "manufacturer",
            "economy_seats",
            "premium_economy_seats",
            "business_seats",
            "first_seats",
            "airline"
        )

class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Destination
        fields = (
            "airport_code",
            "city",
            "country"
        )

class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Flight
        fields = (
            "id",
            "airline",
            "dep_time",
            "arrival_time",
            "destination",
            "plane"
        )

class FareSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Fare
        fields = (
            "id",
            "price",
            "cabin",
            "flight",
            "tickets_quantity"
        )

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Ticket
        fields = (
            "id",
            "seat_pos",
            "passenger",
            "fare"
        )

