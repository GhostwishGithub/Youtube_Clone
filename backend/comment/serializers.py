from rest_framework import serializers
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        comment = Comment
        fields = ['user', 'video_id', 'text', 'likes', 'dislikes']
        depth = 1