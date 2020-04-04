const categories = [
  "Alle",
  "Cafés, Restaurants",
  "Bars, Kneipen, Clubs",
  "Kinos, Theater, Unterhaltung",
  "Friseure, Nagelstudios, Kosmetik",
  "Einzelhandel",
  "Tattoo-Studios, Piercer",
  "Reisebüros",
  "Sport",
  "Soziale Einrichtungen",
  "Baustoffhandel",
  "Sonstige"
];
const categoriesForm = document.getElementById("div-shop-categories").getElementsByTagName("form")[0];
const shopList = document.getElementById("div-shop-list");

populateCategoriesForm(categoriesForm);
sanitizeCategoryData(shopList);

function populateCategoriesForm(form) {
  const fieldset = form.getElementsByTagName("fieldset")[0];

  for (var i = 0; i < categories.length; i++) {
    var div = document.createElement("div");
    var input = document.createElement("input");
    var label = document.createElement("label");

    input.setAttribute("type", "radio");
    input.setAttribute("id", i);
    input.setAttribute("value", i);
    input.setAttribute("name", "category");
    input.setAttribute("onclick", "filterCategory(this);");

    if (i == 0) {
      input.setAttribute("checked", "");
    }

    label.innerHTML = categories[i];
    label.setAttribute("for", i);

    div.appendChild(input);
    div.appendChild(label);

    fieldset.appendChild(div);
  }
}

/*
 * Sanitize categories in data-category attribute output by Vapid
 */
function sanitizeCategoryData(list) {
  const children = list.children;

  for (var i = 0; i < children.length; i++) {
    var categoryString = children[i].getAttribute("data-category");

    categoryString = categoryString.replace(/'/g, "");
    categoryString = categoryString.replace(/\//g, ", ");
    categoryString = categoryString.replace("Cafes", "Cafés");

    children[i].setAttribute("data-category", categoryString);
  }
}

function filterCategory(input) {
  const children = shopList.children;
  var displayCount = 0;

  for (var i = 0; i < children.length; i++) {
    if (input.value == 0) {
      children[i].style.display = "block";
      displayCount++;
    } else {
      const childCategory = children[i].getAttribute("data-category");

      if (input.value == categories.indexOf(childCategory)) {
        children[i].style.display = "block";
        displayCount++;
      } else {
        children[i].style.display = "none";
      }
    }
  }

  var noItemsElement = document.getElementById("p-shop-no-items");

  if (noItemsElement != null) {
    noItemsElement.remove();
  }

  if (displayCount == 0) {
    var p = document.createElement("p");

      p.id = "p-shop-no-items";
      p.innerHTML = "In dieser Kategorie gibt es leider keine Gutscheine."

      shopList.appendChild(p);
  }
}