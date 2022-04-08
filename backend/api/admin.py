from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models

class CustomUserAdmin(UserAdmin):
    ordering = ('email',)

admin.site.register(models.User, CustomUserAdmin)
admin.site.register(models.Passenger)
admin.site.register(models.AirportAdmin)
admin.site.register(models.AirlineAdmin)
admin.site.register(models.Company)
admin.site.register(models.Hotel)
admin.site.register(models.Transaction)
admin.site.register(models.Stay)
admin.site.register(models.AirportComplaint)
admin.site.register(models.Airline)
admin.site.register(models.AirlineComplaint)
admin.site.register(models.Airplane)
admin.site.register(models.Destination)
admin.site.register(models.Flight)
admin.site.register(models.Fare)
admin.site.register(models.Ticket)

