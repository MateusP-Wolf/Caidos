function aviso(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Acho que você está tentando ir longe de mais...",
        footer: '<a href="/Caidos/index.html">Volta para os locais que você pode acessar!</a>'
      });
}

function pular(){
    window.location.href = "/Caidos/pages/EQUIPE.html"
}

