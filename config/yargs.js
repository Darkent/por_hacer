const argv = require('yargs')
.command('crear', 'Crea una nueva tarea',{
    descripcion:{
        demand:true,
        alias:'d',
        desc:'Describe la tarea'
    }
})
.command('actualizar','Actualiza la tarea',{
    descripcion:{
        demand:true,
        alias:'d',
        desc:'Describe la actualización de la tarea'
    },
    completado:{
        default:true,
        alias:'c',
        desc:'Señala si una tarea fue completada o esta pendiente'
    }
})
.command('borrar', 'Borra una tarea',{
    descripcion:{
        demand:true,
        alias: 'd',
        desc: 'Elimina una tarea'
    }
})
.help()
.argv;


module.exports = {
    argv
}