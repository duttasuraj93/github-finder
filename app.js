// Init github
const github = new Github;
// Init UI
const ui = new UI;


// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== "") {
    // Make HTTP call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("Usernot found", "alert alert-danger");

      } else {
        // Show the profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // clear profile
    ui.clearProfile();
  }
});