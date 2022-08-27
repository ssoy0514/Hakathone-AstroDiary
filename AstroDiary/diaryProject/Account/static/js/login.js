const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginSection = document.getElementById('login-section');
const signupSection = document.getElementById('signup-section');

const showLogin = () => {
    loginTab.classList.add('selected');
    loginSection.classList.remove('hide');
    signupTab.classList.remove('selected');
    signupSection.classList.add('hide');
}

const showSignup = () => {
    loginTab.classList.remove('selected');
    loginSection.classList.add('hide');
    signupTab.classList.add('selected');
    signupSection.classList.remove('hide');
}