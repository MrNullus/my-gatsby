import ButtonCopy from "./ButtonCopy.js";

const PreCode = (codeBlock) => {
    const div = document.createElement("div");
    const pre = document.createElement("pre");
    const code = document.createElement('code');
    const btnCopy = ButtonCopy()
    const textArea = code;

    div.setAttribute("id", "preview-code");
    div.classList.add("codigo-wrapper");

    code.classList.add("preview");
    code.contentEditable = "true";
    code.ariaLabel = "editor";

    code.textContent = `
    <!-- single block code -->
    ${codeBlock}
    <!-- /single block code -->
    `;

    div.appendChild(pre);
    pre.appendChild(code);
    div.appendChild(btnCopy);

    btnCopy.addEventListener('click', (e) => {
        e.preventDefault();

        navigator.clipboard.writeText(textArea.textContent);

        console.log(textArea.textContent);
        alert('Copiado!!!');
    });

    return div;
}

export default PreCode;