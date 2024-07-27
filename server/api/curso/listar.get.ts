import {Curso} from "../../models/curso.models"

export default defineEventHandler(async(event)=>{
    const cursos = await Curso.find({status:'1'})
    return {cursos}
})


