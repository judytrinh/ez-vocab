var input = document.getElementById("search-input");
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        window.open(`https://www.google.com/search?tbm=isch&q=${input.value}`);
        window.open(`https://en.dict.naver.com/#/search?query=${input.value}`);
        window.open(`https://forvo.com/word/${input.value}/#ko`);
    }
});