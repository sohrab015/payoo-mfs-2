document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault();
    const accNumber = document.getElementById("ack-number").value;
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);

    if(accNumber.length === 11){
        if(convertedPin == !null){
            window.location.href="./main.html"
            alert("Login Succsessfull");
        }
        else{
            alert("Enter Valid PIN");
        }
    }
    else{
        alert("Please Enter a Valid 11 Digit Number")
    }
})

