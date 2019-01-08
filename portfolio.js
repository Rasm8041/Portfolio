function myMove() {
    var elem = document.getElementById("bil");
    var pos = -5;
    var id = setInterval(frame, 4);

    function frame() {
        if (pos == 1460) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
