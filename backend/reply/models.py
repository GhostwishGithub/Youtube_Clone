from django.db import models
from authentication.models import User
from comment.models import Comment

# Create your models here.

class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment= models.ForeignKey(Comment, max_length=255)
    text = models.CharField(max_length=255)
