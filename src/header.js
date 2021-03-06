const loadHeader = () => {
    const main = document.getElementById('main');
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.setAttribute('class', 'navbar navbar-expand-sm bg-black justify-content-center');
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'navbar-nav');
    
    [1,2,3].forEach(function(i) {
        const li = document.createElement('li');
        li.setAttribute('class', 'nav-item');
        const a = document.createElement('a');
        a.setAttribute('class', 'nav-link');
        a.setAttribute('href', '#');
        switch(i){
            case 1:
                a.setAttribute('id', 'home');
                a.innerHTML = 'Home';
                break;
            case 2:
                a.setAttribute('id', 'menu');
                a.innerHTML = 'Menu';
                break;
            case 3:
                a.setAttribute('id', 'contact');
                a.innerHTML = 'Contact';
                break;
            default:
                break;
        }
        li.appendChild(a);
        ul.appendChild(li);
    })
    
    nav.appendChild(ul);
    header.appendChild(nav);
    main.appendChild(header);
};

export default loadHeader;
