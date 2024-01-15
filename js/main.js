var emailSingin = document.getElementById("signinEmail")
var passwordSingin = document.getElementById("signinPassword")
var signupName = document.getElementById("signupName")
var signupEmail = document.getElementById("signupEmail")
var signupPassword = document.getElementById("signupPassword")
var singupArray = []

if ( localStorage.getItem('users') ==null){
    singupArray=[]
}else{
    singupArray = JSON.parse(localStorage.getItem('users'))
}

function isEmpty(){
    if (signupName.value =='' || signupEmail.value =='' || signupPassword.value == '' ){
        return false 
    }
    else {
        return true
    }
}


function isEmailExist(){
    for (i=0 ; i<singupArray.length ; i++){
        if ( singupArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()){
            return false
        }
    }
}

function singup(){
    if (isEmpty() == false){
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var singup = {
        name : signupName.value,
        email : signupEmail.value,
        password : signupPassword.value
    }
    if (singupArray.length == 0){
    singupArray.push(singup)
    localStorage.setItem('users', JSON.stringify(singupArray))
    document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
    return true
    }
    if (isEmailExist() == false){
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'
    }
    else{
        singupArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
    }

}


function isLoginEmpty (){
    if (emailSingin.value =='' || passwordSingin.value == ''){
        return false
    }
    else{
        return true
    }
}

function login() {
    if ( isLoginEmpty()==false){
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var password = passwordSingin.value;
    var email = emailSingin.value;
    for (i=0 ; i<singupArray.length ; i++){
    if ( singupArray[i].email.toLowerCase() == email.toLowerCase() && singupArray[i].password.toLowerCase() == password.toLowerCase()){
            localStorage.setItem('sessionUsername', singupArray[i].name)
            window.open('home.html','_self')
        }
        else{
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }
}

var userName = localStorage.getItem('sessionUsername')
if (userName){
    document.getElementById('username').innerHTML="Welcome " + userName
}


function logout(){
    localStorage.removeItem('sessionUsername')
}