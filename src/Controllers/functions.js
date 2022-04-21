import {
    templates
} from "../Data/templates.js";

import PreCode from "../Components/PreCode.js";

// *** Set globals vars
let CHECKED_TEMPLATE;

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
    CHECKED_TEMPLATE = templates[optTemp].langs;

    return CHECKED_TEMPLATE;
}

export function renderTemplate(root, templateChecked) {
    root.innerHTML = "";

    // const temp = templateChecked;

    for (const key in CHECKED_TEMPLATE) {
        let codeBlock = CHECKED_TEMPLATE[key].code;

        root.appendChild(PreCode(codeBlock));
    }
}

export function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

export function fadeOut(){
    setInterval(loader, 600);
}