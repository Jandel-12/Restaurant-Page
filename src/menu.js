

export default function RestaurantMenu() {
  const menuData = {
    Appetizers: [
      { name: "Bruschetta", price: "$8.99", description: "Toasted bread topped with fresh tomatoes, basil, and garlic" },
      { name: "Calamari Fritti", price: "$12.99", description: "Crispy fried calamari served with marinara sauce" },
      { name: "Caesar Salad", price: "$9.99", description: "Romaine lettuce, parmesan, croutons, and Caesar dressing" },
    ],
    "Main Course": [
      { name: "Margherita Pizza", price: "$14.99", description: "Fresh mozzarella, tomato sauce, and basil on wood-fired crust" },
      { name: "Fettuccine Alfredo", price: "$16.99", description: "Creamy parmesan sauce with fettuccine pasta" },
      { name: "Grilled Salmon", price: "$22.99", description: "Atlantic salmon with lemon butter sauce and seasonal vegetables" },
      { name: "Ribeye Steak", price: "$28.99", description: "12oz Ribeye cooked to perfection with garlic mashed potatoes" },
    ],
    Desserts: [
      { name: "Tiramisu", price: "$7.99", description: "Classic Italian dessert with coffee-soaked ladyfingers" },
      { name: "Chocolate Lava Cake", price: "$8.99", description: "Warm chocolate cake with molten center and vanilla ice cream" },
      { name: "Panna Cotta", price: "$6.99", description: "Creamy Italian custard with berry compote" },
    ],
    Beverages: [
      { name: "House Wine", price: "$8.00", description: "Red or White" },
      { name: "Craft Beer", price: "$6.00", description: "Ask your server for today's selection" },
      { name: "Espresso", price: "$6.00", description: "Rich Italian Espresso" },
    ],
  };

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu");
  menuContainer.setAttribute('id', 'menu')

  
  const createMenuSection = (title, items) => {
    const section = document.createElement("div");
    section.classList.add("menu-section");

    section.innerHTML = `
      <h1>${title}</h1>
      <div class="line"></div>
    `;

    items.forEach(({ name, price, description }) => {
      const item = document.createElement("div");
      item.classList.add("menu-item");
      item.innerHTML = `
        <span class="item-name">${name}</span>
        <span class="item-price">${price}</span>
        <span class="item-description">${description}</span>
      `;
      section.appendChild(item);
    });

    return section;
  };

  
  for (const [category, items] of Object.entries(menuData)) {
    const section = createMenuSection(category, items);
    menuContainer.appendChild(section);
  }

  return menuContainer;
}
