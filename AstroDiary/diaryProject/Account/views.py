from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth
from .models import Profile

# Create your views here.
def signup(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        profile_pic = request.FILES.get('image')
        found_user = User.objects.filter(username=username)
        if len(found_user):
            error = "이미 존재하는 아이디입니다."
            return redirect("/Account/login", {"signupError": error})
        else: 
            new_user = User.objects.create_user(username=username, password=password)
            auth.login(request, new_user)
            return redirect("index")


def login(request):
    if request.method == "GET":
        return render(request, "login.html")
    elif request.method == "POST":
        username=request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(request, username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect("index")
        error = "아이디 혹은 비밀번호가 틀립니다."
        return render(request, "login.html", {"loginError": error})

def logout(request):
    auth.logout(request)

    return redirect("index")