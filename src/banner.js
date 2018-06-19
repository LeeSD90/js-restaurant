const loadBanner = () => {
    const main = document.getElementById('main');
    const banner = document.createElement('div');
    banner.setAttribute('id', 'banner');

    const bannerText = document.createElement('h1');
    bannerText.innerHTML = "Super Cool Restaurant";

    banner.appendChild(bannerText);

    main.appendChild(banner);
};

export default loadBanner;