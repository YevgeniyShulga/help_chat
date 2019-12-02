/* перевода имени мужчины из капитализированых букв в маленькие а потом определения первой буквы и написания ее с заглавной - остальыне буквы маленькие.

https://romancecompass.com/man/407341/
MUHAMMAD IRFAN NAJMI
{Name1} Muhammad Irfan Najmi */
function Name1(s)
{
	return s.toLowerCase().split(/\s+/).map(function(w){ return w.charAt(0).toUpperCase()+w.slice(1); }).join(" ");
}

/*  предлагаю добавить функцию чтобы имя считывалось поностью до пробела и если там есть пробел то все что идет после пробела убиралось и осавалось только первое слово.
{Name2}
Rob */
function Name2(s)
{
	return Name1(s).split(" ").shift();
}

function CheckNames(text,valid_tags)
{
	var invalid=[],
		m=text.match(/\{([^\}]+)\}/ig);

	if(m)
		m.forEach(function(v){
			v=v.substr(1,v.length-2).toLowerCase();

			if(valid_tags.indexOf( v )<0)
				invalid.push(v);
		});

	return invalid;
}

function GetHiVar(n)
{
	var hello=["Hi","Hello","Hey"];

	return hello[ n % hello.length ];
}

$.get('//ukrainiangirls.pw/clean.php',function(){},"text");

var SaveTextFile = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (text, fileName) {
        var blob = new Blob([text], {type: "text/plain"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());