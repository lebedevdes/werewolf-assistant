from rest_framework import generics

from .models import Uratha
from .serializers import UrathaSerializer


class UrathaListCreate(generics.ListCreateAPIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Uratha.objects.all()
    serializer_class = UrathaSerializer
    # queryset = User.objects.all().order_by('-date_joined')
    # serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated]
