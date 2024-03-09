
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => document.getElementById('demo-data').innerHTML = json.name);

