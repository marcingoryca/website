    const body = document.body;
    const appendText = 'With append method you can add html elements and text to the page!';
    const appendChildText = 'With appendChild method you can add html elements ONLY!';

    const sectionAppend = document.createElement('section');
    const sectionAppendChild = document.createElement('section');

    const h1 = document.createElement('h1');
    
    sectionAppend.append(appendText);
    h1.append(appendChildText);

    sectionAppendChild.appendChild(h1);

    body.append(sectionAppend);
    body.appendChild(sectionAppendChild);