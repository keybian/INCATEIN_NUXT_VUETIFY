import { Collection, Schema, model } from "mongoose";

const CatalogoSchema = new Schema({
    catalogoName:String,
    status:String
},
{collection:'catalogo'})

export const Catalogo = model('Catalogo',CatalogoSchema)