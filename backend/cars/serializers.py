# from xml.etree.ElementTree import Comment
from rest_framework import serializers
from .models import Car

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'make', 'model', 'year', 'user_id']
        depth = 1

# class CommentSerializer(serializers.ModelSerializer):
#     class Meta:
#         comment = Comment
#         fields = ['user', 'video_id', 'text', 'likes', 'dislikes']
#         depth = 1

# class ReplySerializer(serializers.ModelSerializer):
#     class Meta:
#         reply = Reply
#         fields = ['user', 'comment', 'text']
#         depth = 1

