const argv = require ('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');
let comando = argv._[0];

switch(comando){
        case('crear'):
       console.log( porHacer.crear(argv.descripcion));
        
        break;
        case('listar'):
        let tareas = porHacer.getListado()
         for(tarea of tareas){
             console.log("==================POR HACER==============".green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log("==========================================".green);
         }
        break;
        case('actualizar'):
        porHacer.actualizar(argv.descripcion,argv.completado);
        break;
        case('borrar'):
        porHacer.borrar(argv.descripcion);
        break;
        default:
        console.log('Comando no reconocido');
          
}

