const output = document.getElementById("output-cards");

//Async function for fetching the url and getting the users
const userData = async () => {
  //using try and catch for the possibility of  encountering an error while fetching the url
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    //Printing out all of the user info in the data that we send request earlier.
    for (user of data) {
      output.innerHTML += `<div
        class="col-12 col-md-6 col-lg-4 mt-5 d-flex justify-content-center align-items-center"
      >
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">
            <i class="fa-regular fa-user icons"></i>
            ${user.id}. ${user.name}</h5>
            <h6 class="mb-2">
            Username:&nbsp;${user.username}
            </h6>
            <p class="card-text">
            Email:&nbsp;${user.email}
            </br>
            <h6  class="mt-3"><i class="fa-solid fa-location-dot icons"></i>&nbsp;Address:</h6>
            ${user.address.street}&nbsp;${user.address.suite}&nbsp;${user.address.city}&nbsp;${user.address.zipcode}&nbsp;${user.address.geo.lat}&nbsp;${user.address.geo.lng}
            
            <h6 class="mt-3">
            <i class="fa-solid fa-building icons"></i>&nbsp; Company:</h6>
            ${user.company.name}
            </br>${user.company.catchPhrase}
            </br>${user.company.bs}
            <h6 class="mt-3"><i class="fa-solid fa-id-card icons"></i>&nbsp;Contact:</h6>
            phone:&nbsp;${user.phone}</br>
            website:&nbsp;${user.website}
            </p>
            <div class="text-center ">
            <a href="posts.html?userId=${user.id}">
            <button class="btn pink-button ">See the Posts</button>
            </a></div>
          </div>
        </div>
      </div>`;
    }
  } catch {
    console.log("There is an error.");
  }
};

///Calling the function
userData();
