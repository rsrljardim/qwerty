const lista = [];
 
 
function funcaoDeLimpar(){
    const div = document.querySelector('#divBacana');
    lista.length = 0;
    div.innerHTML = '';
}
 
function funcaoDoClick() {
    const input = document.querySelector('#inputBacana');
    const div = document.querySelector('#divBacana');
 
    lista.push(input.value);
    input.value = '';
 
    console.log(lista);
    div.innerHTML = '<ul>';
    for (let i = 0; i < lista.length; i++) {
        div.innerHTML += `<li>${lista[i]}</li>`;
    }
    div.innerHTML += '</ul>';
 
}
 
function funcaoDaTecla(e) {
    if (e.key === 'Enter'){
        funcaoDoClick()
    }
}