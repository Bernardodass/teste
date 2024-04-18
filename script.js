function substituir() {
    var inputText = document.getElementById("inputText").value;
    var resultado = "";

    for (var i = 0; i < inputText.length; i++) {
        var char = inputText[i];
        if (char.toLowerCase() === "a") {
            resultado += "t";
        } else {
            resultado += char;
        }
    }

    document.getElementById("resultado").innerText = resultado;
}
