import { Catalogo } from "~/server/models/catalogo.models";

export default defineEventHandler(async(event)=>{
    const id = getRouterParam(event,'id')
    const catalogo = await Catalogo.findByIdAndUpdate(id,{status:'0'})
    return {id}
})