import { options } from "../Data/options.js";

const OptionsFinally = options.map((option, index) => {
    return `
        <!-- single option template -->
        <option 
            value="${option.value}"         
            id="${index}"
            name="${option.value}"
            class="template__name">
            ${option.content}
        </option>
        <!-- /single option template -->
    `;
    
}).join(' ');

export default OptionsFinally;
