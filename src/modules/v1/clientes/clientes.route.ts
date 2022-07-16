import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import ClientesController from "./clientes.controller";

const clientesRouter = Router();
const clienteController = new ClientesController();

clientesRouter.get("/", clienteController.listar);

clientesRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.string().required().uuid(),
    }),
  }),
  clienteController.detalle
);

clientesRouter.post(
  "/registro",
  celebrate({
    [Segments.BODY]: Joi.object({
      fname: Joi.string().required(),
      lname: Joi.string().required(),
      address: Joi.string().required(),
      birthdate: Joi.string()
        .required()
        .regex(
          /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
          "the format valid is YYYY-MM-DD"
        ),
      status: Joi.number().required().default(1),
    }),
  }),
  clienteController.registro
);

clientesRouter.post(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.string().required().uuid(),
    }),
    [Segments.BODY]: Joi.object({
      fname: Joi.string().required(),
      lname: Joi.string().required(),
      address: Joi.string().required(),
      birthdate: Joi.string()
        .required()
        .regex(
          /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
          "the format valid is YYYY-MM-DD"
        ),
      status: Joi.number().required().default(1),
    }),
  }),
  clienteController.actualizar
);
export default clientesRouter;
