
/*
    [X]colocar evento de click no botao para executar a função
    [X]descobrir quem é minha div que vou colocar dentro 
    [X]criar meu array com os dados 
    [X]pegar esse array usando forEach iterar ele e renderizar
*/
const myProjects = [
    {name: "Todo-list", text: "feito para listar as tarefas do dia a dia", src:"./img/Star-Wars-saga.jpg"},
    {name: "Dubai-turismo", text: "site de viagens", src:"./img/dubai.png"},
    {name: "Mario-bros", text: "projeto de serviços mecanizados", src:"./img/mario.jpeg"}
]

const showProjects = document.querySelector(".showProjects")
const hideProjects = document.querySelector(".hideProjects")

const mostrarProjetos = () => {
    const caixaProjetos = document.querySelector(".projetos-caixa")

    let newProjects = "" //let tem que ficar aqui dentro para ele poder limpar

    myProjects.forEach(item => { //adicionei uma segunda classe para poder separar na hora de remover
        newProjects += ` 
            <div class="projetos-card js-projetos-card"> 
                <img src="${item.src}" alt="slider-imagem" class="projetos-imagem">

                <div class="caixa-projetos">
                    <h3 class="info-projetos">${item.name}</h3>
                    <p class="projetos-paragrafo">${item.text}</p>
                    <span class="link"><a href="" target="_blank">Ver Projeto</a></span>
                </div>

            </div>
        
        `
    })

    caixaProjetos.appendChild(document.createRange().createContextualFragment(newProjects))
    //document -> é o documento inteiro, ou seja, a página toda
    //createRange -> cria um intervalo, ou seja, um espaço onde eu posso colocar algo
    //createContextualFragment -> ele vai pegar a string e transformar em um elemento HTML (sem sumir com o conteúdo que já tem na página)

    //resumo: vai criar uma espaço para colocar o conteudo do newProjects sem apagar o que já tem na página

    hideProjects.style.display = "block" //fica vizivel
    showProjects.style.display = "none" // econde o botão

}


const fecharProjetos = () => { // função para limpar os cards criados
    const caixaProjetos = document.querySelector(".projetos-caixa")

    const projetosJs = caixaProjetos.querySelectorAll(".js-projetos-card")
    //to indo dentro da minha caixa e selecionando todos os que tem a classe js

    projetosJs.forEach(item => item.remove())
    // iterando o array projetosJs e removendo os itens sem tirar os que ja tinham

    hideProjects.style.display = "none"
    showProjects.style.display = "block"

}


showProjects.addEventListener("click", mostrarProjetos)
hideProjects.addEventListener("click", fecharProjetos)



function enviarWhatsApp(event) { /*tudo isso só vai acontecer assim que clicar no botao ou seja assim que a função for chamada */

    event.preventDefault() /*para nao recarregar a tela após a mensagem enviada*/

    const nome = document.getElementById('nome').value /*chamei o input pelo id dele.value(só o valor dele) */
    const mensagem = document.getElementById('mensagem').value /*chamei o textarea pelo id dele.value(só o valor dele) */
    const telefone = '5517996184413' /*aqui gerei o numero que a mensagem vai cair*/

    const texto = `Olá me chamo ${nome}, ${mensagem}`/*criei a mensagem*/

    const msgFormatada = encodeURIComponent(texto) /*texto formatado (ecode gera um codigo de espaço para url de texto)*/

    const url = `https://wa.me/${telefone}?text=${mensagem}` /*criei a url usando o wa.me e modifiquei com o telefone e mensagem*/

    window.open(url, '_blank') /*carregar essa mensagem da url em outra pagina*/
}