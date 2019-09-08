const url = "https://eric-deploy-test.herokuapp.com/cats";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".summon-cats").addEventListener("click", () => {
    axios
      .get(`${url}`)
      .then(response => {
        const {data} = response;
        data.cats.forEach((cat, index) => {
          const image = document.createElement("img");
          image.setAttribute("src", cat.photo);
          image.setAttribute("alt", `Photo of ${cat.name}`);
          const element = document.querySelector("#cat" + (index + 1));
          element.appendChild(image);
        });
      })
      .catch(error => console.log(error));
  });
});
