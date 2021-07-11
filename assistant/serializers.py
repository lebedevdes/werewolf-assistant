from rest_framework import serializers
from .models import Uratha


class UrathaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Uratha
        fields = (
            "id",
            "name",
            "auspice",
            "tribe",
            "health",
            "willpower",
            "primal_urge",
            "essence",
            "harmony",
            "current_form",
            # "author",
        )
