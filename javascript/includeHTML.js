function includeHTML(path, id)
{
    fetch(path)
        .then(x => x.text())
        .then(y => document.getElementById(id).innerHTML = y);
};