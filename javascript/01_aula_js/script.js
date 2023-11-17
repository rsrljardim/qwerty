function onButtonClick() {
  let preco1 = document.getElementById('preco1').value;
  let qtde1 = document.getElementById('qtde1').value;
  let preco2 = document.getElementById('preco2').value;
  let qtde2 = document.getElementById('qtde2').value;
  let resultado

  var result1 = (preco1/qtde1)
  var result2 = (preco2/qtde2)

  if (result1 > result2) {
    resultado = "Produto 2"
  }

  if (result1 < result2) {
    resultado = "Produto 1"
  } 
  
  else {
    resultado = "Iguas"
  }

  alert(resultado);
}

