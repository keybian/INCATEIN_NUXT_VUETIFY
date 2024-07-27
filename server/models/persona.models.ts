import {Schema,model,SchemaTypes} from "mongoose"

const PersonaSchema = new Schema({
    nombre:String,
    apellido:String,
    cedula:String,
    nacionalidad:String,
    telefono:Number,
    direccion:String,
    iglesia:String,
    congregacion:String,
    usuario:String,
    password:String,
    status:String,
    rolID:SchemaTypes.ObjectId,
    rolname:String,
    extpais:String
},
{collection:'persona'})

export const Persona = model('Persona',PersonaSchema)