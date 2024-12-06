import _ from 'underscore';

/**
 * Esta funcion crea un NUEVO DECK
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('TIPOS DE CARTA ES OBLIGATORIO COMO UN ARREGLO DE STRING');
    if( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('TIPOS ESPECIALES ES OBLIGATORIO COMO UN ARREGLO DE STRING');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    //console.log( deck );
    return deck;
}


