import { produtos, addProduto, removeProduto, editProduto } from './data.js';

// CONST -------------------------------------------------

const inpNome = document.querySelector('#inpNome');
const inpQntd = document.querySelector('#inpQntd');
const inpPreco = document.querySelector('#inpPreco');
const inpUn = document.querySelector('#inpUn');

const botaoAdd = document.querySelector('#divInput').firstElementChild;
const botaoSalvar = document.querySelector('#btnSalvar');
const botaoEditar = document.querySelector('#btnEditar');
const botaoCancelar = document.querySelector('#btnCancelar')

// EVENTOS -------------------------------------------------


botaoAdd.addEventListener('click', () => abreModal());

modal.addEventListener('close', ()=> fechaModal());

botaoSalvar.addEventListener('click', () => addItem());

botaoEditar.addEventListener('click', ()=> editItem());

botaoCancelar.addEventListener('click', () => modal.close());

// FUNCOES -------------------------------------------------

function limpaInputs() {
  inpNome.value = '';
  inpQntd.value = '';
  inpPreco.value = '';
  inpUn.value = '';
}

// -------------------------------------------------

function editItem() {

  const novoItem = {
    "id": Number(inpNome.getAttribute('data-key')),
    "nome": inpNome.value,
    "qntd": inpQntd.value,
    "un": inpUn.value,
    "preco": inpPreco.value
  }

  editProduto(novoItem);
  carregaDados();
  fechaModal();
}

// -------------------------------------------------

function abreModal(item) {
  const modal = document.querySelector('#modal');
  modal.showModal();
  
  if (item) {
    const tds = item.children;
    inpNome.value = tds[0].innerHTML
    inpQntd.value = tds[1].innerHTML
    inpUn.value = tds[2].innerHTML
    inpPreco.value = tds[3].innerHTML
    
    modal.firstElementChild.innerHTML = 'Editar produto';
    botaoEditar.classList.remove('hidden');
    inpNome.setAttribute('data-key', item.getAttribute('data-key'));
  }
  else {
    modal.firstElementChild.innerHTML = 'Adicionar novo produto'
    botaoSalvar.classList.remove('hidden')
  }
}

// -------------------------------------------------

function fechaModal() {
  document.querySelector('#modal').close();
  if (inpNome.getAttribute('data-key')){
    botaoEditar.classList.add('hidden')
    inpNome.removeAttribute('data-key');
  }
  else {
    botaoSalvar.classList, add('hidden')
  }
  
  document.querySelector('#modal').close();
  limpaInputs();

}

// -------------------------------------------------

function carregaEventos() {
  const listaEdit = document.querySelectorAll('button[name="editBtn"]');
  const listaRemove = document.querySelectorAll('button[name="removeBtn"]');
  
  listaEdit.forEach(item => {
    item.addEventListener('click', () => abreModal(item.parentElement.parentElement.parentElement));
  });
  
  listaRemove.forEach(item => {
    item.addEventListener('click', () => removeItem(item.getAttribute('data-key')));
  });
}

// -------------------------------------------------

carregaDados();

// -------------------------------------------------

function carregaDados() {
  const divTabela = document.querySelector('#divTabela');
  
  let tabela;
  
  tabela =
  `<table>
  <thead>
  <tr>
  <th>NOME</th>
  <th>QNTD</th>
  <th>UN</th>
  <th>PRECO</th>
  <th>AÇÕES</th>
  </tr>
  </thead>
  <tbody>`;
  
  produtos.forEach(linha => {
    const { id, ...rest } = linha;
    
    tabela += `<tr data-key="${id}">`;
    for (const key in rest) {
      tabela += `<td>${rest[key]}</td>`;
    }
    tabela +=
    `<td>
    <div class="flex justify-end gap-3">
    <button data-key="${id}" class="bg-amber-50 px-1 rounded-md hover:bg-amber-100" name="editBtn">
    <span class="material-symbols-outlined text-xl text-amber-400">edit</span>
    </button>
    <button data-key="${id}" class="bg-red-50 px-1 rounded-md hover:bg-red-100" name="removeBtn">
    <span class="material-symbols-outlined  text-xl text-red-400">delete</span>
    </button>
    </div>
    </td>`;
    '</tr>'
  });
  
  tabela += '</tbody></table>';
  divTabela.innerHTML = tabela;
  
  carregaEventos();
  
}

// -------------------------------------------------

function addItem() {
  
  const item = {
    "id" : 0,
    "nome" : inpNome.value,
    "qntd" : inpQntd.value,
    "un" : inpUn.value,
    "preco" : inpPreco.value
  }
  
  if(item.nome != "" && item.qntd != "" && item.un != "" && item.preco){

  addProduto(item);
  carregaDados();
}
  fechaModal();
}

// -------------------------------------------------

export function removeItem(item) {
  removeProduto(Number(item));
  carregaDados();
}

// -------------------------------------------------