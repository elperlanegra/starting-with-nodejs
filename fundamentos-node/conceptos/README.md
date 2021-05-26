PROCESO DE NODE

    1- Va a abrirse un proceso, ese proceso es un proceso de node
    2- Interpreta todo el archivo
    3- Convertirlo a código maquina
    4- Prepara todo lo que necesita para ejecutarse
    5- Se ejecuta
    6- Se cierra el proceso, y termina

DESVENTAJAS MONOHILO

    - Si no se manejan bien los errores y uno truena, ya no continua con los procesos posteriores
    - Debes estar pendiente de todo el código

RESUMEN:

## Nodemon

### Desarrollo

- Nodemon. Demons en linux, puedes tener procesos que ves ejecutandose
nodemon + archivo al que quiero acceder detecta cambios, y ejecuta automaticamente el código.

```bash
sudo npm install -g nodemon
```

## Producción

### PM2
```bash
sudo npm install -g pm2
```
- PM2 Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7.

- Voy a poner monitorizar el código para saber si algo se rompe.
Me permite ver dashboards de mi código, puedo ver que está corriendo.
- Puedo ver el rendimiento de mi cpu
Con: pm2 stop + id —> me detiene el proceso que está en ejecución con ese ID.
