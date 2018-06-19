const home = () => {

    const main = document.getElementById('main');
    
    // Modify nav links
    // Remove old active class
    var old = document.getElementsByClassName('active');
    while(old != undefined && old.length > 0) { old[0].classList.remove('active'); old = document.getElementsByClassName('active'); }
    // Add class to current tab
    var home = document.getElementById('home');
    home.classList.add("active");

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