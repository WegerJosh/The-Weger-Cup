const players = [
  "Gary","Cathy","Matt","Chris","Josh","Tim","Kayla","Colby","Cameron"
];

// SAME ORDER as picks.html
const picks = [
  ["PIT",6,"BOS",7],
  ["PHI",7,"BOS",6],
  ["PIT",5,"NYR",6],
  ["PIT",6,"BOS",7],
  ["PHI",6,"NYR",7],
  ["PIT",7,"BOS",6],
  ["PIT",6,"NYR",5],
  ["PHI",7,"BOS",7],
  ["PIT",6,"BOS",6]
];

// Results (EDIT THESE EACH ROUND)
const results = ["PIT",6,"BOS",7];

function calculateScore(pick) {
  let score = 0;

  // Series 1
  if (pick[0] === results[0]) score += 3;
  if (pick[1] === results[1]) score += 1;

  // Series 2
  if (pick[2] === results[2]) score += 3;
  if (pick[3] === results[3]) score += 1;

  return score;
}

let standings = [];

for (let i = 0; i < players.length; i++) {
  standings.push({
    name: players[i],
    points: calculateScore(picks[i])
  });
}

// Sort highest to lowest
standings.sort((a,b) => b.points - a.points);

// Display table
const table = document.getElementById("standingsTable");

standings.forEach(p => {
  let row = table.insertRow();
  row.insertCell(0).innerText = p.name;
  row.insertCell(1).innerText = p.points;
});
