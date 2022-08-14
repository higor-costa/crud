'use strict';

const abrirModal = () => document.querySelector('#modal')
    .style.display = 'flex';

const fecharModal = () => document.querySelector('#modal')
    .style.display = 'none';

document.querySelector('#cadastrarCliente')
    .addEventListener('click', abrirModal)