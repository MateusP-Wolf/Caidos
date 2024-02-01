function enviarFormulario() {
    event.preventDefault();
    Swal.fire("Seu formulário foi enviado! Entraremos em contato em breve! (Ou não)");

    document.getElementById("inputEmail4").value = "";
    document.getElementById("inputPassword4").value = "";
    document.getElementById("inputPais").value = "";
    document.getElementById("inputAddress").value = "";
    document.getElementById("inputCity").value = "";
    document.getElementById("inputTelefone").value = "";
    document.getElementById("inputNasc").value = "";
}
