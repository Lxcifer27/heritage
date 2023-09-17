function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: "en"
    },"google_translate_element")
}
$(document).ready((function() {
    $(".translate-page").on("click", (function() {
        $("#google_translate_element").toggleClass(" show-translation")
    }
    ))
}
))