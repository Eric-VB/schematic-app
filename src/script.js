const natureza = document.querySelector('#card-natureza')
const medieval = document.querySelector('#card-medieval')
const moderno = document.querySelector('#card-moderno')


function pesquisarBuilds(cardId) {
    let localClicado = 0

    switch (cardId) {
        case 'natureza':
          localClicado = 'natureza';
          break;
        case 'medieval':
          localClicado = 'medieval';
          break;
        case 'moderno':
          localClicado = 'moderno';
          break;
        default:
    }
    console.log(`localClicado: ${localClicado}`);
    
    localStorage.setItem('localClicado', localClicado)

    window.location = 'http://127.0.0.1:5500/src/builds/builds.html'
    location = new location;
        
}

natureza.addEventListener('click', () => pesquisarBuilds('natureza'))
medieval.addEventListener('click', () => pesquisarBuilds('medieval'))
moderno.addEventListener('click', () => pesquisarBuilds('moderno'))