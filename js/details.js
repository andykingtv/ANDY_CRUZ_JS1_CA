const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://api-football-v1.p.rapidapi.com/v2/teams/team/" + id;
const options = {
  headers: {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": "2712ce0195msheb7cbb77d293673p186041jsn29f125d9aa64",
  },
};

async function teamsInfo() {
  const teamLogo = document.querySelector(".details-image");
  const teamName = document.querySelector("h1");
  const contentContainer = document.querySelector(".detail-details");
  let html = "";

  try {
    const response = await fetch(url, options);
    const teamInfo = await response.json();
    const team = teamInfo.api.teams[0];
    html += `<h1>${team.name}</h1>
              <p><b>COUNTRY: </b><span class"value" id="propertyName">${team.country}</span></p>
              <p><b>FOUNDED: </b><span class"value" id="propertyName">${team.founded}</span></p>
              <p><b>ADDRESS: </b><span class"value" id="propertyName">${team.venue_address}</span></p>
              <p><b>CITY: </b><span class"value" id="propertyName">${team.venue_city}</span></p>
              <p><b>STADIUM : </b><span class"value" id="propertyName">${team.venue_name}</span></p>`;
    teamLogo.src = team.logo;
    teamLogo.alt = team.name;

    contentContainer.innerHTML = html;
  } catch (error) {
    teamLogo.style.display = "none";
    contentContainer.innerHTML =
      "<b>404 NOT FOUND - THIS TEAM DOES NOT EXIST<b/>";
    console.log(error);
  }
}

teamsInfo();
