from django.contrib import admin
from .models import Diary, Likes, Profile

# Register your models here.
admin.site.register(Profile)
admin.site.register(Diary)
