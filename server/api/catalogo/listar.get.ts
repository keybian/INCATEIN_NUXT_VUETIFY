import {Catalogo} from "../../models/catalogo.models"

export default defineEventHandler(async(event)=>{
    const catalogos = await Catalogo.find({status:'1'})
    return {catalogos}
})


