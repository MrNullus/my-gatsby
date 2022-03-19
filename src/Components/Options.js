import { options } from "../Data/options.js";

export const optionsFinally = options.map((option) => {
    return `
        <!-- single option template -->
        <option 
            value="${option.value}"         
            class="template__name">
            ${option.content}
        </option>
        <!-- /single option template -->
    `;
}).join(" ");
