//Finds Delivery Button
const deliverToButton = document.getElementById('nav-global-location-slot');
deliverToButton.style.cssText = '';

//Search Bar
const searchBar = document.getElementById('nav-search-bar-form');
const department = searchBar.querySelector('.nav-left');
// const suggestions = document.getElementById('nav-flyout-iss-anchor');
if (department) {
    department.remove();
}
const go = searchBar.querySelector('.nav-right');
if (go) {
    go.remove();
}

/*
//Language Option 
const languageButton = document.getElementById('icp-nav-flyout');

//Returns Button
const ordersButton = document.getElementById('nav-orders');

const cartButton = document.getElementById('nav-cart');
*/

//Clears body content -------------------------------------------------------------------------
document.body.innerHTML = '';

//Get logo URL
var imageURL = chrome.runtime.getURL("images/cadabra-logo.png")

//Cadabra Logo
const image = document.createElement('img');
image.src = imageURL;
image.alt = 'Cadabra Logo';
image.width = 800;
image.height = 800;

//Create new div for image
const imgDiv = document.createElement('div');
imgDiv.style.display = 'flex';
imgDiv.style.flexDirection = 'column';
imgDiv.style.justifyContent = 'center';
imgDiv.style.alignItems = 'center';
imgDiv.style.transform = 'translateY(-100px)'
imgDiv.appendChild(image);  //Append img to imgContainer

//Body div
const body = document.createElement('div');
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.height = '100vh';

//New search bar
const searchBarDisplay = document.createElement('div');

const search = document.createElement('div');
/*
const deliverTo = document.createElement('div');
const language = document.createElement('div');
const orders = document.createElement('div');
const cart = document.createElement('div');
*/

//new class for searchBarDisplay
searchBarDisplay.classList.add('searchBarDisplay');
searchBarDisplay.style.display = 'flex';
searchBarDisplay.style.flexDirection = 'row';
searchBarDisplay.style.justifyContent = 'flex-start';
searchBarDisplay.style.alignItems = 'center';
searchBarDisplay.style.alignSelf = 'center';
searchBarDisplay.style.transform = 'translateY(-200px)'

//Search Bar Form
search.classList.add('searchBar');
search.appendChild(searchBar);

/*
//Deliver Button
deliverTo.classList.add('deliverTo');
deliverTo.appendChild(deliverToButton);

language.classList.add('language');
language.appendChild(languageButton);

orders.classList.add('orders');
orders.appendChild(ordersButton);

cart.classList.add('cart');
cart.appendChild(cartButton);
*/

searchBarDisplay.appendChild(search);
/*
searchBarDisplay.appendChild(deliverTo);
searchBarDisplay.appendChild(language);
searchBarDisplay.appendChild(orders);
searchBarDisplay.appendChild(cart);
*/

//Body div nests both divs inside
body.appendChild(imgDiv);
body.appendChild(searchBarDisplay);

//Append body div to document
document.body.appendChild(body);

document.documentElement.style.display = 'block'; 

