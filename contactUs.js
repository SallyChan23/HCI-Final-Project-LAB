function getInt(a,b,c){

}


document.getElementById('form').addEventListener('submit', (event)=>{
    event.preventDefault()
    const useremail= document.getElementById('usermail').value
    const username=document.getElementById('username').value
    const agreement= document.getElementById('agree').checked

    console.log(username, useremail, agreement);

    if(username.length<8 || username.length>15){
        alert('Username length must be between 8-15 characters')
        return
    }

    if(!useremail.endsWith('@gmail.com') || !useremail.endsWith('@yahoo.com') || !useremail.endsWith('@ac.id') || !useremail.endsWith('@outlook.com')){
        alert('Email must contains right format')
        return
    }
    if(password!==repassword){
        alert('Retype password doesn\'t match')
        return
    }

    if(!agreement){
        alert('You must agree with all of term and conditions!')
        return
    }

    alert('Registration Success')
    window.location.href='/home.html'
})

// document.getElementById('register-button').addEventListener('click')

