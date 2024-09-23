from .generic_view import render_with_summaries
from . models import Summariese
from django.http import JsonResponse
from django.db import models
from django.shortcuts import render, redirect
from webApp.models import UserPreference
from django.shortcuts import get_object_or_404, redirect

# Create your views here.
def summarize(request):   
    return render_with_summaries(request, 'home-newspaper.html')
    
def lifestyle(request):
    return render_with_summaries(request, 'Lifestyle.html')

def editorial(request):
    return render_with_summaries(request, 'Editorial.html')

def politics(request):
    return render_with_summaries(request, 'Politics.html')

def sports(request):
    return render_with_summaries(request, 'Sports.html') 

def business(request):
    return render_with_summaries(request, 'business.html')

def search_news(request):
    query = request.GET.get('q', '').lower()
   
    articles = Summariese.objects.filter(
        models.Q(news_article__title__icontains=query) | models.Q(news_article__full_text__icontains=query)
    )
    articles_data = list(articles.values('news_article__title', 'Summary_text', 'news_article__publish_date', 'news_article__image_url'))
    return JsonResponse(articles_data, safe=False)


def get_like(request):
    if request.method == 'GET':
        user = request.user
        category = request.GET.get('category')
        news_id = request.GET.get('news_id')

        print(f"News ID: {news_id}")

        # Check if the user has already liked this category
        user_preference, created = UserPreference.objects.get_or_create(user=user, preference=category)

        if not created:
            # If the preference already exists, increment the like count
            user_preference.like_count += 1
            user_preference.save()
        else:
            # If the preference is new, save it with a count of 1
            user_preference.like_count = 1
            user_preference.save()
            
        # Get the specific news article using get_object_or_404
        news_article = get_object_or_404(Summariese, id=news_id)
        news_article.like_count += 1
        news_article.save()

        return redirect(request.META.get('HTTP_REFERER', 'summarize'))  # Redirect to the same page

    return redirect('summarize')
