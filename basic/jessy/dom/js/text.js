// innerText
// textContent
const text = 'Welcome Home!';
const textLong = ' This is another welcome home text!  ;)';

const div1 = document.createElement('div');
const div2 = document.createElement('div2');

div1.innerText = text;
div2.textContent = textLong;

document.body.append(div1);
document.body.append(div2);