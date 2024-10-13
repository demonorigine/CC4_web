async function generateShortLink() {
    const longUrl = document.getElementById("longUrl").value;
    const apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(longUrl);
    console.log(apiUrl);
    try {
        const response = await fetch(apiUrl);
        const shortUrl = await response.text();
        if(shortUrl){
            document.getElementById("shortUrl").innerText= shortUrl;
        }else{
            throw new Error("Erreur");
        }
    }catch (error) {
        console.error("Erreur", error);
        document.getElementById("shortUrl").innerText = "Impossible";
    }
}

function copyShortUrl(){
    const shortUrlElement = document.getElementById("shortUrl");
    const range = document.createRange();
    range.selectNode(shortUrlElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    const copyButton = document.getElementById("copy");
    const copyText = document.getElementById("copiedText");
    copyText.textContent = "Copied !";
    copyButton.insertAdjacentElement("afterend", copyText);;
}