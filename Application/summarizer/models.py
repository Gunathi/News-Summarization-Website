from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class news(models.Model):
    title = models.CharField(max_length=300)
    full_text = models.TextField()
    category = models.CharField(max_length=100)
    publish_date = models.DateField(auto_now_add=True)
    url = models.URLField(max_length=700, null=True)  
    image_url = models.URLField(max_length=700, null=True)

    def __str__(self):
        return self.title
    
class Summariese(models.Model):
    news_article = models.ForeignKey(news, on_delete=models.CASCADE, related_name='summaries')
    Summary_text = models.TextField()
    like_count = models.IntegerField(default=0)

    def __str__(self):
        return f'Summary for {self.news_article.title}'
