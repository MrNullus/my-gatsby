export const preCodeHTML = (temp) => {
    const div = document.createElement("div");
    const pre = document.createElement("pre");
    const code = document.createElement("code");

    div.setAttribute("id", "preview-code__html");
    div.classList.add("codigo-wrapper");
    div.style.background = "gray";
    div.style.color = "white";

    pre.style.background = "gray";

    code.classList.add("preview");
    code.contentEditable = "true";
    code.ariaLabel = "editor";


    code.textContent = `
            <!-- code HTML -->
            ${temp.html}
        `;

    div.appendChild(pre);
    pre.appendChild(code);

    // console.log(div);
    return div;
}