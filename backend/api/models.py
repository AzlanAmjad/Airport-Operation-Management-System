from enum import unique
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.contrib.auth import get_user_model

from io import BytesIO
from PIL import Image
from django.core.files import File

from django.db.models import UniqueConstraint

# Create your models here.

# User Manager model
class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, first_name, last_name, **extra_fields):
        if not email:
            raise ValueError('email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password, first_name, last_name, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)

        return self._create_user(email, password, first_name, last_name, **extra_fields)

    def create_superuser(self, email, password, first_name, last_name, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('a_passenger', False)
        extra_fields.setdefault('an_airport_admin', False)
        extra_fields.setdefault('an_airline_admin', False)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        user = self._create_user(email, password, first_name, last_name, **extra_fields)
        return user


# User model
class User(AbstractUser):
    username = None
    email = models.EmailField(max_length=255, unique=True)
    # password, first_name, last_name, already part of AbstractUser
    a_passenger = models.BooleanField(default=False, help_text='Determines whether the user is a passenger', verbose_name='passenger status')
    an_airport_admin = models.BooleanField(default=False, help_text='Determines whether the user is an airport admin', verbose_name='airport admin status')    
    an_airline_admin = models.BooleanField(default=False, help_text='Determines whether the user is an airline admin', verbose_name='airline admin status')
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name'] # email, password, automatically required

    # user properties
    @property
    def is_passenger(self):
        return self.passenger

    @property
    def is_airport_admin(self):
        return self.airport_admin

    @property
    def is_airline_admin(self):
        return self.airline_admin

    class Meta:
        db_table = 'user'
    
    objects = UserManager()


user = get_user_model()


# Passenger model
class Passenger(models.Model):
    email = models.OneToOneField(user, on_delete=models.CASCADE, related_name='passenger', to_field='email', unique=True)
    ssn = models.CharField(max_length=255, unique=True)
    address = models.CharField(max_length=255)

    class Meta:
        db_table = 'passenger'

    def __str__(self):
        return f'({self.id}) {self.email}'


# Airport Admin model
class AirportAdmin(models.Model):
    email = models.OneToOneField(user, on_delete=models.CASCADE, related_name='airport_admin', to_field='email', unique=True)
    admin_id = models.PositiveIntegerField(unique=True)

    class Meta:
        db_table = 'airport_admin'

    def __str__(self):
        return f'({self.id}) {self.email}'


# Airline model
class Airline(models.Model):
    name = models.CharField(max_length=255, unique=True)
    location = models.CharField(max_length=255)

    class Meta:
        db_table = 'airline'

    def __str__(self):
        return f'({self.id}) {self.name}'


# Airline Admin model
class AirlineAdmin(models.Model):
    email = models.OneToOneField(user, on_delete=models.CASCADE, related_name='airline_admin', to_field='email', unique=True)
    employee_id = models.PositiveIntegerField(unique=True)
    airline = models.ForeignKey(Airline, on_delete=models.SET_NULL, null=True, related_name='admins')

    class Meta:
        db_table = 'airline_admin'

    def __str__(self):
        return f'({self.id}) {self.email}'


# Company model
class Company(models.Model):
    name = models.CharField(max_length=255, unique=True)
    admin = models.ForeignKey(AirportAdmin, on_delete=models.SET_NULL, null=True, related_name='companies')

    class Meta:
        db_table = 'company'

    def __str__(self):
        return f'({self.id}) {self.name}'


# Hotel model
class Hotel(models.Model):
    name = models.CharField(max_length=255, unique=True)
    location = models.CharField(max_length=255)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='hotels')
    image = models.ImageField(upload_to='hotel_images/', blank=True, null=True)
    thumbnail = models.ImageField(upload_to='hotel_images/', blank=True, null=True)

    class Meta:
        db_table = 'hotel'

    def __str__(self):
        return f'({self.id}) {self.name}'

    def get_image(self):
        if self.image:
            return 'http://127.0.0.1:8000' + self.image.url
        return ''

    def get_thumbnail(self):
        if self.thumbnail:
            return 'http://127.0.0.1:8000' + self.thumbnail.url
        else:
            if self.image:
                self.thumbnail = self.make_thumbnail(self.image)
                self.save()
                return 'http://127.0.0.1:8000' + self.thumbnail.url
            else:
                return ''

    def make_thumbnail(self, image, size=(300, 200)):
        img = Image.open(image)
        img.convert('RGB')
        img.thumbnail(size)

        thumb_io = BytesIO()
        img.save(thumb_io, 'JPEG', quality=85)

        thumbnail = File(thumb_io, name=image.name)
        return thumbnail


# Transaction model
class Transaction(models.Model):
    passenger = models.ForeignKey(Passenger, on_delete=models.CASCADE, related_name='transactions')
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='transactions')
    type = models.CharField(max_length=255)
    date = models.DateField(auto_now_add=True)

    class Meta:
        db_table = 'transaction'

    def __str__(self):
        return f'{self.id} by {self.passenger}'


# Stay model
class Stay(models.Model):
    name = models.CharField(max_length=255, unique=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField()
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name='stays')
    transac = models.ForeignKey(Transaction, on_delete=models.SET_NULL, null=True, related_name='stays')
    image = models.ImageField(upload_to='stay_images/', blank=True, null=True)
    thumbnail = models.ImageField(upload_to='stay_images/', blank=True, null=True)

    class Meta:
        db_table = 'stay'

    def __str__(self):
        return f'({self.id}) {self.name}'

    def get_image(self):
        if self.image:
            return 'http://127.0.0.1:8000' + self.image.url
        return ''

    def get_thumbnail(self):
        if self.thumbnail:
            return 'http://127.0.0.1:8000' + self.thumbnail.url
        else:
            if self.image:
                self.thumbnail = self.make_thumbnail(self.image)
                self.save()
                return 'http://127.0.0.1:8000' + self.thumbnail.url
            else:
                return ''

    def make_thumbnail(self, image, size=(300, 200)):
        img = Image.open(image)
        img.convert('RGB')
        img.thumbnail(size)

        thumb_io = BytesIO()
        img.save(thumb_io, 'JPEG', quality=85)

        thumbnail = File(thumb_io, name=image.name)
        return thumbnail


# Airport Complaint model
class AirportComplaint(models.Model):
    description = models.TextField()
    admin = models.ForeignKey(AirportAdmin, on_delete=models.SET_NULL, null=True, related_name='airport_complaints')
    passenger = models.ForeignKey(Passenger, on_delete=models.CASCADE, related_name='airport_complaints')

    class Meta:
        db_table = 'airport_complaint'

    def __str__(self):
        return f'{self.id} by {self.passenger}, resolved by {self.admin}'


# Airline Complaint model
class AirlineComplaint(models.Model):
    description = models.TextField()
    admin = models.ForeignKey(AirlineAdmin, on_delete=models.SET_NULL, null=True, related_name='airline_complaints')
    passenger = models.ForeignKey(Passenger, on_delete=models.CASCADE, related_name='airline_complaints')
    airline = models.ForeignKey(Airline, on_delete=models.CASCADE, related_name='airline_complaints')

    class Meta:
        db_table = 'airline_complaint'

    def __str__(self):
        return f'{self.id} by {self.passenger}, resolved by {self.admin}'


# Airplane model
class Airplane(models.Model):
    model = models.CharField(max_length=255)
    manufacturer = models.CharField(max_length=255)
    economy_seats = models.PositiveIntegerField()
    premium_economy_seats = models.PositiveIntegerField()
    business_seats = models.PositiveIntegerField()
    first_seats = models.PositiveIntegerField()
    airline = models.ForeignKey(Airline, on_delete=models.CASCADE, related_name='airplanes')

    class Meta:
        db_table = 'airplane'

    def __str__(self):
        return f'({self.id}) {self.airline} - {self.manufacturer} {self.model}'


# Destination model
class Destination(models.Model):
    airport_code = models.CharField(max_length=3, primary_key=True)
    city = models.CharField(max_length=255)
    country = models.CharField(max_length=255)

    class Meta:
        db_table = 'destination'

    def __str__(self):
        return self.airport_code


# Flight model
class Flight(models.Model):
    airline = models.ForeignKey(Airline, on_delete=models.CASCADE)
    dep_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    destination = models.ForeignKey(Destination, on_delete=models.SET_NULL, null=True, related_name='flights')
    plane = models.ForeignKey(Airplane, on_delete=models.SET_NULL, null=True, related_name='flights')

    class Meta:
        db_table = 'flight'

    def __str__(self):
        return f'({self.id}) {self.airline}'


# Fare model
class Fare(models.Model):
    price = models.DecimalField(max_digits=6, decimal_places=2)
    cabin = models.CharField(max_length=255)
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE, related_name='fares')
    tickets_quantity = models.PositiveIntegerField()

    class Meta:
        db_table = 'fare'

    def __str__(self):
        return f'({self.id}) {self.flight} - {self.cabin}'


# Books model
class Books(models.Model):
    passenger = models.ForeignKey(Passenger, on_delete=models.SET_NULL, null=True, related_name='bookings')
    fare = models.ForeignKey(Fare, on_delete=models.CASCADE, related_name='bookings')

    class Meta:
        db_table = 'books'
        constraints = [
            UniqueConstraint(fields=['passenger', 'fare'], name='unique_booking'),
        ]

    def __str__(self):
        return f'{self.id}'

