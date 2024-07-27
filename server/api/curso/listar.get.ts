import {Persona} from "../../models/persona.models"

export default defineEventHandler(async(event)=>{
    const personas = await Persona.find({status:'1'})
    return {personas}
})


