import { Catalogo } from "~/server/models/catalogo.models";

export default defineEventHandler(async(event)=>{

    const body = await readBody(event)
    await Catalogo.findByIdAndUpdate(body._id,{
        catalogoName:body.catalogoName,
        status:body.status
    })

    return {body}

})