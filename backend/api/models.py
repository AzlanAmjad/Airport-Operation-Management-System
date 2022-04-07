from asyncio.windows_events import NULL
from curses.ascii import NUL
from django.db import models

# Create your models here.

# Hotel model
class Hotel(models.Model):
    name = NULL

# Transaction model
class Transaction(models.Model):
    name = NULL

# Stay model
class Stay(models.Model):
    name = NULL

# Company model
class Company(models.Model):
    name = NULL

# Airport Complaint model
class AirportComplaint(models.Model):
    name = NULL

# Airline Complaint model
class AirlineComplaint(models.Model):
    name = NULL

# Airline model
class Airline(models.Model):
    name = NULL

# Airplane model
class Airplane(models.Model):
    name = NULL

# Flight model
class Flight(models.Model):
    name = NULL

# Destination model
class Destination(models.Model):
    name = NULL

# Fare model
class Fare(models.Model):
    name = NULL

# Ticket model
class Ticket(models.Model):
    name = NULL
