![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Final Project Henry - Qatar e-commerce


## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Investigaciín y puesta en práctica de nuevas tecnologías que no se enseñan en el bootcamp.

## Horarios y Fechas

El proyecto tuvo una duración máxima de tres semanas y media. Se realizó en Septiembre/Noviembre 2022

## Comenzando

1. Se creo un boilerplate con React-create-app y se inicializo un server back end con Sequelize y Express


## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `ecommerce`



## Enunciado

La idea general es crear una aplicación en la cual se pueda ver información de  distintos productos para venta sobre Qatar 2022 utilizando la api creada en back a partir de un JSON hardcodeado y a partir de ella poder, entre otras cosas:

- Buscar productos
- Filtrarlos / Ordenarlos
- Crear - MOdificar - Eliminar productos
- Poder comprar dichos productos, por ende manejar un carrito de compras
- El cliente y un admin debe poder loguarse para hacer compras y hacer modificaciones respectivamente


#### Tecnologías utilizadas

- [ ] React
- [ ] Redux
- [ ] Bootstrap
- [ ] Javascript
- [ ] React-hook-form
- [ ] Auth0
- [ ] Express
- [ ] Sequelize - Postgres


