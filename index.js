const greetEl = document.getElementById("greet")
const timeEl = document.getElementById("time")
const dateEl  = document.getElementById("date")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape")
    .then(res => res.json())
    .then(data => {
        console.log(data.urls.full)
        document.body.style.backgroundImage = `url(${data.urls.full})`
    }
)


function timeSection() {
    let date = new Date()
let timeOfTheDay
let hours = date.getHours()

const greetEl = document.getElementById("greet");
const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.urls.full);
    document.body.style.backgroundImage = `url(${data.urls.full})`;
  });

function timeSection() {
  let date = new Date();
  let d = date.toLocaleDateString("en-in");
  let t = date.toLocaleTimeString("en-in");
  let hours = date.getHours();
  let timeOfDay;

  if (hours < 12 && hours > 6) {
    timeOfDay = "Hello Dear, Good Morning 🌄";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Hello Dear, Good Afternoon 🕑";
  } else if (hours >= 17) {
    timeOfDay = "Hello Dear, Good Evening 🌃";
  } else if (hours >= 20) {
    timeOfDay = "Hello Dear, Good Night 😴";
  }
  dateEl.textContent = d;
  timeEl.textContent = t;
  greetEl.innerText = timeOfDay;
}

setInterval(timeSection, 1000);

    

let d = date.toLocaleDateString("en-in")
let t = date.toLocaleTimeString("en-in")

dateEl.textContent = d
timeEl.textContent = t
greetEl.textContent = timeOfTheDay
}

setInterval(timeSection,1000)
