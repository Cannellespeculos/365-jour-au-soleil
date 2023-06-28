import './style.css'


const previsions = document.getElementById("prévisions");

const meteo = [
  {
    title_day: "lun",
    title_date: "20",
    icon: "img/chance-storm.png",
    temp_max: "14",
    temp_min: "4"
  },
  {
    title_day: "mar",
    title_date: "21",
    icon: "img/thunder-storm.png",
    temp_max: "10",
    temp_min: "4"
  },
  {
    title_day: "mer",
    title_date: "22",
    icon: "img/sunny.png",
    temp_max: "19",
    temp_min: "4"
  },
  {
    title_day: "jeu",
    title_date: "23",
    icon: "img/wind.png",
    temp_max: "16",
    temp_min: "4"
  },
  {
    title_day: "ven",
    title_date: "24",
    icon: "img/chance-storm.png",
    temp_max: "14",
    temp_min: "4"
  },
  {
    title_day: "sam",
    title_date: "25",
    icon: "img/chance-storm.png",
    temp_max: "14",
    temp_min: "4"
  },
  {
    title_day: "dim",
    title_date: "26",
    icon: "img/snow.png",
    temp_max: "14",
    temp_min: "4"
  },
  {
    title_day: "lun",
    title_date: "27",
    icon: "img/smoke.png",
    temp_max: "14",
    temp_min: "4"
  },
  {
    title_day: "mar",
    title_date: "28",
    icon: "img/sleet.png",
    temp_max: "14",
    temp_min: "4"
  },
  {
    title_day: "mer",
    title_date: "29",
    icon: "img/chance-storm.png",
    temp_max: "14",
    temp_min: "4"
  }
]

for (let i = 0; i < meteo.length; i++) {
  previsions.innerHTML += `
  <li>
    <article>
      <h3>${meteo[i].title_day}</h3>
      <h4>${meteo[i].title_date}</h4>
      <img src="${meteo[i].icon}"  alt="meteos icon ${i}">
      <p><span>${meteo[i].temp_max}</span>  |  <span>${meteo[i].temp_min}</span></p>
    </article>
  </li>
  `

}