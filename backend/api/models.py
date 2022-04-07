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
    transac_id = models.PositiveBigIntegerField(primary_key=True)
    p_email = models.ForeignKey(Passenger, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    type = models.CharField(max_length=255)
    date = models.DateField(auto_now_add=True)

    class Meta:
        db_table = 'transaction'


# Stay model
class Stay(models.Model):
    pass

    class Meta:
        db_table = 'stay'


# Airport Complaint model
class AirportComplaint(models.Model):
    pass

    class Meta:
        db_table = 'airport_complaint'


# Airline Complaint model
class AirlineComplaint(models.Model):
    pass

    class Meta:
        db_table = 'airline_complaint'


# Airline model
class Airline(models.Model):
    pass

    class Meta:
        db_table = 'airline'


# Airplane model
class Airplane(models.Model):
    pass

    class Meta:
        db_table = 'airplane'


# Flight model
class Flight(models.Model):
    pass

    class Meta:
        db_table = 'flight'


# Destination model
class Destination(models.Model):
    pass

    class Meta:
        db_table = 'destination'


# Fare model
class Fare(models.Model):
    pass

    class Meta:
        db_table = 'fare'


# Ticket model
class Ticket(models.Model):
    pass

    class Meta:
        db_table = 'ticket'

