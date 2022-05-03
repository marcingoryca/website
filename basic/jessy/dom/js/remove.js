// Removing elements from the page!
const body = document.body;

const div = document.createElement('div');
const p = document.createElement('p');
const text = 'Removing elements from the page!';
p.append(text);
div.append(p);
body.appendChild(div);
p.remove();
