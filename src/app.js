//***---- Import Dependencies
import SelectElement from "./Components/Select.js";
import OptionsFinally from "./Components/Options.js";
import ButtonGenerate  from './Components/ButtonGenerate.js';

import { fadeOut, handleOption, renderFormRoot } from "./Controllers/functions.js";


//***---- Get Elements and Data Initial
const formRoot = document.getElementById("form-root");
const select = SelectElement();
const optionElements = OptionsFinally;
const button = ButtonGenerate()


//***---- Initialize loader
window.onload = fadeOut();


//***---- Event for render form root
renderFormRoot(formRoot, select, optionElements, button)


//***---- Set vars
const preview = document.getElementById("root");
const selectTemplateEl = document.querySelector("#selectTemplate");
const btnTemplate = document.getElementById("btn-get-template");

let optionTemplate;


//***---- Event for button generate gatsby
btnTemplate.addEventListener("click", function() {
    var option = selectTemplateEl.value;

    handleOption(option, optionTemplate, preview);
});
