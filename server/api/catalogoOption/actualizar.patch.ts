import { CatalogoOption } from "~/server/models/catalogoOption.models";

export default defineEventHandler(async(event)=>{

    const body = await readBody(event)
    await CatalogoOption.findByIdAndUpdate(body._id,{
        status:body.status,
        catalogoID:body.catalogoID,
        optionName:body.optionName,
        optionValueString:body.optionValueString,
        optionValueNumber:body.optionValueNumber,
        optionValueLogic:body.optionValueLogic
    })

    return {body}

})