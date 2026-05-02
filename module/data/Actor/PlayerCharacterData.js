import { defaultAbilities } from "./shared/Abilities.js";
import { defaultPersona } from "./shared/Persona.js";
export const emptyPlayerCharacter = {
    race: "",
    background: "",
    class: "",
    level: 0,
    abilities: defaultAbilities,
    health: { max: 20, value: 20, min: 0 },
    mana: { max: 20, value: 20, min: 0 },
    speed: 10,
    defense: 10,
    armorRating: 0,
    armorPenalty: 0,
    persona: defaultPersona,
    relationships: new Map(),
    notes: "",
    gp: 0,
    sp: 0,
    cp: 0
};
