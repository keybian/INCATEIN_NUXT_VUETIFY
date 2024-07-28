import { Collection, Schema, model } from "mongoose";

const CatalogoOptionSchema = new Schema({
    catalogoID:String,
    optionName:String,
    optionValueString:String,
    optionValueNumber:Number,
    optionValueLogic:Boolean,
    status:String
},
{collection:'catalogooption'})

export const CatalogoOption = model('CatalogoOption',CatalogoOptionSchema)