from django.urls import path
from comment import views

urlpatterns = [
    path('', views.get_all_comment),
    path('get_and_post/<pk>/', views.get_and_post),
    path('get_put_delete/<int:pk>/', views.get_put_delete),
]