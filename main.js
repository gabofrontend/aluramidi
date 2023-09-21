function tocaSom(seletorAudio){//Os parâmetros são os nomes que damos a valores que uma função pode receber em sua chamada, que podem ou não ter um valor padrão. Os parâmetros de uma função são como variáveis ficam disponíveis apenas no corpo da função.

   const elemento = document.querySelector(seletorAudio)
   

   if(elemento && elemento.localName === 'audio'){
    elemento.play()
    }
   else{
    alert('Elemento não encontrado ou seletor inválido')
   }
   }



const listasDeTeclas = document.querySelectorAll('.tecla');



for( let contador = 0; contador < listasDeTeclas.length; contador++){

    const tecla = listasDeTeclas[contador]

    const instrumento = tecla.classList[1]
   
    const idAudio = `#som_${instrumento}`
     //templade string

    tecla.onclick = function (){
        tocaSom(idAudio)
    }
   
    tecla.onkeydown = function(evento){

    if(evento.code === 'Space' || evento.code === 'Enter' ){
        tecla.classList.add('ativa')
       }   
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}

