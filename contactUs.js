document.getElementById('form-register').addEventListener('submit', (event)=>{
    event.preventDefault()
    const useremail= document.getElementById('usermail').value
    const username=document.getElementById('username').value
    const agreement= document.getElementById('agree').checked

    console.log(username, useremail, agreement);

    if(!useremail.endsWith('@gmail.com')){
        alert('Email must ends with @gmail.com')
        return
    }

    if(username.length<8 || username.length>15){
        alert('Username length must be between 8-15 characters')
        return
    }

    if(!agreement){
        alert('You must agree with all of term and conditions!')
        return
    }
    alert('Registration Success')
    window.location.href='home.html'
})