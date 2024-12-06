export const crearCartaHtml = ( carta ) => {

    if( !carta ) throw new Error('Es necesaria la CARTA');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
         
    return imgCarta;
}