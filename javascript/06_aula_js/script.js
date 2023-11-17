import { produtos } from "./data.js";

// EVENTOS ---------------------------------------------------------------------------
const botao = document.querySelector('#divInput').children[1]
botao.addEventListener("click", () => addProduto(botao.previousElementSibling));

// -----------------------------------------------------------------------------------

const divTabela = document.querySelector('#divTabela')

let tabela;

carregaDados();

function carregaDados() {

  tabela =
  `<table>
    <thead>
    <tr>
      <td>NOME</td>
      <td>QTDE</td>
      <td>UN</td>
      <td>PREÇO</td>
    </tr>
    </thead>
    <tbody>`;

  produtos.forEach ((linha, idx) => {
    tabela += `<tr data-key="${idx}">`;
    linha.splice(1).forEach((el) => {
      tabela += `<td>${el}</td>`
    });
    tabela += '</tr>';
  });

  tabela += '</tbody></table>'

  divTabela.innerHTML = tabela

}

export function addProduto(el) {
    const botao = document.querySelector('#divInput')
    console.log(el.value);


  produtos.push([produtos.length+1, el.value, 0, "", 0])
  carregaDados();
}

