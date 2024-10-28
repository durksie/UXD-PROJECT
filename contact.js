

    function sendMail(){
        let parms={
         name:document.getElementById('name').value,
         email:document.getElementById('email').value,
         message:document.getElementById('message').value,
        }


        emailjs.send("service_yv6ekbd","template_7c5f88a",parms).then(alert("Email sent!!"))
    }


