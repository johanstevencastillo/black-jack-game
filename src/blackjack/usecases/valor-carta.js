/**
 * Obtener el valor numerico de la carta 
 * @param {String} carta 
 * @returns{Number} Un numero que es el valor de la carta 
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}