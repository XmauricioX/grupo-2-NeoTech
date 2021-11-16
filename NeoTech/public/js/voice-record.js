function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let
        $btnVoiceRecord = qs('#btn__voice__record'),
        $textSearch = qs('#text__search')

    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "es-AR";



    recognition.onresult = (event) => {
        const results = event.results;
        const word = results[results.length - 1][0].transcript
        $textSearch.value += word
    }

    $btnVoiceRecord.addEventListener('mousedown', () => {
        recognition.start()
    })

    $btnVoiceRecord.addEventListener('mouseup', () => {
        recognition.stop()
    })


})