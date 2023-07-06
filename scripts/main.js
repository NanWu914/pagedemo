const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/bernersennenhond.jpg") {
      myImage.setAttribute("src", "images/Bernese-Mountain-Dog-puppies.jpg");
    } else {
      myImage.setAttribute("src", "images/bernersennenhond.jpg");
    }
  };

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Bernese Mountain Dogs are the most adorable dogs, ${myName}`;
    }
  }
  
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bernese Mountain Dogs are the most adorable dogs, ${storedName}`;
  }

myButton.onclick = () => {
    setUserName();
  };
  
  