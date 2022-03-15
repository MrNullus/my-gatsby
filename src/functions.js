import { templates } from "./templates.js";

import { preCodeHTML } from "./Components/PreCodeHTML.js";
import { preCodeCSS } from "./Components/PreCodeCSS.js";
import { preCodeJS } from "./Components/PreCodeJS.js";


export function checkWhichTemplate(optTemp) {
    let checkedTemplate;

    switch (optTemp) {
        case "default":
            console.log("Tem que ter um GatsBy para default meu xará - será codigos aleatoriios");
            break;

        case "html5":
            // console.log("Template HTML5 foda");
            checkedTemplate = templates.html5;
            break;

        case "header":
            // console.log("Template header");
            checkedTemplate = {
                html: templates.header.html,
                css: templates.header.css
            };
            break;

        case "social_menu_layers":
            // console.log("Template menuzinho");
            checkedTemplate = templates.social_menu_layers;
            break;

        case "loading_effect":
            checkedTemplate = templates.loading_effect;
            break;

        default:
            console.log("não tem templates");
            break;

    }

    return checkedTemplate;
}

export function handleOption(opt, optTemp, root) {
    optTemp = opt;

    let checkedTemp = checkWhichTemplate(optTemp);

    renderTemplate(root, checkedTemp);
}

export function renderTemplate(root, templateChecked) {
    root.innerHTML = "";
    const temp = templateChecked;

    root.appendChild(preCodeHTML(temp));
    root.appendChild(preCodeCSS(temp));
    root.appendChild(preCodeJS(temp));

}
