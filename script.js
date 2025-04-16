document.addEventListener('DOMContentLoaded', function() {
    const campoSenha = document.getElementById('campoSenha');
    
    function validarSenha() {
      const senha = campoSenha.value;
      
      
      atualizarRegra('regraTamanho', senha.length >= 8);
      atualizarRegra('regraCaracteresPermitidos', /^[A-Za-z0-9!@#$%&*_?]+$/.test(senha));
      atualizarRegra('regraMaiusculaENumero', /[A-Z]/.test(senha) && /[0-9]/.test(senha));
      atualizarRegra('regraCaractereEspecial', /[!@#$%&*_?]/.test(senha));
    }
    
    function atualizarRegra(elementId, condicaoValida) {
      const elemento = document.getElementById(elementId);
      if (condicaoValida) {
        elemento.classList.add('valido');
      } else {
        elemento.classList.remove('valido');
      }
    }
    
    campoSenha.addEventListener('input', validarSenha);
});