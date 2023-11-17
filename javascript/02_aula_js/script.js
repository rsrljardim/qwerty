function onButtonClick() {
  const txt = document.getElementById("inputMsg").value;
  
  if (txt === '') {
    alert('Por favor, insira uma mensagem!')
  } else {
    alert(txt)
  }
  
  document.getElementById("Historico").innerHTML = txt;
  
  inputMsg.value = ''

}
  
