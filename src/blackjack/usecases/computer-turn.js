import {pedirCarta, valorCarta, createLetterHtml } from "./";

/**
 *
 * @param {number} puntosMinimos min points that the computer required for wir
 * @param {HTMLElement} puntosHTML Elements HTML show points
 * @param {HTMLElement} divCartasComputadora Elements HTML show letters
 * @param {Array<String>} deck
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora,  deck = [] ) => {

    if (!puntosMinimos) throw new Error('Required Point Player');
    if (!puntosHTML) throw new Error('Required Point HTML');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        const imgCarta = createLetterHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}