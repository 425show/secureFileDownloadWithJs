// Select DOM elements to work with
const welcomeDiv = document.getElementById("UserName");
const signInButton = document.getElementById("SignIn");
const cardDiv = document.getElementById("card-div");
const mailButton = document.getElementById("readMail");
const profileButton = document.getElementById("seeProfile");
const profileDiv = document.getElementById("profile-div");
const downloadButton = document.getElementById("Download");

downloadButton.setAttribute("onclick", "getNotebook();");

function showWelcomeMessage(username) {
    welcomeDiv.innerHTML = `Welcome ${username}`;
    signInButton.setAttribute("onclick", "signOut();");
    signInButton.setAttribute('class', "btn btn-success");
    signInButton.innerHTML = "Sign Out";
}

function clearWelcomeMessage(){
    welcomeDiv.innerHTML = ``;
    signInButton.setAttribute("onclick", "signIn();");
    signInButton.setAttribute('class', "btn btn-secondary");
    signInButton.innerHTML = "Sign In";
}
