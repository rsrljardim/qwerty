function funcaoDoClick() {
  const input = document.querySelector('#inputBacana');
  const div = document.querySelector('#divBacana');

  div.innerHTML = div.innerHTML + `<p>${input.value}</p>`;
  input.value = '';
}

function funcaoDaTecla(e) {
  if (e.key === 'Enter') {
    funcaoDoClick()
  }
}