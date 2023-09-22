const form = document.getElementById("login-form")
const loginButton = document.getElementById("login-btn")
const userInput = document.getElementById("login-user")
const pwdInput = document.getElementById("login-pwd")

function verifyFields(){
    const user = userInput.value.trim()
    const pwd = pwdInput.value.trim()

    const validUser = user !== ''
    const validPwd = pwd.length >= 6

    loginButton.disabled = !(validUser && validPwd)

    if (validUser && validPwd) {
        loginButton.style.backgroundColor = '#0095F6'
        loginButton.style.cursor = 'pointer'
    }
    else {
        loginButton.style.cursor = 'default'
        loginButton.style.backgroundColor = '#b2dffc'
        loginButton.disabled = true
    }
}

function showData(event){
    const user = userInput.value.trim()
    const pwd = pwdInput.value.trim()

    localStorage.setItem('user', user)
    localStorage.setItem('pwd', pwd)
    window.location.href = "../data.html"
    event.preventDefault()
}

userInput.addEventListener('input', verifyFields)
pwdInput.addEventListener('input', verifyFields)

form.addEventListener('submit', function(event){
    if (!(userInput.validity.valid && pwdInput.validity.valid)) {
        event.preventDefault()
    }
    else {
        showData(event)
    }
})
