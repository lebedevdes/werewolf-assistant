from django.urls import path
from . import views


urlpatterns = [
    path("api/character", views.UrathaListCreate.as_view()),
]
