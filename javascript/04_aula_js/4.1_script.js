const lista = [];

function funcaoDeLimpar(){
    const div = document.querySelector('#divBacana');
    lista.length = 0;
    div.innerHTML = '';
}

function funcaoDoItem(idx){
    const item = document.querySelector(`#div-${idx}`);
    lista.filter((el) => {
      if (el === item.firstChild.innerHTML) {
        return false
      }
      return true
    });
    item.remove();
}

function funcaoDoClick() {
    const input = document.querySelector('#inputBacana');
    const div = document.querySelector('#divBacana');
 
    lista.push(input.value);
    input.value = '';
 
    
    let txt = '<ul>';
    
    lista.forEach ((el, idx)) {
        txt +=`<div id="div-${idx}" class="flex items-center gap-4">`;
        txt += `<li class="my-2" >• ${el}</li>`;
        txt += `<button onclick="funcaoDoItem(${idx})" class="bg-yellow-400 px-2 text-white">X</button>`;
        txt +='</div>';
    }
    txt += '</ul>';
    div.innerHTML = txt;
 
}
 
function funcaoDaTecla(e) {
    if (e.key === 'Enter'){
        funcaoDoClick()
    }
}
