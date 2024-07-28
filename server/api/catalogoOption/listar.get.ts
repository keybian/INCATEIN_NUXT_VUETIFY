import {CatalogoOption} from "../../models/catalogoOption.models"

export default defineEventHandler(async(event)=>{
    const catalogosOption = await CatalogoOption.find({status:'1'})
    return {catalogosOption}
})


