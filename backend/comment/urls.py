from django.urls import path, include
from comment import views

urlpatterns = [
    path('', views.get_and_post),
    path('', views.get_put_delete),
    path('all/', views.get_all_comment),
]