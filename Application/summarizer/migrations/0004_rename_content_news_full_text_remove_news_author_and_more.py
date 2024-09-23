# Generated by Django 5.0.6 on 2024-07-11 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('summarizer', '0003_news_author'),
    ]

    operations = [
        migrations.RenameField(
            model_name='news',
            old_name='content',
            new_name='full_text',
        ),
        migrations.RemoveField(
            model_name='news',
            name='author',
        ),
        migrations.AddField(
            model_name='news',
            name='category',
            field=models.CharField(default='General', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='news',
            name='image_url',
            field=models.URLField(default='nourl'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='news',
            name='url',
            field=models.URLField(default='nourl'),
            preserve_default=False,
        ),
    ]