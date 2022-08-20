'use strict';

const abrirModal = () => document.querySelector('#modal')
    .style.display = 'flex';

const fecharModal = () => document.querySelector('#modal')
    .style.display = 'none';

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
        updateTable()
        fecharModal()
    }
}

const criarLinha = (funcionario, index) => {
    const novaLinha = document.createElement('tr')
    novaLinha.innerHTML = `
        <td>${funcionario.nome}</td>
        <td>${funcionario.funcao}</td>
        <td>R$ ${funcionario.salario}</td>

        <td>
            <button type="button" class="acao">
                <i class="fa-solid fa-user-pen"></i>
            </button>
        </td>
        <td>
            <button type="button" class="acao">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </td>
    `    
    document.querySelector('#tableClient>tbody').appendChild(novaLinha)
}

const limpaTabela = () => {
    const linhas = document.querySelectorAll('tbody > tr')
    linhas.forEach(linha => linha.parentNode.removeChild(linha))
}

const updateTable = () => {
    const dbCadastro = lerFuncionario()
    limpaTabela()
    dbCadastro.forEach(criarLinha)
}

const editaDeleta = (event) => {
    if (event.target.localName == "i") { 
    }
}

updateTable()

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

document.querySelector('#tableClient>tbody') 
    .addEventListener('click', editaDeleta)