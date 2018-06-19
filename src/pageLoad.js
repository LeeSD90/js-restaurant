const loadPage = () => {
    const main = document.getElementById('main');
    
    
    

    // Header
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.setAttribute('class', 'navbar navbar-expand-sm bg-black justify-content-center');
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'navbar-nav');

    [1,2,3].forEach(function(i) {
        const li = document.createElement('li');
        li.setAttribute('class', 'nav-item');
        ul.appendChild(li);
    })

    ul.childNodes.forEach(function(e, i) {
        const a = document.createElement('a');
        a.setAttribute('class', 'nav-link');
        a.setAttribute('href', '#');
        console.log(i);
        switch(i){
            case 0:
                a.innerHTML = '1';
                break;
            case 1:
                a.innerHTML = '2';
                break;
            case 2:
                a.innerHTML = '3';
                break;
            default:
                break;
        }
        e.appendChild(a);
    })

    nav.appendChild(ul);
    header.appendChild(nav)

    // Banner
    const banner = document.createElement('div');
    banner.setAttribute('id', 'banner');

    const bannerText = document.createElement('h1');
    bannerText.innerHTML = "A Lovely Restaurant";

    banner.appendChild(bannerText);

    // Content
    const content = document.createElement('div');
    content.setAttribute('class', 'container');
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    const col = document.createElement('div');
    col.setAttribute('class', 'col-12');
    const p = document.createElement('p');
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a sodales justo. In malesuada orci et eros interdum venenatis. Cras fermentum mollis metus, ut bibendum turpis sodales ac. Donec egestas neque libero, porttitor fermentum nulla pharetra non. Maecenas metus urna, malesuada viverra nisl non, posuere ultricies arcu. Phasellus euismod aliquet leo, at accumsan leo congue at. Donec in orci a velit porta lacinia vel ac lacus. Nam bibendum sed est non tristique."
    
    col.appendChild(p);
    row.appendChild(col);
    content.appendChild(row);

    // Main
    main.appendChild(header);
    main.appendChild(banner);
    main.appendChild(content);
};

export default loadPage;