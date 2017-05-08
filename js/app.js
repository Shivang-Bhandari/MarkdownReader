    var md = document.getElementById('input');
    var output = document.getElementById('markdown');
    md.onkeyup = function(){
        var parsed = marked(md.value);
        output.innerHTML="";
    output.innerHTML = parsed;
};
