from .models import news, Summariese
from .model_loader import summarize_text

def save_summaries():

    news_articles = news.objects.all()
    
    for article in news_articles:

        article_content = article.full_text
        summary = summarize_text(article_content)

        Summariese.objects.create(news_article=article, Summary_text=summary)
