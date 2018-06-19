const home = () => {

    var main = document.getElementById('main');
    

    // Clear current content
    var container = document.getElementById('container');
    while (container) { main.removeChild(container); container = document.getElementById('container'); }

    // Home Page Content
    const content = document.createElement('div');
    content.setAttribute('class', 'container');
    content.id = "container";
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    const col = document.createElement('div');
    col.setAttribute('class', 'col-12');
    const p = document.createElement('p');
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a sodales justo. In malesuada orci et eros interdum venenatis. Cras fermentum mollis metus, ut bibendum turpis sodales ac. Donec egestas neque libero, porttitor fermentum nulla pharetra non. Maecenas metus urna, malesuada viverra nisl non, posuere ultricies arcu. Phasellus euismod aliquet leo, at accumsan leo congue at. Donec in orci a velit porta lacinia vel ac lacus. Nam bibendum sed est non tristique."
    
    col.appendChild(p);
    row.appendChild(col);
    content.appendChild(row);

    main.appendChild(content);
    
};

export default home;