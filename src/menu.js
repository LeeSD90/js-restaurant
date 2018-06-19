const menu = () => {

    const main = document.getElementById('main');

    // Clear current content
    var container = document.getElementById('container');
    main.removeChild(container);

    // contact Page Content
    const content = document.createElement('div');
    content.setAttribute('class', 'container');
    content.id = "container";
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    const col = document.createElement('div');
    col.setAttribute('class', 'col-12');
    const p = document.createElement('p');
    p.innerHTML = "Menu."
    
    col.appendChild(p);
    row.appendChild(col);
    content.appendChild(row);

    main.appendChild(content);
    
};

export default menu;