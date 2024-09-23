from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.summarize, name='summarize'),
    path('lifestyle/', views.lifestyle, name='lifestyle'),
    path('editorial/', views.editorial, name='editorial'),
    path('politics/', views.politics, name='politics'),
    path('sports/', views.sports, name='sports'),
    path('business/', views.business, name='business'),
    path('get_like/', views.get_like, name='get_like'),
    path('search_news/', views.search_news, name='search_news'),
]
