import { CatalogoOption } from "~/server/models/catalogoOption.models";

export default defineEventHandler(async(event)=>{
    const id = getRouterParam(event,'id')
    const catalogoOption = await CatalogoOption.findByIdAndUpdate(id,{status:'0'})
    return {id}
})