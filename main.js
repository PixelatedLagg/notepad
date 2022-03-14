var autocorrect = false;
var lineIndicator = document.getElementById("line");
var area = document.getElementById("area");

function LineChange()
{
    var lines = area.value.substr(0, area.selectionStart).split("\n");
    lineIndicator.innerHTML = `(${lines.length}, ${lines[lines.length - 1].length})`;
}

function Autocorrect()
{
    if (autocorrect)
    {
        area.setAttribute("spellcheck", "false");
        autocorrect = false;
    }
    else
    {
        area.setAttribute("spellcheck", "true");
        autocorrect = true;
    }
}

function Clear()
{
    let clear = window.confirm('Are you sure you want to clear the notepad?');
    if (clear)
    {
        area.value = "";
    }
}

function Save()
{
    var blob = new Blob([area.value], { type: "text/plain;charset=utf-8" });
    let name = prompt('Name of the file:', "");
    if (name != "" && name !== null)
    {
        saveAs(blob, `${name}.txt`);
    }
}