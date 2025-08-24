function clicar() {
    const validar = document.querySelector('input').value

    if(validar == '') {
        alert('Preencha todos os campos')
    }  else if (validar.length > 1) {
        alert('Cadastro realizado com sucesso')
    }
}