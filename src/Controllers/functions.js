import { templates } from "../Data/templates.js";

import { preCodeHTML } from "../Components/PreCodeHTML.js";
import { preCodeCSS } from "../Components/PreCodeCSS.js";
import { preCodeJS } from "../Components/PreCodeJS.js";


export function renderFormRoot(form, select, options, button) {
    form.appendChild(select);
    select.innerHTML = options;
    form.appendChild(button);
}

export function handleOption(opt, optTemp, root) {
    optTemp = opt;

    let checkedTemp = checkWhichTemplate(optTemp);

    renderTemplate(root, checkedTemp);
}

export function checkWhichTemplate(optTemp) {
    let checkedTemplate;

    // let optTempFinally = [optTemp];

    // if ("php" in optTemp) {
    //     checkedTemplate = {
    //         html: templates.header.html,
    //         css: templates.header.css,
    //         php: templates.header.php
    //     };
    // } else {
    //     checkedTemplate = {
    //         html: templates.header.html,
    //         css: templates.header.css,
    //         php: templates.header.php
    //     };
    // }
    // return checkedTemplate;

//     switch (optTemp) {
//         case "default":
//             console.log("Tem que ter um GatsBy para default meu xará - será codigos aleatoriios");
//             break;

//         case "html5":
//             // console.log("Template HTML5 foda");
//             checkedTemplate = {
//                 html: templates.header.html,
//                 css: templates.header.css
//             };
//             break;

//         case "header":
//             // console.log("Template header");
//             checkedTemplate = {
//                 html: templates.header.html,
//                 css: templates.header.css
//             };
//             break;

//         case "social_menu_layers":
//             // console.log("Template menuzinho");
//             checkedTemplate = {
//                 html: templates.header.html,
//                 css: templates.header.css
//             };
//             break;

//         case "loading_effect":
//             checkedTemplate = {
//                 html: templates.header.html,
//                 css: templates.header.css
//             };
//             break;

//         default:
//             checkedTemplate = {
//                 html: templates.header.html,
//                 css: templates.header.css
//             };
//             break;

//     }

//     return checkedTemplate;
}

export function renderTemplate(root, templateChecked) {
    root.innerHTML = "";
    const temp = templateChecked;

    root.appendChild(preCodeHTML(temp));
    root.appendChild(preCodeCSS(temp));
    root.appendChild(preCodeJS(temp));

}
