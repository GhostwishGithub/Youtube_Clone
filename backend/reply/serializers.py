from rest_framework import serializers
from .models import Reply

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        reply = Reply
        fields = ['user', 'comment', 'text']
        depth = 1