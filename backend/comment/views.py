from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comment(request):
    comment = Comment.objects.all()
    serializer = CommentSerializer(comment, many=True)
    print(request)
    return Response(serializer.data, status=status.HTTP_401_UNAUTHORIZED)
    

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_and_post(request):
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        comment = Comment.objects.all(user=request.user)
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_put_delete(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    if request.method == 'GET':
        comment = Comment.objects.all(user=request.user)
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = CommentSerializer(comment, data = request.data)
        if serializer.is_valid(raise_exception = True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        comment.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)