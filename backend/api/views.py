from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

# view for all endpoints
def getRoutes(request):
    routes = [
        '/token',
        '/token/refresh'
    ]
    return JsonResponse(routes, safe=False)
