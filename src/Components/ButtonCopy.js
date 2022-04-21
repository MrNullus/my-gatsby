const ButtonCopy = () => {
    const button = document.createElement("button");

    button.classList.add("codigo-wrraper__button-copy");
    button.contentEditable = "false";
    button.innerHTML = `<i class="fa fa-files-o" aria-hidden="true"></i> Copy`;

    return button;
}

export default ButtonCopy;