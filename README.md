# arbolito
efecto de lluvia
https://blog.endeos.com/crea-un-efecto-lluvia-con-javascript
efecto de tormenta de nieve
https://webdesign.tutsplus.com/how-to-create-animated-snow-on-a-website-with-css-and-javascript--cms-93562t
efecto de hojas de otoño cayendo
https://www.pczeros.net/2013/01/truco-hojas-que-caen-por-el-blog.html

arbolito
javascript
function dibujarArbolito(altura) {
  for (let i = 0; i < altura; i++) {
    let espacios = ' '.repeat(altura - i - 1);
    let asteriscos = '*'.repeat(i * 2 + 1);
    console.log(espacios + asteriscos);
  }
  // Tronco del árbol
  console.log(' '.repeat(altura - 1) + '|');
}

// Llama a la función con la altura deseada
dibujarArbolito(5);
