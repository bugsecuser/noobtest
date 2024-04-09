let input = document.getElementById("text-area");
let transliterationLanguage = document.querySelector(
    'meta[name="transliteration_lang"]'
).content;

/**
 * Transliteration
 */
enableTransliteration(input, transliterationLanguage);

/**
 * Copies content from text-area to clipboard
 * @param {HTMLAreaElement} id - The text-area
 */

function copy_to_clipboard(id) {
    document.getElementById(id).select();
    document.execCommand("copy");

    //for changing the text inside 'copy text' button
    const buttonElement = document.getElementById("copy-button");
    buttonElement.value = "COPIED !";

    setTimeout(changeButtonValue, 1800);

    function changeButtonValue() {
        if ((buttonElement.value = "COPIED !")) {
            buttonElement.value = "COPY TEXT";
        }
    }
}

/**
 * save content of text-area into localStorage
 */
var text_area = document.querySelector("#text-area");
if (window.localStorage["TextEditorData"]) {
    text_area.value = window.localStorage["TextEditorData"];
}
text_area.addEventListener("keyup", function () {
    window.localStorage["TextEditorData"] = text_area.value;
});

/**
 * Hiding suggestion box while clicking outside the box
 */
window.addEventListener("click", (e) => {
    if (e.target.getAttribute("id") === "text-area") {
        document.querySelector(".ks-input-suggestions").classList.add("hidden");
    }
});