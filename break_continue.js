/*for(let f=0; f < 10; f++){
    document.write(f);
    document.write('<br>')
    if (f == 3){
        document.write('Aqui es la vuelta: ',f);
        document.write('<br>')
        break; // se detiene aca
    }
}*/

let palabra = 'Javascript';
let resultado = '';

for(let f in palabra){
    if(palabra[f]=='a'){
        continue; // salta el valor - aca ignora a A
    }else {
        resultado += palabra[f] // le va a asignar a resultado esa letra, que no sea una a
    }
}
document.write(resultado) // Jvscript

// El resultado es que se salteee todas las a, osea que de la vuelta encuentra una a y continua