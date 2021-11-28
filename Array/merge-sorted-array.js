var teamA = [1,5,7,8,10];
var teamB = [2,3,4,6,12];

// output [1,2,3,4,5,6,7,8,10,12]

var temp = [];
var teamAindex = 0;
var teamBindex = 0;

var startItemTeamA = teamA[teamAindex];
var startItemTeamB = teamB[teamBindex];

while(teamA[teamAindex] || teamB[teamBindex]) {
  // console.log(startItemTeamA, startItemTeamB);
  if (!startItemTeamB || startItemTeamB > startItemTeamA) { // 2 > 1
    temp.push(startItemTeamA);
    teamAindex++;
  } else if (startItemTeamB < startItemTeamA || !startItemTeamA) {
    temp.push(startItemTeamB);
    teamBindex++;
  }
  startItemTeamA = teamA[teamAindex];
  startItemTeamB = teamB[teamBindex];
}

console.log(temp);