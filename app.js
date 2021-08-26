/* Features
                    Create an input to get the names to add to the list ("waiting list").
                    Create an input to get the number of teams the user wants to generate.
                    Create the grid for displaying the teams. Each team should be rendered inside of a column.
                    Make sure the previously specified number of teams gets generated before proceding with the next step.
                    Create an “Assign” button near the “waiting list”. Every time the user clicks on it, a randomly picked name is placed in a team and removed from the list of people.
                 */

/*  Ex1.Create an input to get the names to add to the list ("waiting list"). */

function addNameToTeam() {
  let text = document.getElementById("team-name").value;
  let li = document.createElement("li");
  let newList = document.querySelector(".team-list");
  li.classList.add("team-list");
  li.innerHTML = text;
  newList.appendChild(li);
}
console.log(addNameToTeam());

function createTeam() {
  let numOfTeam = document.getElementById("number");
  const teamMem = document.getElementById("team-name");
  const newTeam = teamMem.value;

  for (let i = 0; i <= numOfTeam; i++) {
    let newTeamList = document.createElement("li");
    newTeamList.classList.add("team-list");
    newTeamList.innerHTML = newTeam;
  }
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
