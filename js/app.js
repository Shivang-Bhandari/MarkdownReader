var marked = require('marked');

var md = document.getElementById('textarea1');

var output = document.getElementById('output')
md.onkeyup(function(){
    var parsed = marked(md.value);
    console.log(parsed);
});



