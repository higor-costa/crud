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

const deletaFuncionario = (index) => {
    const dbCadastro = lerFuncionario()
    dbCadastro.splice(index, 1)
    setLocalStorage(dbCadastro)
}

const atualizaFuncionario = (index, novoFuncionario) => {
    const dbCadastro = lerFuncionario()
    dbCadastro[index] = novoFuncionario
    setLocalStorage(dbCadastro)
}

const lerFuncionario = () => getLocalStorage()

const criarFuncionario = (novoFuncionario) => {
    const dbCadastro = getLocalStorage()
    dbCadastro.push(novoFuncionario)
    setLocalStorage(dbCadastro)
}

const camposValidos = () => {
    return document.querySelector('#form').reportValidity()
}

const limpaCampos = () => {
    const campos = document.querySelectorAll('.campo')
    campos.forEach(campo => campo.value = '')
}

const salvarFuncionario = () => {
    if (camposValidos()) {
        const funcionario = {
            nome: document.querySelector('#nome').value,
            funcao: document.querySelector('#funcao').value,
            salario: document.querySelector('#salario').value
        }
        criarFuncionario(funcionario)
        limpaCampos()
        fecharModal()
    }
}

document.querySelector('#cadastrarCliente')
    .addEventListener('click', abrirModal)

document.querySelector('#cancelar')
    .addEventListener('click', e => {
        e.preventDefault()
        limpaCampos()
        fecharModal()
    })

document.querySelector('#salvar')
    .addEventListener('click', e => {
        e.preventDefault()
        salvarFuncionario()
    })    