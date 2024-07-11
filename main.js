let numero_gatti = 7;
let gatti_in_fila = 2;

let numero_file = Math.floor(numero_gatti / gatti_in_fila);

let gatti_out = (numero_gatti % gatti_in_fila);

let gat_manc = (gatti_in_fila - gatti_out);

console.log(" Ci sono " + numero_file + " file di gatti "+ " e ne mancano " + gat_manc + " per una nuova file, con un avanzo di " + gatti_out)

