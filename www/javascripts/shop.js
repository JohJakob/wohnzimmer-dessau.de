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

populateCategoriesForm(categoriesForm);

function populateCategoriesForm(form) {
  const fieldset = form.getElementsByTagName("fieldset")[0];

  for (var i = 0; i < categories.length; i++) {
    var input = document.createElement("input");
    var label = document.createElement("label");

    input.setAttribute("type", "radio");
    input.setAttribute("id", i);
    input.setAttribute("name", "category");

    if (i == 0) {
      input.setAttribute("checked", "");
    }

    label.innerHTML = categories[i];
    label.setAttribute("for", i);

    fieldset.appendChild(input);
    fieldset.appendChild(label);
  }
}