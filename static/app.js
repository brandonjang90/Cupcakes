const BASE_URL = "http://127.0.0.1:5000/api";


/** Make list of cupcake using data */

function getCupcake(cupcake) {
  return `
    <div data-cupcake-id=${cupcake.id}>
    
      <img class="image"
      src="${cupcake.image}"
      alt="(no image provided)">
      <li>
        ${cupcake.flavor} / ${cupcake.size} / ${cupcake.rating}
        <button class="delete-button">X</button>
      </li>
    </div>
  `;
}


/** show list of cupcakes - appnend the li. */

async function showCupcakeList() {
  const response = await axios.get(`${BASE_URL}/cupcakes`);

  for (let data of response.data.cupcakes) {
    let newCupcake = $(getCupcake(data));
    $("#cupcakes-list").append(newCupcake);
  }
}


/** handle form for adding of new cupcakes */

$("#new-cupcake-form").on("submit", async function (evt) {
  evt.preventDefault();

  let flavor = $("#flavor").val();
  let rating = $("#rating").val();
  let size = $("#size").val();
  let image = $("#image").val();
  if (!image){
    image = "https://tinyurl.com/demo-cupcake"
  }

  const response = await axios.post(`${BASE_URL}/cupcakes`, {
    flavor,
    rating,
    size,
    image
  });

  let newCupcake = $(getCupcake(response.data.cupcake));
  $("#cupcakes-list").append(newCupcake);
  $("#new-cupcake-form").trigger("reset");

  window.location.reload();
});


/** handle clicking delete: delete cupcake */

$("#cupcakes-list").on("click", ".delete-button", async function (evt) {
  evt.preventDefault();
  let $cupcake = $(evt.target).closest("div");
  let cupcakeId = $cupcake.attr("data-cupcake-id");

  await axios.delete(`${BASE_URL}/cupcakes/${cupcakeId}`);
  $cupcake.remove();
});


$(showCupcakeList);