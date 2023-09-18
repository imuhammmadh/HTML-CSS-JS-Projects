const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 159,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 139,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 199,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 399,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 229,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 189,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 179,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 129,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 169,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak",
    category: "dinner",
    price: 1599,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
let sectionCenter = document.querySelector('.section-center');
let container = document.querySelector(".btn-container");
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo">
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">₹${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`;
  })
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu
};
function displayMenuBtns() {
  let categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values
  }, ['all']);
  let categoryBtns = categories.map((category) => {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
  }).join("");
  container.innerHTML = categoryBtns;
  let filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let category = e.currentTarget.dataset.id;
      let menuCategory = menu.filter((menuItem) => {
        if (menuItem.category == category) {
          return menuItem;
        }
      })
      if (category == "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    })
  })
}
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  let menuItems = document.querySelectorAll(".menu-item")
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.style.visibility = "hidden";
      setTimeout(() => {
        item.style.visibility = "visible"
      }, 5000)
    })
  })
  displayMenuBtns();
});
