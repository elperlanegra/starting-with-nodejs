# Starting With Nodejs

## RESUMEN

Noje JS es la forma más rápida de ejecutar código y escalable, corre en servidores.
Es un lenguaje.

### ORIGINES Y FILOSOFÍA.

Es un entorno de ejecución fuera del navegador, orientado a servidores.Al estar fuera no necesito exploradores.
Puedo ejecutarlo para herrameintas, transpialdores, scraping, automatización.Nos permite tener servers asincronos.

### Caracterisitcas

- JS es concurrente; Monohilo, entradas y salidas asincronas.
  Un unico proceso corrriendo en el nucleo del procesador.
  No se queda bloqueante.

- NodeJS usa V8 como entorno de ejecución fue creado por google escrito en c++ convierte JS en código máquina en lugar de interpretarlo en tiempo real.

- Al estar escrito en c++ es muy rápido. Node es open source.

- Todo lo que no sea sintaxis de programación son módulos.

- Muchos módulos vienen por defecto en el paquete de Node.

- Puedes crear tus propios módulos.

Node está orientado a eventos. Un bucle de eventos que nos permite se programar de manera reactiva. Cualquier evento se puede escuchar.

# Event Lopp

![](recursos/event-loop.png)

# Fundamentos en NODEJS

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
