from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth
from .models import Diary
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

# Create your views here.
def logout(request):
    auth.logout(request)

    return redirect("index")

def index(request):
    return render(request, 'index.html')

def fishing(request):
    return render(request, 'fishing.html')

def background(request):
    return render(request, 'background.html')

def detail(request):
    return render(request, 'detail.html')
    
@csrf_exempt
def DiaryView(request):
    if request.method == 'POST':
        new_diary = Diary.objects.create(
            todos = request.POST['todos'],
            content = request.POST['content'],
            creator = User.objects.get(username=request.POST['username']),
        )
        return redirect('detail', new_diary.pk)
    return render(request, 'detail/<int:diary_pk>')


def detail(request, diary_pk):
    diary = Diary.objects.get(pk=diary_pk)
    return render(request, 'detail.html', {'diary': diary})
