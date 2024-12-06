/**
 * No spermite tomar una carta del Deck
 * @param {Array<String>} deck Recibe el arreglo con el DECK
 * @returns {string}Retonrna el String de la carta
 */
export const pedirCarta = ( deck ) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}