"""Module with Django models"""
from django.db import models
from django.contrib.auth.models import User


class Auspices(models.TextChoices):
    """Enum of uratha auspices"""

    Undefined = 0
    Cahalith = 1
    Elodoth = 2
    Irraka = 3
    Ithaeur = 4
    Rahu = 5


class Tribes(models.TextChoices):
    """Enum of uratha tribes"""

    Undefined = 0
    BloodTalons = 1
    BoneShadows = 2
    HunterInDarkness = 3
    IronMasters = 4
    StormLords = 5
    GhostWolves = 6


class UrathaForms(models.TextChoices):
    """Enum of uratha tribes"""

    Undefined = 0
    Hishu = 1
    Dalu = 2
    Gauru = 3
    Urshul = 4
    Urhan = 5


class Human(models.Model):
    """Base class for all humanoids"""

    name = models.CharField(verbose_name="Имя", max_length=200, default="")
    intelligence = models.IntegerField(verbose_name="Интеллект", default=1)
    wits = models.IntegerField(verbose_name="Сообразительность", default=1)
    resolve = models.IntegerField(verbose_name="Решительность", default=1)
    strength = models.IntegerField(verbose_name="Сила", default=1)
    dexterity = models.IntegerField(verbose_name="Ловкость", default=1)
    stamina = models.IntegerField(verbose_name="Выносливость", default=1)
    presence = models.IntegerField(verbose_name="Влияние", default=1)
    manipulation = models.IntegerField(verbose_name="Манипуляция", default=1)
    composure = models.IntegerField(verbose_name="Самообладание", default=1)
    athletics = models.IntegerField(verbose_name="Атлетика", default=0)
    size = models.IntegerField(verbose_name="Размер", default=5)
    speed_factor = models.IntegerField(verbose_name="Фактор скорости", default=0)
    perception_boost = models.IntegerField(verbose_name="Бонус к восприятию", default=0)
    health = models.IntegerField(verbose_name="Всего здоровья", default=0)
    bashing = models.IntegerField(verbose_name="Тупой урон", default=0)
    lethal = models.IntegerField(verbose_name="Летальный урон", default=0)


class Supernatural(Human):
    """Abstract class for all supernatural creatures"""

    aggravated = models.IntegerField(verbose_name="Аггравированный урон", default=0)
    supernatural_tolerance = models.IntegerField(verbose_name="Сверхъестественное отклонение", default=1)
    essence_current_value = models.IntegerField(verbose_name="Текущее значение эссенции", default=0)
    essence_max_value = models.IntegerField(verbose_name="Максимальное значение эссенции", default=0)
    willpower_current_value = models.IntegerField(verbose_name="Текущее значение силы воли", default=0)
    willpower_max_value = models.IntegerField(verbose_name="Максимальное значение силы воли", default=0)
    intelligence_bonus = models.IntegerField(verbose_name="Бонус к интеллект", default=0)
    wits_bonus = models.IntegerField(verbose_name="Бонус к сообразительность", default=0)
    resolve_bonus = models.IntegerField(verbose_name="Бонус к решительность", default=0)
    strength_bonus = models.IntegerField(verbose_name="Бонус к сила", default=0)
    dexterity_bonus = models.IntegerField(verbose_name="Бонус к ловкость", default=0)
    stamina_bonus = models.IntegerField(verbose_name="Бонус к выносливость", default=0)
    presence_bonus = models.IntegerField(verbose_name="Бонус к влияние", default=0)
    manipulation_bonus = models.IntegerField(verbose_name="Бонус к манипуляция", default=0)
    composure_bonus = models.IntegerField(verbose_name="Бонус к самообладание", default=0)

    class Meta:
        abstract = True


class Uratha(Supernatural):
    """Uratha character"""

    auspice = models.IntegerField(verbose_name="Покровительство", choices=Auspices.choices, default=Auspices.Undefined)
    tribe = models.IntegerField(verbose_name="Племя", choices=Tribes.choices, default=Tribes.Undefined)
    harmony = models.IntegerField(verbose_name="Гармония", default=0)
    current_form = models.IntegerField(
        verbose_name="Текущая форма", choices=UrathaForms.choices, default=UrathaForms.Undefined
    )
    # author = models.ForeignKey(User, on_delete="cascade")
