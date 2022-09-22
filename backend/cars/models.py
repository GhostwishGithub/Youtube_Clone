from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Car(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    make = models.CharField(max_length=30)
    model = models.CharField(max_length=100)
    year = models.IntegerField()

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=255)
    text = models.CharField(max_length=255)
    likes = models.IntegerField()
    diskikes = models.IntegerField()

class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment= models.ForeignKey(max_length=255)
    text = models.CharField(max_length=255)
