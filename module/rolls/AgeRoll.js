import { focusType, weaponType, arcanaType } from "../data/Item/ItemTypes.js";
let AgeRoll = /** @class */ (() => {
    class AgeRoll extends Roll {
        constructor(roller, data, damage) {
            let ability;
            let focus;
            if (typeof data == "string") {
                ability = data;
                focus = null;
            }
            else {
                switch (data.data.type) {
                    case weaponType:
                        var wd = data.data.data;
                        ability = wd.defaultAbility;
                        focus = wd.focus;
                        break;
                    case focusType:
                        var fd = data.data.data;
                        ability = fd.defaultAbility;
                        focus = data.name;
                        break;
                    case arcanaType:
                        var ad = data.data.data;
                        ability = ad.ability;
                        focus = ad.origin;
                        break;
                }
            }
            const focusBonus = AgeRoll.getFocusBonus(roller.items, focus);
            const abilityBonus = roller.data.data.abilities[ability];
            super(`3d6 + ${focusBonus} + ${abilityBonus}`);
            this.focusBonus = focusBonus;
            this.abilityBonus = abilityBonus;
            this.name = `${ability}${focus != undefined ? ` (${focus})` : ""}`;
            this.damage = damage;
        }
        static getFocusBonus(items, focus) {
            var focusItem = items.find((i) => i.type == focusType && i.name == focus);
            if (focusItem != undefined) {
                return focusItem.data.data.improved ? 3 : 2;
            }
            else {
                return 0;
            }
        }
        async render(chatOptions = {}) {
            chatOptions = mergeObject({
                user: game.user._id,
                flavor: null,
                template: "systems/dragon-age/templates/chat/ageRoll.hbs",
            }, chatOptions || {});
            if (!this._rolled) {
                this.roll();
            }
            var rolls = this.dice[0].results.map((r) => r.result);
            var match = new Set(rolls).size !== 3;
            var damageResult = this.damage
                ? await new Roll(this.damage, { flavor: "Damage:" }).render()
                : undefined;
            const chatData = {
                user: chatOptions.user,
                rolls: rolls.reduce((p, c, i) => (Object.assign(Object.assign({}, p), { [`d${i}`]: c })), new Map()),
                name: this.name,
                focusBonus: AgeRoll.toModString(this.focusBonus),
                abilityBonus: AgeRoll.toModString(this.abilityBonus),
                total: this.total,
                stuntPoints: match ? rolls[2] : 0,
                damageResult
            };
            return renderTemplate(chatOptions.template, chatData);
        }
        async toMessage(chatData) {
            chatData.content = await this.render({ user: chatData.user });
            return ChatMessage.create(chatData);
        }
    }
    AgeRoll.toModString = (value) => value == 0 ? "" : value > 0 ? `+ ${value}` : `- ${Math.abs(value)}`;
    return AgeRoll;
})();
export { AgeRoll };
