import { handleOption } from "./functions.js";

//***---- Get Elements and Data Initial
const preview = document.getElementById("root");
const selectTemplateEl = document.querySelector("#selectTemplate");
const btnTemplate = document.querySelector(".btn-template");

let optionTemplate;

//***---- 
btnTemplate.addEventListener("click", function() {
    var option = selectTemplateEl.value;

    handleOption(option, optionTemplate, preview);
});


const options = [
    {
        value: "html5",
        content: "HTML5"
    },
    {
        value: "html5",
        content: "HTML5"
    }
]

const optionFinaly = options.map((option) => {
    return `
        <div>
            ${option.value}
            ${option.content}
        </div>
    `;
});


console.log(optionFinaly);