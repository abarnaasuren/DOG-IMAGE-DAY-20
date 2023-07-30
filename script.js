let drop = document.querySelector(".kar");
let round = document.querySelector(".rounded");
async function start() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    createBreedList(data.message);
  } catch (e) {
    console.log(e);
  }
}
start();
function createBreedList(breed) {
  drop.innerHTML = `<select onchange="breedImage(this.value)"
  class="form-select  mt-5 mb-5"
  aria-label="Default select example"
>
  <option>Choose a dog breed</option>
  ${Object.keys(breed)
    .map(function (drop) {
      return `<option>${drop}</option>`;
    })
    .join("")}
    </select>`;
}

async function breedImage(breed) {
  if (breed != "choose a dog breed") {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const data = await response.json();
    let imageRes = data.message;
    round.src = imageRes;
  } else if (breed == "choose a dog breed") {
    round.src =
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/38829343744707.61573d27cb780.jpg";
  }
}
// let getAnimalDetails = async (URL) => {
//   try {
//     let url = URL;
//     // Fetching information using FETCH
//     let data = await fetch(url);
//     // Returning the data in json format
//     return data.json();
//   } catch (error) {
//     console.error(error);
//   }
// };

// let getDogImage = async (url) => {
//   try {
//     let data = await fetch(url);
//     return data.json();
//   } catch (error) {
//     console.error(error);
//   }
// };

// let displayAnimal = async () => {
//   let allAnimal = await getAnimalDetails("https://dog.ceo/api/breeds/list/all");
// };
// console.log(allAnimal);
// let all1 = allAnimal.message;
// let all = Object.keys(all1);
// console.log(all);
// let x = 0;
// all.forEach((el) => {
//   let li = document.createElement("li");
//   a.classList.add("dropdown-item");
//   li.classList.add(`data${x}`);
//   a.innerHTML = `${el}`;
//   drop.append(li);
//   let image = document.createElement("img");
//   contain.append(image);
//   let domData = document.querySelector(`.data${x}`);
//   domData.addEventListener("click", async () => {
//     let allAnimalImage = await getDogImage(
//       `https://dog.ceo/api/breed/${el}/images/random`
//     );
//     image.src = `https://dog.ceo/api/breed/${el}/images/random`;
//     console.log(image.src);
//   });
//   x++;
// });