$(document).ready(function() {
    console.log(document.querySelector('header button'))
    console.log($('header button'))

    document.querySelector('header button').addEventListener('click',function(){

    })

    $("header button").click(function(){
        $('form').slideDown()

    })

    $('#Cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit',function(e){
        e.preventDefault()
        const enderecoNovaMensagem = $('#nova-imagem').val()
        const novoItem = $('<li style = "display: none"></li>')
        $(`<img src="${enderecoNovaMensagem}"/>`).appendTo(novoItem)
        $(`
            <div class = "OverLay"/>
                <a href="${enderecoNovaMensagem}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        
        $('#nova-imagem').val(' ')

    })
})