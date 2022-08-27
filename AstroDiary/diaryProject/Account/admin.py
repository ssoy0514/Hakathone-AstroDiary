from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Profile, Diary
# Register your models here.
class ProfileInline(admin.StackedInline):
    model=Profile

class CustomUserAdmin(UserAdmin):
    inlines = (ProfileInline,)

admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)

admin.site.register(Diary)
