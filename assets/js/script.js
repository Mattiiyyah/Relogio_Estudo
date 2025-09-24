//pegando os elementos 
const relogio = document.querySelector('.relogio');
const inputTempo = document.querySelector('#tempoInput');

function criandoHoraSegundos(segundos) {

    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    });

}

//variaveis principais
let tempo = 0;
let timer;

//execução ao iniciar o relogio
function iniciarRelogio() {
    
    timer = setInterval(() => {

        if (tempo === 0) {
            const valor = Number(inputTempo.value);

            tempo = valor * 60; // minutos pra segundos
        }

        tempo--;
        relogio.innerHTML = criandoHoraSegundos(tempo);

       if (tempo <= 0) {
         clearInterval(timer);
         relogio.innerHTML = 'Temporizador Acabado';
         relogio.classList.remove('iniciado');
         return;
       }

    }, 1000);
}

document.addEventListener('click', function(evento) {

    const elemento = evento.target;

    if(elemento.classList.contains('iniciar')) {
        relogio.classList.add('iniciado');
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciarRelogio();
    }

    if(elemento.classList.contains('pausar')) {
        relogio.classList.remove('iniciado');
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

    if(elemento.classList.contains('resetar')) {
        relogio.classList.remove('iniciado');
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';

        tempo = 0;
    }
});