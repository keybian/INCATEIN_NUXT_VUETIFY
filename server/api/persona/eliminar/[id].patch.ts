import { Persona } from "~/server/models/persona.models";

export default defineEventHandler(async(event)=>{
    const id = getRouterParam(event,'id')
    const persona = await Persona.findByIdAndUpdate(id,{status:'0'})
    return {id}
})