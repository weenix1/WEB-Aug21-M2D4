/* Features
                    Create an input to get the names to add to the list ("waiting list").
                    Create an input to get the number of teams the user wants to generate.

                    Create the grid for displaying the teams. Each team should be rendered inside of a column.
                    Make sure the previously specified number of teams gets generated before proceding with the next step.
                    Create an “Assign” button near the “waiting list”. Every time the user clicks on it, a randomly picked name is placed in a team and removed from the list of people.
                 */
const inputName = document.querySelector("#input-name");
const teamQueue = document.querySelector("#team-queue");
const teamsN = document.querySelector("#teams-number");
const teamsRow = document.querySelector("#teams-row");

function addPerson(event) {
  event.preventDefault();
  console.log(inputName.value);
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerHTML = inputName.value;
  teamQueue.appendChild(li);
}

window.onload = function () {
  console.log("loading");
  createTeams();
};

function createTeams() {
  for (let i = 0; i < teamsN.innerHTML; i++) {
    teamsRow.innerHTML += `
      <div class="col-6 col-sm-3 team">
        <h4>Team ${i + 1}</h4>
        <ul class="list-group"></ul>
      </div> `;
  }
}

function addTeam() {
  const teamNumber = parseInt(teamsN.innerHTML) + 1;
  teamsN.innerHTML = teamNumber;
  teamsRow.innerHTML += `
      <div class="col-6 col-sm-3 team">
        <h4>Team ${teamNumber}</h4>
        <ul class="list-group"></ul>
      </div> `;
}

function assign() {
  const person = teamQueue.children[0];
  if (!person) return;
  const teams = document.querySelectorAll(".team > ul");
  const randomIndex = Math.floor(Math.random() * teams.length);
  teams[randomIndex].appendChild(person);
}

function removeTeam() {
  const newTeamsN = parseInt(teamsN.innerHTML) - 1;

  if (newTeamsN < 2) return;

  teamsN.innerHTML = newTeamsN;

  const teamsList = document.querySelectorAll(".team");
  const lastTeam = teamsList[teamsList.length - 1];

  const list = lastTeam.querySelector("ul");

  while (list.children.length !== 0) {
    teamQueue.appendChild(list.children[0]);
  }

  lastTeam.remove();
}

function reset() {
  teamQueue.innerHTML = "";

  teamsRow.innerHTML = "";

  inputName.value = "";

  teamsN.innerHTML = 2;

  createTeams();
}
