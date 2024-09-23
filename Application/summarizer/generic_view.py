# views.py
from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
from .models import Summariese
from webApp.models import UserPreference

def render_with_summaries(request, template_name):
    
    current_date = datetime.now().strftime('%d %B, %Y')

    if request.method == 'GET':
         
        user = request.user
        
        results = []
        sport_summary = []
        politics_summary = []
        lifestyle_summary = []
        recommended = []

        if user.is_authenticated:
            user_preferences = UserPreference.objects.filter(user=user)
            categories = user_preferences.values_list('preference', flat=True)

            for category in categories:
                summaries = Summariese.objects.select_related('news_article').filter(news_article__category=category)[:3]
            
            
                for summary in summaries:
                    recommended.append({
                        'id': summary.news_article.id,
                        'title': summary.news_article.title,
                        'summary': summary.Summary_text,
                        'content': summary.news_article.full_text,
                        'date': summary.news_article.publish_date,
                        'category': summary.news_article.category,
                        'img': summary.news_article.image_url,
                        'url': summary.news_article.url,
                        'like_count': summary.like_count,
                    })

        else:
            # Show all summaries for unauthenticated users
            summaries = Summariese.objects.select_related('news_article')

            for summary in summaries:
                results.append({
                    'id': summary.news_article.id,
                    'title': summary.news_article.title,
                    'summary': summary.Summary_text,
                    'content': summary.news_article.full_text,
                    'date': summary.news_article.publish_date,
                    'category': summary.news_article.category,
                    'img': summary.news_article.image_url,
                    'url': summary.news_article.url,
                    'like_count': summary.like_count,
                })
        
        politics_summaries = Summariese.objects.select_related('news_article').filter(news_article__category="Politics")[:5]
        for summary in politics_summaries:
                politics_summary.append({
                    'id': summary.news_article.id,
                    'title': summary.news_article.title,
                    'summary': summary.Summary_text,
                    'content': summary.news_article.full_text,
                    'date': summary.news_article.publish_date,
                    'category': summary.news_article.category,
                    'img': summary.news_article.image_url,
                    'url': summary.news_article.url,
                    'like_count': summary.like_count,
                })

        lifestyle_summaries = Summariese.objects.select_related('news_article').filter(news_article__category="Lifestyle")[:5]
        for summary in lifestyle_summaries:
                lifestyle_summary.append({
                    'id': summary.news_article.id,
                    'title': summary.news_article.title,
                    'summary': summary.Summary_text,
                    'content': summary.news_article.full_text,
                    'date': summary.news_article.publish_date,
                    'category': summary.news_article.category,
                    'img': summary.news_article.image_url,
                    'url': summary.news_article.url,
                    'like_count': summary.like_count,
                })

        sports_summaries = Summariese.objects.select_related('news_article').filter(news_article__category="Sports")[:5]
        for summary in sports_summaries:
                sport_summary.append({
                    'id': summary.news_article.id,
                    'title': summary.news_article.title,
                    'summary': summary.Summary_text,
                    'content': summary.news_article.full_text,
                    'date': summary.news_article.publish_date,
                    'category': summary.news_article.category,
                    'img': summary.news_article.image_url,
                    'url': summary.news_article.url,
                    'like_count': summary.like_count,
                })
        
        context = {
            'summaries': results,
            'current_date': current_date, 
            'sports': sport_summary, 
            'politics': politics_summary,
            'lifestyles': lifestyle_summary,
            'recommendeds': recommended,
        }

        return render(request, template_name, context)
    else:
        return HttpResponse('Invalid request method')
