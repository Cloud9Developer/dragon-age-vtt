import { arcanaType } from "./ItemTypes.js";
import { ActionType } from "../shared/ActionType.js";
export const emptyArcana = {
    type: arcanaType,
    description: "",
    targetnumber: "",
	time: ActionType.varies,
	defaultAbility: "Magic",
	focus: "",
    manacost: "",
    school: "",
    resistance: { ability: "", focus: "" },
};
