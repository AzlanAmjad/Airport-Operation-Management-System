from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models

class CustomUserAdmin(UserAdmin):
    model = models.User
    list_display = ('id', 'email', 'is_staff', 'is_active', 'a_passenger', 'an_airport_admin', 'an_airline_admin',)
    list_filter = ('email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password', 'a_passenger', 'an_airport_admin', 'an_airline_admin',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'password1', 'password2', 'is_staff', 'is_active', 'a_passenger', 'an_airport_admin', 'an_airline_admin',)}
        ),
    )
    search_fields = ('email',)
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
admin.site.register(models.Books)

