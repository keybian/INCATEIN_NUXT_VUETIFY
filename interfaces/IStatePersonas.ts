import type { IPersona } from "./IPersona";

export interface IStatePersona{
    personas:IPersona[],
    personaActual:IPersona|null
}