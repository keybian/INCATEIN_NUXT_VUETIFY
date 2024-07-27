import { Curso } from "~/server/models/curso.models";

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    await Curso.create({
        cursoName:body.cursoName,
        descripcion:body.descripcion,
        status:body.status
    })

    return {body}
    
})