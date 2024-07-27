import { Curso } from "~/server/models/curso.models";

export default defineEventHandler(async(event)=>{
    const id = getRouterParam(event,'id')
    const curso = await Curso.findByIdAndUpdate(id,{status:'0'})
    return {id}
})