const searchBar = document.getElementById('nav-search-bar-form')

if (searchBar) {
    document.body.innerHTML = '';
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.height = '100vh';

    container.appendChild(searchBar);
    document.body.appendChild(container);
}