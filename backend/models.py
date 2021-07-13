from django.db import models
from django.contrib.auth.models import User


class Auspices(models.TextChoices):
    """Enum of uratha auspices"""
    Cahalith = 1
    Elodoth = 2
    Irraka = 3
    Ithaeur = 4
    Rahu = 5


class Tribes(models.TextChoices):
    """Enum of uratha tribes"""
    BloodTalons = 1
    BoneShadows = 2
    HunterInDarkness = 3
    IronMasters = 4
    StormLords = 5
    GhostWolves = 6


class UrathaForms(models.TextChoices):
    """Enum of uratha tribes"""
    Hishu = 1
    Dalu = 2
    Gauru = 3
    Urshul = 4
    Urhan = 5


class Uratha(models.Model):
    """Uratha character"""

    name = models.CharField(verbose_name="Имя", max_length=200)
    auspice = models.IntegerField(verbose_name="Покровительство", choices=Auspices.choices)
    tribe = models.IntegerField(verbose_name="Племя", choices=Tribes.choices)
    health = models.IntegerField(verbose_name="Здоровье")
    willpower = models.IntegerField(verbose_name="Сила воли")
    primal_urge = models.IntegerField(verbose_name="Древний зов")
    essence = models.IntegerField(verbose_name="Эссенция")
    harmony = models.IntegerField(verbose_name="Гармония")
    current_form = models.IntegerField(verbose_name="Текущая форма", choices=UrathaForms.choices)
    # author = models.ForeignKey(User, on_delete="cascade")

