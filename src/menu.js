function loadMenu() {
  const menuDiv = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "Our Menu";
  menuDiv.appendChild(headline);

  const dishes = [
    { name: "Spaghetti Carbonara", price: "€12" },
    { name: "Margherita Pizza", price: "€10" },
    { name: "Caesar Salad", price: "€8" },
  ];

  dishes.forEach((dish) => {
    const dishItem = document.createElement("p");
    dishItem.textContent = `${dish.name} - ${dish.price}`;
    menuDiv.appendChild(dishItem);
  });

  return menuDiv;
}

export default loadMenu;
