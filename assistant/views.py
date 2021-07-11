from django.conf import settings
from django.shortcuts import render, redirect
from django.views import View


class Index(View):
    """Title page"""

    def get(self, request):
        return render(request, "index.html")


class Character(View):
    """Персонаж"""

    def get(self, request):
        if not request.user.is_authenticated:
            return redirect('%s?next=%s' % (settings.LOGIN_URL, request.path))
        return render(request, "character.html")
