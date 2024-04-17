$(document).ready(()=> iniciar())

const urlBase = "http://universities.hipolabs.com/search?country=Brazil"

function iniciar(){
    $.ajax({
        url: urlBase,
        type: 'GET'
    })
    .done((dados)=>{ 
        const universities = dados;
        console.log(universities)
    })
}

// function prepararDados(dados){
//     let usuarios = []
//     for(let i=0; i< dados.length; i++){
//         const novoUsuario = formatUser(dados[i])
//         usuarios.push(novoUsuario)
//     }

//     return usuarios
// }

// function showUser(user) {
//     const userData = formatUser(user)
//     console.log(userData)
// }

// function formatUser(user){
//     return {
//         id: user.id,
//         login: user.login,
//         photo: user.avatar_url,
//         link: user.html_url
//     }
// }

// function exibirUsers(users){
//     for(let i=0; i< users.length; i++){
        
//         const row = createRow(users[i])

//         $("#user_data").append(row)
//     }
// }



// $('button').click(() => {
//     const input = $('input')
//     const login = input.val()
    
//     if(login) {
//         iniciar(login)
//         input.val('')
//     } else {
//         alert('Digite o login')
//     }
// })