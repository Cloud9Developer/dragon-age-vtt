import { registerSettings } from "./module/settings.js";
import { preloadTemplates } from "./module/preloadTemplates.js";
import { PlayerCharacterSheet } from "./module/sheets/PlayerCharacterSheet.js";
import { FocusSheet } from "./module/sheets/FocusSheet.js";
import { WeaponSheet } from "./module/sheets/WeaponSheet.js";
import { focusType, weaponType, armorType, shieldType, physicalItemType, talentType, arcanaType, } from "./module/data/Item/ItemTypes.js";
import { ArmorSheet } from "./module/sheets/ArmorSheet.js";
import { ShieldSheet } from "./module/sheets/ShieldSheet.js";
import { PhysicalItemSheet } from "./module/sheets/PhysicalItemSheet.js";
import { TalentSheet } from "./module/sheets/TalentSheet.js";
import { ArcanaSheet } from "./module/sheets/ArcanaSheet.js";
/* ------------------------------------ */
/* Initialize system					*/
/* ------------------------------------ */
Hooks.once("init", async function () {
    console.log("dragon-age | Initializing dragon-age");
    // Assign custom classes and constants here
    // Register custom system settings
    registerSettings();
    // Preload Handlebars templates
    await preloadTemplates();
    // Register custom sheets
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("dragon-age", PlayerCharacterSheet, {
        makeDefault: true,
    });
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("dragon-age", FocusSheet, { types: [focusType], makeDefault: true });
    Items.registerSheet("dragon-age", WeaponSheet, { types: [weaponType], makeDefault: true });
    Items.registerSheet("dragon-age", ArmorSheet, { types: [armorType], makeDefault: true });
    Items.registerSheet("dragon-age", ShieldSheet, { types: [shieldType], makeDefault: true });
    Items.registerSheet("dragon-age", PhysicalItemSheet, { types: [physicalItemType], makeDefault: true });
    Items.registerSheet("dragon-age", TalentSheet, { types: [talentType], makeDefault: true });
    Items.registerSheet("dragon-age", ArcanaSheet, { types: [arcanaType], makeDefault: true });
});
/* ------------------------------------ */
/* Setup system							*/
/* ------------------------------------ */
Hooks.once("setup", function () {
    // Do anything after initialization but before
    // ready
});
/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once("ready", function () {
    // Do anything once the system is ready
});
// Add any additional hooks if necessary
