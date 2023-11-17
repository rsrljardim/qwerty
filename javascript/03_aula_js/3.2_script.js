const lista = [];


function funcaoDoClick() {
  const input = document.querySelector('#inputBacana');
  const div = document.querySelector('#divBacana');

  lista.push(input.value);
  input.value = '';

  div.innerHTML += 
  `${lista.map((el) => {
    return `<li> ${el}</li>`
  })}`
  
}

function funcaoDaTecla(e) {
  if (e.key === 'Enter') {
    funcaoDoClick()
  }
  }
}