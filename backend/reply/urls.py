from django.urls import path
from reply import views

urlpatterns = [
    path('', views.reply_all),
    path('get_all_replies/<pk>/', views.get_all_replies),
    path('get_reply_or_delete/<int:pk>/', views.get_reply_or_delete),
]