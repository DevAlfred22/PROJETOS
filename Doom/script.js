// Exemplo de manipulação do DOM com JavaScript
document.getElementById('botao').addEventListener('click', function() {
    alert('Botão clicado!');
  });
  
  document.getElementById('entrada-dados').addEventListener('change', function() {
    var valor = this.value;
    console.log('Valor digitado: ' + valor);
  });
  