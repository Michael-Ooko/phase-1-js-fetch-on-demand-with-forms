
// // Add Event Listeners to Capture Form Data and Override the Form's Behavior
// const init = () => {
//     const inputForm = document.querySelector("form");
//     inputForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         console.log(event);
//     });
// };

// document.addEventListener('DOMContentLoaded', init);
// // Access Input Value from an Event Object
// event.target.children[1].value

// // Access Input Value Directly
// inputForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const input = document.querySelector("input#searchByID");
//     console.log(input.value)
// })


// Fetch Data Based on User Input
const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#searchByID");
      
        fetch(`http://localhost:3000/movies/${input.value}`)
          .then((response) => response.json())
          .then((data) => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");

            title.innerText = data.title;
            summary.innerText = data.summary;
          });
      });
  };
  document.addEventListener("DOMContentLoaded", init);

//   Display Fetched Data on the Page