from rest_framework import serializers
from .models import Human, Supernatural, Uratha


class HumanSerializer(serializers.HyperlinkedModelSerializer):
    """Json serialization for Human model"""
    class Meta:
        model = Human
        fields = "__all__"


class SupernaturalSerializer(HumanSerializer):
    """Json serialization for Supernatural model"""
    class Meta:
        model = Supernatural
        fields = "__all__"
        abstract = True


class UrathaSerializer(SupernaturalSerializer):
    """Json serialization for Uratha model"""
    class Meta:
        model = Uratha
        fields = "__all__"
