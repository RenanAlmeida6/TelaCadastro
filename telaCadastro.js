function FormataCNPJ(cpf) {
    const elementoAlvo = cpf
    const cpfAtual = cpf.value   
    
    let cpfAtualizado;
    if (cpfAtual.length > 14 ||cpfAtual.length < 14)
    {
        cpfAtualizado = cpfAtual.replace(/-/g, "").replace(/\./g, "").replace(/\//g, "");
        elementoAlvo.value = cpfAtualizado; 
    }
    if (cpfAtual.length == 11)
    {    
        const testaLetras = cpfAtual.replace(/\D/, "")
        if  (testaLetras.length != 11){
            return alert("Insira apenas números, no campo CNPJ.")
        }
        cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
        function( regex, argumento1, argumento2, argumento3, argumento4 ) {
               return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
            })
            elementoAlvo.value = cpfAtualizado; 
    }

    if (cpfAtual.length == 14)
    {       
        const testaLetras = cpfAtual.replace(/\D/, "")
        if  (testaLetras.length != 14){
            return alert("Insira apenas números, no campo CNPJ.")
        } 
        cpfAtualizado = cpfAtual.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        function( regex, argumento1, argumento2, argumento3, argumento4,argumento5 ) {
               return argumento1 + '.' + argumento2 + '.' + argumento3 + '/' + argumento4 + '-' + argumento5;
            })
            elementoAlvo.value = cpfAtualizado; 
    }
}
function FormataNumero(WhatsApp) {
    let WhatsAppAjustado;
    let whatsAppAtual = WhatsApp.value
    WhatsApp.value = whatsAppAtual.replace(/\s+/g, '').replace(/\(/g, "").replace(/\)/g, "")
    if(whatsAppAtual.length == 11)
    {
        const testaLetras = whatsAppAtual.replace(/\D/, "")
        if  (testaLetras.length != 11){
            return alert("Insira apenas números, no campo WhatsApp.")
        }
        WhatsAppAjustado = whatsAppAtual.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/,
            function( regex, arg1, arg2, arg3,arg4) {
            return "(" + arg1 + ")" + " " + arg2 + " " + arg3 + " " + arg4 ;
        });
        WhatsApp.value = WhatsAppAjustado;
    }
}

function validarCamposEFazDownload(){
    validaCampos()
}
function validaCampos(){
    var email = document.getElementById('Email').value;
    var senha = document.getElementById('Senha').value;
    var WhatsApp = document.getElementById('WhatsApp').value;
    var CNPJ = document.getElementById('CNPJ').value;


    if( email=="" || email.indexOf('@')==-1 || email.indexOf('.')==-1 )
    {
        alert( "Por favor, informe um E-MAIL válido!" );
        return false;
    }
    if (senha.length < 8)
    {
        alert("Por favor, insira uma senha com pelo menos 8 caractéres")
        return false;
    }
    if (WhatsApp.length != 16)
    {
        alert("Por favor, insira um WhatsApp válido")
    }
    CNPJ =  CNPJ.replace(/-/g, "").replace(/\./g, "").replace(/\//g, "")
    if(CNPJ.length == 11)
    {
        Download(CNPJ)
    }
    else if (CNPJ.length == 14 )
    {
        Download(CNPJ)
    }
    else {
        alert("Por favor, insira um cnpj válido")
        return false;
    }
}
function Download(CNPJ) {
    var email = document.getElementById('Email').value;
    var senha = document.getElementById('Senha').value;
    var WhatsApp = document.getElementById('WhatsApp').value;
    var CNPJFormatado = document.getElementById('CNPJ').value;
    let conteudoTextoJSON = '{';
    conteudoTextoJSON += '"email": "' + email + '",';
    conteudoTextoJSON += '"senha": "' + senha + '",';
    conteudoTextoJSON += '"WhatsApp": "' + WhatsApp + '",';
    conteudoTextoJSON += '"CNPJFormatado": "' + CNPJFormatado + '"';
    conteudoTextoJSON += '}';

    let blob = new Blob ( [conteudoTextoJSON], {type: "text/plain;charset=utf-8"});
    saveAs(blob, CNPJ + ".Json")
}
