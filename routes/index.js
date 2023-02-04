import express from "express"; // Esta es la versión nueva, con modulos de JS // Pero en package.json debo decir que el proyecto es type module
import { pageInicio, pageNosotros, pageTestimonios, pageViajes, pageViajeDetails } from "../controllers/paginasController.js";
import { saveTestimonial } from "../controllers/testimonialsController.js";

const router = express.Router(); // No podemos volver a instanciar Express, es único. Pero si podmeos instanciar su router para digamos hacer una referencia al mismo



// Recuerda que express soporta GET, POST, PUT, PATCH y DELETE --> Request es lo que yo envio como peticion, response es la respuesta de express. Con el get con una ruta, definimos una ruta de url
router.get("/", pageInicio);


router.get("/nosotros", pageNosotros);


router.get("/testimonios", pageTestimonios);

// POST para mandar testimonials a la BBDD
router.post("/testimonios", saveTestimonial);


router.get("/viajes", pageViajes);


router.get("/viajes/:viajeSlug", pageViajeDetails); //Así se hace un comodín para poder acceder a distintas páginas en base a un valor de forma dinámica



export default router;