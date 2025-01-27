const filtroTipoConstrucao = document.querySelector('#filtroTipoConstrucao');

let localClicado = localStorage.getItem('localClicado')

if(localClicado != 0){
    filtroTipoConstrucaoHome(localClicado)
}

function filtroTipoConstrucaoHome(idContrucao) {

    switch (idContrucao) {
        case 'natureza':
            filtroTipoConstrucao.value = 'natureza'
            break;

        case 'medieval':
            filtroTipoConstrucao.value = 'medieval'
            break;

        case 'moderno':
            filtroTipoConstrucao.value = 'moderno'
            break;
            
        default:
            break;
    }

}