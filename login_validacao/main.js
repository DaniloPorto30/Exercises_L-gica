/* Função Validar */
function validar() {
    // pegando o valor do nome pelos names
    var login = document.getElementById("login");
    var senha = document.getElementById("senha");
    var verificar = document.getElementById("verificar");
    
    // verificar se o nome está vazio
    if (login.value == "") {
      alert("Nome não informado");
      login.focus();
      return;
    }
    if (senha.value == "") {
      alert("Senha não informada");
      senha.focus();
      return;
    }
    if (verificar.value == "") {
      alert("Confirmacao de Senha não informada");
      verificar.focus();
      return;
    }
   
    if ((senha.value.length < 6) || (senha.value.length > 10)){
        alert("A senha deve ter entre 6 a 10 caractere");
        senha.focus();
        return;
    }
    if ((verificar.value.length < 6) || (verificar.value.length > 10)) {
        alert("A Confimacao de senha deve ter entre 6 a 10 caractere");
        verificar.focus();
        return;
    }
    if (senha.value != verificar.value){
      alert("Senhas diferentes");
      senha.focus();
      verificar.focus();
      return;
    }
    alert("Cadastro realizado!");
  }


