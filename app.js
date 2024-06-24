const parametrosForm = document.querySelector('.parametros');
const btnRespuesta = document.getElementById('btnRespuesta');
const resultado = document.getElementById('Resultado');
const antena1 = document.getElementById('antena1');
const antena2 = document.getElementById('antena2');


function calcularDistancia(){
    let alturaAntena1 = antena1.value;
    let alturaAntena2 = antena2.value;
    
    let distanciaMaxima =  3.57 * (Math.pow(4/3 * alturaAntena1, 1/2) + Math.pow(4/3 * alturaAntena2, 1/2));

    return distanciaMaxima.toFixed(2);
}

btnRespuesta.addEventListener('click',(e)=>{
    e.preventDefault();
    resultado.innerHTML = `La distancia maxima es de: ${calcularDistancia()} Km`
})
