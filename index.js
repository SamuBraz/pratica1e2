const root = document.getElementById('login-container');

function verificarDados() {
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");

    const email = emailInput.value;
    const senha = senhaInput.value;
    if (!email.includes("@") || !email.includes(".")) {
        alert("email invalidado");
        return false;
    }
    else if (senha.length < 8) {
        alert("senha invalidado, deve ter no minimo 7 digitos");
        return false;
    }  
}
