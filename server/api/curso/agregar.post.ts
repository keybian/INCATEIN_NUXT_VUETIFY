import { Persona } from "~/server/models/persona.models";

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    await Persona.create({
        nombre:body.nombre,
        apellido:body.apellido,
        cedula:body.cedula,
        nacionalidad:body.nacionalidad,
        telefono:body.telefono,
        direccion:body.direccion,
        iglesia:body.iglesia,
        congregacion:body.congregacion,
        usuario:body.usuario,
        password:body.password,
        status:body.status,
        rolID:body.rolID,
        rolname:body.rolname,
        extpais:body.extpais
    })

    return {body}
    
})