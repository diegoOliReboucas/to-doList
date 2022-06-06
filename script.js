let input = document.querySelector('.input');
let button = document.querySelector('.button');
let lista = document.getElementById('lista').innerHTML;
let checkbox = document.getElementById('checkbox');

function list() {
  console.log(input.value);
  input.focus();
  let cont = 0;

  lista =
    lista +
    "<div class='task'>" +
    "<input id='checkbox' type='checkbox'> " +
    '<li>' +
    input.value +
    '</li>' +
    '<br>' +
    '</div>';
  console.log(lista);
  document.getElementById('lista').innerHTML = lista;

  input.value = '';
}
button.addEventListener('click', list);
