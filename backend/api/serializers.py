from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = (
            
        )

class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Passenger
        fields = (
            "id",
            "email",
            "ssn",
            "address"
        )

class AirportAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AirportAdmin
        fields = (
            "id",
            "email",
            "admin_id"
        )

class AirlineAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AirlineAdmin
        fields = (
            "id",
            "email",
            "employee_id"
        )

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Company
        fields = (
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
            "flight_num",
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

