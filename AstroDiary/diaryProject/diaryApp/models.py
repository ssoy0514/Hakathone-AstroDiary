from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
    profile_image = models.ImageField(blank=True, null=True, upload_to="images")
    level = models.IntegerField(null=True)

    def __str__(self):
        return self.user_created_at

class Diary(models.Model):
    todos = models.TextField(max_length=50, null=True)
    content = models.TextField(max_length=100, null=True)
    diary_created_at  = models.DateTimeField(auto_now_add=True, null=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="diary")

    def __str__(self):
        return self.content

class Likes(models.Model):  
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="likes_user_id")
    diary_id = models.ForeignKey(Diary, on_delete=models.CASCADE, related_name="likes_diary_id")