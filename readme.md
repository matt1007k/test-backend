# Test Backend

Servidor Api con node js, express js y Postgresql (store procedure, functions).

## Clonar o Descargar el repositorio

```bash
$ git clone https://github.com/matt1007k/test-backend.git
$ npm install & cd test-backend
```

## Configurar crear y configurar la base de datos
- Crear la base de datos en Postgresql
- Importar y ejecutar el archivo **base_datos.sql**
- Crear el archivo **.env** y copiar todo el contenido del archivo **.env.example** o usar en el terminal ```cp .env.example .env ```
- Ingresar los datos de conexión de la base de datos en Postgresql

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=postgres_db
DATABASE_USER=postgres_user
DATABASE_PASSWORD=postgres_password
```

## Correr el servidor API

```bash
$ npm run dev
```

