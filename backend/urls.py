from django.urls import path
from . import views


urlpatterns = [
    path("character/", views.UrathaListCreate.as_view()),
]
