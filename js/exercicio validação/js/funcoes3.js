function TempoMensagem(mensagem, sucesso) {
    var mensagemElement = document.getElementById('mensagem');
    mensagemElement.innerHTML = mensagem;
    mensagemElement.style.color = sucesso ? 'green' : 'red';
    mensagemElement.style.display = 'block';

    setTimeout(function() {
       mensagemElement.style.display = 'none';
    }, 4000);
}
function autenticacao() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    
    if (email.value == '') {
        TempoMensagem('Favor preencher o campo de e-mail', false);
        document.getElementById('email').focus();
        return false;
        
    } else if (email.value !== 'vitor@gmail.com') {
        TempoMensagem('Erro na autenticação do e-mail', false);
        document.getElementById('email').focus();
        return false;
    }

    
    if (password.value == '') {
        TempoMensagem('Favor preencher o campo de senha', false);
        document.getElementById('password').focus();
        return false;

    } else if (password.value == '12345') {
        TempoMensagem('Autenticação realizada com sucesso', true);
        document.getElementById('password').focus();
        return true;

    } else {
        TempoMensagem('Formato de senha incorreto', false);
        document.getElementById('password').focus(); 
        return false;
    }
}      