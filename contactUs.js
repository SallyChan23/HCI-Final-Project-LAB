document.getElementById('form').addEventListener('submit', (event)=>{
    event.preventDefault()
    const useremail = document.getElementById('usermail').value
    const username = document.getElementById('username').value
    const agreement = document.getElementById('agree').checked
    const message = document.getElementById('message').value
    const country = document.getElementById('country')
    console.log(username, useremail, agreement);

    if(username.length<5 || username.length>15){
        alert('Name length must be between 8-15 characters')
        return
    }

    if(!useremail.endsWith('@gmail.com')){
        alert('Email must contains with @gmail.com at the end')
        return
    }

    if(message.length<10){
        alert('Message length must be 10 or more')
        return;
    }

    if(country.value===""){
        alert('You must select your country')
        return;
    }
    if(!agreement){
        alert('You must agree to send a copy!')
        return
    }

    alert('Send Success')
    window.location.href='index.html'
})

