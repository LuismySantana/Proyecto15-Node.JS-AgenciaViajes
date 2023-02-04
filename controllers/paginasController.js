import { Testimonio } from "../models/Testimonio.js";
import { Viaje } from "../models/Viaje.js";

const pageInicio = async (req, res) => {    
    try {

        // Si los valores de una dependienran de los resultados de la otra, se deberian ejecutar de forma lineal. pero son independientes asi que ejecutamos todas a la vez
        const [ viajesIndex, testimoniosIndex ] = await Promise.all([
            Viaje.findAll({
                limit: 3
            }),
            Testimonio.findAll({
                limit: 3
            })
        ]);

        res.render("inicio", { 
            page: "Inicio",
            clase: "home",
            viajesIndex,
            testimoniosIndex
        });
        
    } catch (error) {
        console.log(error);
    }
};


const pageNosotros = (req, res) => {
    res.render("nosotros", {
        page: "Nosotros"
    });    
};


const pageTestimonios = async (req, res) => {
    try {
        const testimoniosList = await Testimonio.findAll();

        res.render("testimonios", {
            page: "Testimonios",
            testimoniosList
        });  
        
    } catch (error) {
        console.log(error);
    }  
};


const pageViajes = async (req, res) => {
    try {
        const listaViajes = await Viaje.findAll();
        
        res.render("viajes", {
            page: "Viajes",
            listaViajes
        });   
        
    } catch (error) {
        console.log(error);
    } 
};


const pageViajeDetails =  async (req, res) => {
    try {
        const {viajeSlug} = req.params;

        const viajeData = await Viaje.findOne({
            where: {
                slug: viajeSlug 
            }
        });

        if(viajeData) {
            res.render("viajeInfo", {
                page: "Información de viaje",
                viajeData
            });

        } else {
            res.redirect("/viajes");
        }
        
    } catch (error) {
        console.log();
    }
};




//Una forma de exportar múltiples cosas a la vez
export {
    pageInicio,
    pageNosotros,
    pageTestimonios,
    pageViajes,
    pageViajeDetails
}