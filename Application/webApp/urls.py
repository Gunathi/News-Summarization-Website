from django.contrib import admin
from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    # path('', views.index, name='index'),
    path('signup/', views.signup, name='signup'),
    path('signin/', views.signin, name='signin'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('preferences/', views.preferences, name='preferences'),
    path('logout/', views.logout_view, name="logout"),
    
    # path('activate/<uidb64>/<token>/', views.activate, name='activate'),
    
    path('reset_password/', auth_views.PasswordResetView.as_view(template_name='forgotpassword.html'), name='password_reset'),
    path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(template_name='forgotpassword_sent.html'), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='forgotpassword_confirm.html'), name='password_reset_confirm'),
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(template_name='forgotpassword_complete.html'), name='password_reset_complete'),
]
