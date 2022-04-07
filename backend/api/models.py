from django.db import models

# Create your models here.

# Passenger model
class Passenger(models.Model):
    pass

    class Meta:
        db_table = 'passenger'


# Airport Admin model
class AirportAdmin(models.Model):
    pass

    class Meta:
        db_table = 'airport_admin'


# Airline Admin model
class AirlineAdmin(models.Model):
    pass

    class Meta:
        db_table = 'airline_admin'


# Company model
class Company(models.Model):
    name = models.CharField(max_length=255, primary_key=True)
    a_email = models.ForeignKey(AirportAdmin, on_delete=models.SET_NULL, null=True)

    class Meta:
        db_table = 'company'


# Hotel model
class Hotel(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    class Meta:
        db_table = 'hotel'


# Transaction model
class Transaction(models.Model):
    transac_id = models.PositiveIntegerField(primary_key=True)
    p_email = models.ForeignKey(Passenger, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    type = models.CharField(max_length=255)
    date = models.DateField(auto_now_add=True)

    class Meta:
        db_table = 'transaction'


# Stay model
class Stay(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    price = models.PositiveIntegerField()
    description = models.TextField()
    hotel_id = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    transac_id = models.ForeignKey(Transaction, on_delete=models.SET_NULL, null=True)

    class Meta:
        db_table = 'stay'


# Airport Complaint model
class AirportComplaint(models.Model):
    complaint_id = models.PositiveIntegerField(primary_key=True)
    description = models.TextField()
    a_email = models.ForeignKey(AirportAdmin, on_delete=models.SET_NULL, null=True)
    p_email = models.ForeignKey(Passenger, on_delete=models.CASCADE)

    class Meta:
        db_table = 'airport_complaint'


# Airline model
class Airline(models.Model):
    name = models.CharField(max_length=255, primary_key=True)
    location = models.CharField(max_length=255)

    class Meta:
        db_table = 'airline'


# Airline Complaint model
class AirlineComplaint(models.Model):
    complaint_id = models.PositiveIntegerField(primary_key=True)
    description = models.TextField()
    a_email = models.ForeignKey(AirlineAdmin, on_delete=models.SET_NULL, null=True)
    p_email = models.ForeignKey(Passenger, on_delete=models.CASCADE)
    airline_name = models.ForeignKey(Airline, on_delete=models.CASCADE)

    class Meta:
        db_table = 'airline_complaint'


# Airplane model
class Airplane(models.Model):
    pid = models.PositiveIntegerField(primary_key=True)
    model = models.CharField(max_length=255)
    manufacturer = models.CharField(max_length=255)
    economy_seats = models.PositiveIntegerField()
    premium_economy_seats = models.PositiveIntegerField()
    business_seats = models.PositiveIntegerField()
    first_seats = models.PositiveIntegerField()
    airline_name = models.ForeignKey(Airline, on_delete=models.CASCADE)

    class Meta:
        db_table = 'airplane'


# Destination model
class Destination(models.Model):
    airport_code = models.CharField(max_length=3, primary_key=True)
    city = models.CharField(max_length=255)
    country = models.CharField(max_length=255)

    class Meta:
        db_table = 'destination'


# Flight model
class Flight(models.Model):
    flight_num = models.PositiveIntegerField(primary_key=True)
    airline_name = models.ForeignKey(Airline, on_delete=models.CASCADE)
    dep_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    dest_code = models.ForeignKey(Destination, on_delete=models.SET_NULL, null=True)
    plane_id = models.ForeignKey(Airplane, on_delete=models.SET_NULL, null=True)

    class Meta:
        db_table = 'flight'


# Fare model
class Fare(models.Model):
    fare_id = models.PositiveIntegerField(primary_key=True)
    price = models.PositiveIntegerField()
    cabin = models.CharField(max_length=255)
    flight_num = models.ForeignKey(Flight, on_delete=models.CASCADE)
    tickets = models.PositiveIntegerField()

    class Meta:
        db_table = 'fare'


# Ticket model
class Ticket(models.Model):
    ticket_id = models.PositiveIntegerField(primary_key=True)
    seat_pos = models.CharField(max_length=255)
    p_email = models.ForeignKey(Passenger, on_delete=models.SET_NULL, null=True)
    fare_id = models.ForeignKey(Fare, on_delete=models.CASCADE)

    class Meta:
        db_table = 'ticket'

