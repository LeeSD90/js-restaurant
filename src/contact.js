const contact = () => {

    const main = document.getElementById('main');

        // Modify nav links
    // Remove old active class
    var old = document.getElementsByClassName('active');
    while(old != undefined && old.length > 0) { old[0].classList.remove('active'); old = document.getElementsByClassName('active'); }
    // Add class to current tab
    var contact = document.getElementById('contact');
    contact.classList.add("active");

    // contact Page Content
    const content = document.createElement('div');
    content.setAttribute('class', 'container');
    content.id = "container";
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    const col = document.createElement('div');
    col.setAttribute('class', 'col-12');
    const p = document.createElement('p');
    p.innerHTML = "Contact info."
    
    col.appendChild(p);
    row.appendChild(col);
    content.appendChild(row);

    main.appendChild(content);
    
};

export default contact;