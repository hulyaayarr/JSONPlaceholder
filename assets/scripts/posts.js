const output = document.getElementById("output-cards");

//Async function for fetching the url and getting the posts from that userId
const postData = async (userId) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + userId
    );
    const data = await response.json();
    //Printing out all of the post from related userId.
    for (user of data) {
      output.innerHTML += `<div
          class="col-12 col-md-6 col-lg-4 mt-5 d-flex justify-content-center align-items-center"
        >
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">
          <i class="fa-regular fa-user icons"></i> User Id: ${user.userId}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${user.title}</h6>
          <p class="card-text">${user.body}</p>
          
        </div>
      </div>
        </div>`;
    }
  } catch {
    console.log("There is an error.");
  }
};

const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");

if (!userId) {
  const userInput = prompt("Please enter a userId:");
  if ((userInput > 0) & (userInput < 11)) {
    userId = userInput;
    postData(userId);
  } else {
    alert("No such userId. Exiting...");
    throw new Error("userId must be a number between 1 and 10.");
  }
} else {
  postData(userId);
}
console.log(userId);
