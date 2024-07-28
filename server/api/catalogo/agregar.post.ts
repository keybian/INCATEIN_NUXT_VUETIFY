import { Catalogo } from "~/server/models/catalogo.models";

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    await Catalogo.create({
        catalogoName:body.catalogoName,
        status:body.status
    })

    return {body}
    
})