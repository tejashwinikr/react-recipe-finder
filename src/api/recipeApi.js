import axios from "axios";

const APP_ID = "704739ad";
const APP_KEY = "560bf80905609ce8032c0a6445dab569";

const fetchRecipe = async (_queryString) => {
  const response = await axios
    .get(
      `https://api.edamam.com/search?q=${_queryString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    .then(function (response) {
      console.log("==== res", response);
    });
  if (response.data) {
    return response.data;
  }
};

export default fetchRecipe;
