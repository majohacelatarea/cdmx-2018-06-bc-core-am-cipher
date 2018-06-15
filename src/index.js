
let originMessage = document.getElementById("message");
let toDisplace = document.getElementById("number");
let codifyButton = document.getElementById("codificar");
let decodeButton = document.getElementById("decodificar");
//let result = document.getElementById("result");
//result.innerHTML = codifyButton;


codifyButton.addEventListener("click" , event => {
    let codifyClick = window.cipher.encode(
        toDisplace.value,
        originMessage.value
    );
    document.getElementById("result").value = codifyClick;
});

decodeButton.addEventListener("click", event => {
    let decodeClick = window.cipher.decode(
        toDisplace.value,
        originMessage.value
    );
    document.getElementById("result").value = decodeClick;
});



  

