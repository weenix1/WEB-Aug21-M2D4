/* Features
                    Create an input to get the names to add to the list ("waiting list").
                    Create an input to get the number of teams the user wants to generate.
                    Create the grid for displaying the teams. Each team should be rendered inside of a column.
                    Make sure the previously specified number of teams gets generated before proceding with the next step.
                    Create an “Assign” button near the “waiting list”. Every time the user clicks on it, a randomly picked name is placed in a team and removed from the list of people.
                 */

/*  Ex1.Create an input to get the names to add to the list ("waiting list"). */
const teamsN = document.querySelector("#teams-number");
const teamsRow = document.querySelector("#teams-row");
const teamQueue = document.querySelector("#team-queue");

function addNameToTeam() {
  let text = document.getElementById("team-name").value;
  let li = document.createElement("li");
  let newList = document.querySelector(".team-list");
  li.classList.add("team-list");
  li.innerHTML = text;
  newList.appendChild(li);
}
console.log(addNameToTeam());
/* 
function createTeam() {
  let numOfTeam = document.getElementById("number");
  const teamMem = document.getElementById("team-name");
  const newTeam = teamMem.value;

  for (let i = 0; i <= numOfTeam; i++) {
    let newTeamList = document.createElement("li");
    newTeamList.classList.add("team-list");
    newTeamList.innerHTML = newTeam;
  }
} */

function createTeams() {
  for (let i = 0; i < teamsN.innerHTML; i++) {
    teamsRow.innerHTML += `
          <div class="col-6 col-sm-3 team">
              <h4>Team ${i + 1}</h4>
              <ul class="list-group">
              </ul>
          </div>
      `;
  }
}

window.onload = function () {
  console.log("loading");
  createTeams();
};

function addTeam() {
  const teamNumber = parseInt(teamsN.innerHTML) + 1;

  teamsN.innerHTML = teamNumber;

  teamsRow.innerHTML += `
      <div class="col-6 col-sm-3 team">
          <h4>Team ${teamNumber}</h4>
          <ul class="list-group">
          </ul>
      </div>
  `;
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

function assign() {
  const person = teamQueue.children[0];

  if (!person) return;

  const teams = document.querySelectorAll(".team > ul");
  const randomIndex = Math.floor(Math.random() * teams.length);

  teams[randomIndex].appendChild(person);

  console.log({ person, randomIndex });
}

function reset() {
  teamQueue.innerHTML = "";

  teamsRow.innerHTML = "";

  inputName.value = "";

  teamsN.innerHTML = 2;

  createTeams();
}

/* const waitingList = function (str) {
  let list = [];
  list.push(JSON.parse(JSON.stringify(str)));
  console.log(list);
};
 */
/* ex2.  Create an input to get the number of teams the user wants to generate. */
/* function createRandomTeamMem(eventData) {
  const teamMem = document.querySelector(".random-num");
  let newList = document.querySelectorAll("ul");
  let newTeamList;
  for (let number of teamMem) {
    newTeamList += Math.round(Math.random() * number);
  }
} */

/*
                        let waitList = document.querySelector("#modal")
                        if(waitList===waitList){
                          console.log(waitList + "already exist")
                        }else{
                          return waitList
                        }
                        for
      };
            */
