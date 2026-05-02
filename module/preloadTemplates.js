export const preloadTemplates = async function () {
    const templatePaths = [
    // Add paths to "systems/dragon-age/templates"
    ];
    Handlebars.registerHelper("checked", (v) => (v ? " checked" : ""));
    return loadTemplates(templatePaths);
};
