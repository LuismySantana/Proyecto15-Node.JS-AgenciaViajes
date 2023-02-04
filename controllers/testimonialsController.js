import { Testimonio } from "../models/Testimonio.js";

const saveTestimonial = async (req, res, next) => {
    let { nameInput, emailInput, messageInput} = req.body;
    nameInput = nameInput.trim();
    emailInput = emailInput.trim();
    messageInput = messageInput.trim();

    if (!areValuesValid(nameInput, emailInput, messageInput) ) {
        const testimoniosList = await Testimonio.findAll();

        res.render("testimonios", {
            page: "Testimonios",
            error: "Todos los campos son obligatorios",
            values: {
                name: nameInput,
                email: emailInput,
                message: messageInput
            },
            testimoniosList
        });  
        
    } else {
        // Sale todo bien así que escribimos datos
        try {
            await Testimonio.create({
                nombre: nameInput,
                email: emailInput,
                mensaje: messageInput
            });
            
            res.redirect("/testimonios")
        } catch (error) {
            console.log(error);
        }
    }
};


const areValuesValid = (name, email, message) =>{
    return name && email && message;
}




export {
    saveTestimonial
}