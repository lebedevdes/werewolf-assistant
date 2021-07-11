from django.urls import path
from django.views.generic import TemplateView
from . import views


urlpatterns = [
    path("", TemplateView.as_view(template_name="index.html"), name="index"),
    path("new-order/", views.Character.as_view(), name="character"),
]