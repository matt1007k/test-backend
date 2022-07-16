-- Active: 1647393675138@@127.0.0.1@5432@test_backend@public

CREATE DATABASE test;

-- use database test_backend
set search_path = "\c test";

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



CREATE
OR REPLACE CEDURE proc_registrar_cliente(
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

CREATE OR REPLACE FUNCTION func_obtener_clientes() 
RETURNS SETOF clientes 
LANGUAGE SQL AS 
$$ 
SELECT * FROM clientes; 
$$ ; 

--SELECT func_obtener_clientes();