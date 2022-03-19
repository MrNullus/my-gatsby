import { handleOption, renderFormRoot } from "./Controllers/functions.js";
import { selectElement } from "./Components/Select.js";
import { optionsFinally } from "./Components/Options.js";
import { buttonElement } from "./Components/ButtonGenerate.js";

//***---- Get Elements and Data Initial
const formRoot = document.getElementById("form-root");
const select = selectElement();
const optionElements = optionsFinally;
const button = buttonElement();

renderFormRoot(formRoot, select, optionElements, button);

const preview = document.getElementById("root");
const selectTemplateEl = document.querySelector("#selectTemplate");
const btnTemplate = document.getElementById("btn-get-template");

let optionTemplate;

//***---- Events
//*** Event from render form root

btnTemplate.addEventListener("click", function() {
    var option = selectTemplateEl.value;

    handleOption(option, optionTemplate, preview);
});
