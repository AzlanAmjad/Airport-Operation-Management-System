from rest_framework import serializers
from .models import User, Passenger, AirportAdmin, AirlineAdmin, Company, Hotel, Transaction, Stay, AirportComplaint, Airline, AirlineComplaint, Airplane, Destination, Flight, Fare, Ticket

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            
        )

class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Passenger
        fields = (
            "id",
            "email",
            "ssn",
            "address"
        )

class AirportAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = AirportAdmin
        fields = (
            "id",
            "email",
            "admin_id"
        )

class AirlineAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = AirlineAdmin
        fields = (
            "id",
            "email",
            "employee_id"
        )

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = (
            "name",
            "admin"
        )

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
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
        model = Transaction
        fields = (
            "transac_id",
            "passenger",
            "company",
            "type",
            "date"
        )

class StaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Stay
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
        model = AirportComplaint
        fields = (
            "complaint_id",
            "description",
            "admin",
            "passenger"
        )

class AirlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airline
        fields = (
            "name",
            "location"
        )

class AirlineComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = AirlineComplaint
        fields = (
            "complaint_id",
            "description",
            "admin",
            "passenger",
            "airline"
        )

class AirplaneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airplane
        fields = (
            "pid",
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
        model = Destination
        fields = (
            "airport_code",
            "city",
            "country"
        )

class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = (
            "flight_num",
            "airline",
            "dep_time",
            "arrival_time",
            "dest",
            "plane"
        )

class FareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fare
        fields = (
            "fare_id",
            "price",
            "cabin",
            "flight",
            "tickets_quantity"
        )

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = (
            "ticket_id",
            "seat_pos",
            "passenger",
            "fare"
        )

