export const buttonElement = () => {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("btn", "btn-template");
    button.setAttribute("id", "btn-get-template")
    button.textContent = "Gerar meu Gatsby!";

    return button;
}
