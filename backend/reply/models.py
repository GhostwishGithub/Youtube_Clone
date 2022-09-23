from tkinter import CASCADE
from django.db import models
from authentication.models import User
from comment.models import Comment

# Create your models here.

class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment= models.ForeignKey(Comment, max_length=255, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
