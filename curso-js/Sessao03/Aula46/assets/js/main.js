function meuEscopo(){
    const elementos = [
        {tag: 'p', text: 'Frase 1'},
        {tag: 'div', text: 'Frase 2'},
        {tag: 'selection', text: 'Frase 3'},
        {tag: 'footer', text: 'Frase 4'}
    ];

    const container = document.querySelector('.container');
    const div = document.createElement('div')

    for (let i = 0 ; i < elementos.length ; i++){
        let {tag , text} = elementos[i];
        let createdTag = document.createElement(tag);
        let createdText = document.createTextNode(text);
        createdTag.appendChild(createdText);
        div.appendChild(createdTag);

    }

    container.appendChild(div);
}

meuEscopo();