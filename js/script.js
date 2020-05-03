const url = "https://api-football-v1.p.rapidapi.com/v2/teams/league/2";
const options = {
  headers: {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": "2712ce0195msheb7cbb77d293673p186041jsn29f125d9aa64",
  },
};

async function fetchInfo() {
  try {
    const response = await fetch(url, options);
    const teamInfo = await response.json();
    displayTeam(teamInfo);
  } catch (error) {
    console.log(error);
  }
}

fetchInfo();

function displayTeam(teamInfo) {
  console.log(teamInfo);
  const infoContainer = document.querySelector(".results");
  let html = "";

  for (let i = 0; i < teamInfo.api.teams.length; i++) {
    let teamName = teamInfo.api.teams[i].name;
    let teamLogo = teamInfo.api.teams[i].logo;
    let teamVenue = teamInfo.api.teams[i].venue_name;
    let teamCity = teamInfo.api.teams[i].venue_city;
    html += `<div class="col-sm-6 col-md-4 col-lg-3">
                 <div class="card">
                 <img class="image" src=${teamLogo}>
                 <h4 class="name">${teamName}</h4>
                 <p><b>Hometown: </b>${teamCity}</p>
                 <p><b>Stadium: </b>${teamVenue}</p>
                 <a class="btn btn-primary" href="details.html?id=${teamInfo.api.teams[i].team_id}">Details</a>
                 </div>
                </div>`;
  }
  infoContainer.innerHTML = html;
}
