/*var get = funtion (url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            callback(xhr.responseText, xhr.status);
        }
    }
    xhr.open('GET', url);
    xhr.send(null);
}
$http.post("http://127.0.0.1:5500/contatos", {
    nome: "João",
    telefone: "123456789",
    operadora: {
      nome: "Claro",
      codigo: 21,
      categoria: "Celular"
    }
  })
    .then(function (response) {
      console.log("Resposta do servidor:", response.data);
    }, function (error) {
      console.error("Erro ao enviar dados:", error);
    });*/