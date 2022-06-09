import { browser } from '$app/env';
import { writable } from 'svelte/store';

export const THEMES = {
    LIGHT: "cupcake",
    DARK: "winter",
};
export const category = writable("shoes");


const storedCart = browser? JSON.parse(window.localStorage.getItem("cart")): [];
export const cart = writable(storedCart??[]);
console.log(storedCart);

cart.subscribe(value => {
  if(browser)
  {
    window.localStorage.setItem("cart", JSON.stringify(value));
  }
});


export const products = 
  {
  "shoes":
  [
    {
      "poster": "https://m.media-amazon.com/images/I/711p69IpvJL._AC_UX695_.jpg",
      "price":"42.99",
      "title" : "Under Armour Men's Charged Assert 9 Running Shoe",
      "quantity":0,
      "category":"Shoes",
    },
    {
    "poster": "https://m.media-amazon.com/images/I/51ahEQQ8a8L._AC_UY675_.jpg",
    "price": "44.99",
    "title" : "adidas Men's Racer TR21 Running Shoe",
    "quantity":0,
    "category":"Shoes",
  },
  {
    "poster": "https://m.media-amazon.com/images/I/61P-QSY8SKL._AC_UY500_.jpg",
    "price": "49.99",
    "title" : "adidas Men's Grand Court Tennis Shoes",
    "quantity":0,
    "category":"Shoes",
  },
  {
    "poster": "https://m.media-amazon.com/images/I/61bFDXILqnL._AC_UL1000_.jpg",
    "price": "59.99",
    "title" : "Sperry Men's STRIPER II CVO Core Sneaker",
    "quantity":0,
    "category":"Shoes",
  },

  ],
  "computers":
  [
    {
      "poster": "https://m.media-amazon.com/images/I/617NZwKPTFL._AC_SX679_.jpg",
      "price":"1399.99",
      "title" : "MEK HERO G1 A5636 Ryzen 5 5600X 16GB, RTX 3060",
      "quantity":0,
      "category":"Gaming",
    },
    {
      "poster": "https://m.media-amazon.com/images/I/81sPxMjZ42L._AC_SL1500_.jpg",
      "price":"1599.99",
      "title" : "SkyTech Shadow 3.0 Gaming PC",
      "quantity":0,
      "category":"Gaming",
    },
    {
      "poster": "https://m.media-amazon.com/images/I/61fFIH5N1RL._SL1500_.jpg",
      "price":"74.99",
      "title" : "PlayStation DualSense Wireless Controller",
      "quantity":0,
      "category":"Gaming",
    },
    {
      "poster": "https://m.media-amazon.com/images/I/71D0s4mum+L._AC_SL1500_.jpg",
      "price":"999.99",
      "title" : "Epic gaming socks to boost your aim",
      "quantity":0,
      "category":"Gaming",
    },
  ],
  "phones":
  [
    {
      "poster": "https://m.media-amazon.com/images/I/61ZNIHIEUqL._AC_SX679_.jpg",
      "price":"699.99",
      "title" : "Samsung Galaxy S21 FE 5G Cell Phone",
      "quantity":0,
      "category":"Phones",
    },
    {
      "poster": "https://m.media-amazon.com/images/I/719QO01ZzvL._AC_SL1500_.jpg",
      "price":"949.99",
      "title" : "SAMSUNG Galaxy S22 Ultra Smartphone",
      "quantity":0,
      "category":"Phones",
    },
    {
      "poster": "https://m.media-amazon.com/images/I/616tCVT1qXL._AC_SL1500_.jpg",
      "price":"249.99",
      "title" : "Samsung Galaxy S10+",
      "quantity":0,
      "category":"Phones",
    },
    {
      "poster": "https://m.media-amazon.com/images/I/71vlMaLYaJL._AC_SL1500_.jpg",
      "price":"49.99",
      "title" : "AT&T BL102 DECT 6.0 Cordless Phone",
      "quantity":0,
      "category":"Phones",
    },

  ],
}
// if SSR (not browser rendered) the theme will be LIGHT
// if user has theme specified in localstorage: use that theme
// else check if user has DARK color-scheme preference in browser
// if not use LIGHT

const initialValue = browser ? window.localStorage.getItem('theme') ?? ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? THEMES.DARK : THEMES.LIGHT) : THEMES.LIGHT;
export const theme = writable(initialValue);

// subscribe to theme writable store changes and do the following on change
theme.subscribe((value) => {
    if (browser) {
        // save settings to localStorage and change the theme for the current document ( website )
        window.localStorage.setItem('theme', value);
        document.documentElement.setAttribute("data-theme", value);
    }
})

export { theme as default };
