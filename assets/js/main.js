'use strict';

const abrirModal = () => document.querySelector('#modal')
    .style.display = 'flex';

const fecharModal = () => document.querySelector('#modal')
    .style.display = 'none';

const funcionario = {
    nome: 'Higor Costa',
    funcao: 'Desenvolvedor Web',
    salario: 'R$ 2500,00'
}

const getLocalStorage = () => JSON.parse(localStorage.getItem("dbCadastro")) ?? []
const setLocalStorage = (dbCadastro) => localStorage.setItem("dbCadastro", JSON.stringify(dbCadastro))

const lerFuncionario = () => getLocalStorage()

const criarFuncionario = (novoFuncionario) => {
    const dbCadastro = getLocalStorage()
    dbCadastro.push(novoFuncionario)
    setLocalStorage(dbCadastro)
}

document.querySelector('#cadastrarCliente')
    .addEventListener('click', abrirModal)

document.querySelector('#cancelar')
    .addEventListener('click', fecharModal)