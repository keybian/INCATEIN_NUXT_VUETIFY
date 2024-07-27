import {Schema,model} from "mongoose";

const CursoSchema = new Schema ({
    cursoName:String,
    descripcion:String,
    status:String
},
{collection:'curso'})

export const Curso = model('Curso',CursoSchema) 