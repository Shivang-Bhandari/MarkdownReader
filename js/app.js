    var md = document.getElementById('input');
    var output = document.getElementById('markdown');
    md.onkeyup = function() {
      var parsed = marked(md.value);
      output.innerHTML = "";
      output.innerHTML = parsed;
    };

    function download(filename, type) {
    var md = document.getElementById('input').value;
    var file = new Blob([md], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
