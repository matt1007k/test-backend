--CREATE DATABASE test_backend;

SET TIME ZONE 'America/Lima';

--SHOW TIMEZONE;

--SELECT NOW();

CREATE TABLE
    clientes(
        id TEXT NOT NULL,
        created TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated TIMESTAMP(3) NOT NULL,
        status INT DEFAULT 0,
        fname VARCHAR(150) NOT NULL,
        lname VARCHAR(250) NOT NULL,
        address VARCHAR(250) NOT NULL,
        birthdate DATE NOT NULL,
        CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
    );


-- Registrar un cliente
CREATE
OR REPLACE PROCEDURE proc_registrar_cliente(
    f_id text,
    f_fname varchar(150),
    f_lname varchar(250),
    f_address varchar(250),
    f_status int,
    f_birthdate date
) LANGUAGE plpgsql AS $$ 
	BEGIN
	INSERT INTO
	    clientes (
	        id,
	        fname,
	        lname,
	        address,
	        status,
	        birthdate,
	        updated
	    )
	VALUES (
	        f_id,
	        f_fname,
	        f_lname,
	        f_address,
	        f_status,
	        f_birthdate,
	        NOW()
	    );

END $$ ;

-- Obtener todos los clientes
CREATE OR REPLACE FUNCTION func_obtener_clientes() 
RETURNS SETOF clientes 
LANGUAGE SQL AS 
$$ 
SELECT * FROM clientes; 
$$ ; 


-- Obtener un cliente
CREATE OR REPLACE FUNCTION func_obtener_un_cliente(f_id text) 
RETURNS SETOF clientes 
LANGUAGE SQL AS 
$$ 
SELECT * FROM clientes WHERE id=f_id; 
$$ ; 

-- Actualizar un cliente
CREATE OR REPLACE PROCEDURE proc_actualizar_un_cliente(
	f_id TEXT,
    f_fname VARCHAR(150),
    f_lname VARCHAR(250),
    f_address VARCHAR(250),
    f_status INT,
    f_birthdate DATE
)
LANGUAGE plpgsql AS $$ 
BEGIN 
	UPDATE clientes 
	SET fname=f_fname, 
		lname=f_lname, 
		address=f_address, 
		status=f_status,
		birthdate=f_birthdate,
		updated=NOW()
	WHERE id=f_id;
END;
$$;
