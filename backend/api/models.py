from asyncio.windows_events import NULL
from curses.ascii import NUL
from django.db import models

# Create your models here.

# Hotel model
class Hotel(models.Model):
    name = NULL

    class Meta:
        db_table = 'hotel'

# Transaction model
class Transaction(models.Model):
    name = NULL

    class Meta:
        db_table = 'transaction'

# Stay model
class Stay(models.Model):
    name = NULL

    class Meta:
        db_table = 'stay'

# Company model
class Company(models.Model):
    name = NULL

    class Meta:
        db_table = 'company'

# Airport Complaint model
class AirportComplaint(models.Model):
    name = NULL

    class Meta:
        db_table = 'airport_complaint'

# Airline Complaint model
class AirlineComplaint(models.Model):
    name = NULL

    class Meta:
        db_table = 'airline_complaint'

# Airline model
class Airline(models.Model):
    name = NULL

    class Meta:
        db_table = 'airline'

# Airplane model
class Airplane(models.Model):
    name = NULL

    class Meta:
        db_table = 'airplane'

# Flight model
class Flight(models.Model):
    name = NULL

    class Meta:
        db_table = 'flight'

# Destination model
class Destination(models.Model):
    name = NULL

    class Meta:
        db_table = 'destination'

# Fare model
class Fare(models.Model):
    name = NULL

    class Meta:
        db_table = 'fare'

# Ticket model
class Ticket(models.Model):
    name = NULL

    class Meta:
        db_table = 'ticket'
