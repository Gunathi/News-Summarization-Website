from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class UserPreference(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    preference = models.CharField(max_length=100)
    like_count = models.IntegerField(default=1)

    def __str__(self):
        return f'{self.user.username} - {self.preference}'
    
class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    phone_number = models.CharField(max_length=10)
    subject = models.CharField(max_length=100)
    message_text = models.TextField()

    def __str__(self) -> str:
        return f"{self.subject} by {self.name}" 