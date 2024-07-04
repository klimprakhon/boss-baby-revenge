// Boos Baby's Revenge

// const shots = "SSRSRRR";

function bossBabyRevenge(shots) {
  if (typeof shots !== "string") {
    return "Invalid input";
  }

  shots = shots.toUpperCase();

  if (shots.startsWith("R") || shots.endsWith("S")) {
    return "Bad boy";
  }

  // check if all initial shot was revenged
  const shotPattern = /(S+)|(R+)/g;

  if (!shotPattern.test(shots)) {
    return "Bad boy";
  }

  // check the number of the revenge is more or equal to initial shot from neighbor

  let shotSequence = shots.match(shotPattern); // "SRRSSR" => [ 'S', 'RR', 'SS', 'R' ]

  let shotCount = 0;
  let revengeCount = 0;

  for (let i = 0; i < shotSequence.length; i++) {
    const currentSequence = shotSequence[i];
    if (currentSequence.startsWith("S")) {
      shotCount += currentSequence.length;
    } else if (currentSequence.startsWith("R")) {
      revengeCount += currentSequence.length;
    }

    // check if the last set having revenge shots more than initial shot
    if (
      shotSequence[shotSequence.length - 2].length >
      shotSequence[shotSequence.length - 1].length
    ) {
      return "Bad boy";
    }
  }

  // final check for the overall shot count
  if (revengeCount >= shotCount) {
    return "Good boy";
  } else {
    return "Bad boy";
  }
}

// console.log(bossBabyRevenge(shots));

module.exports = bossBabyRevenge;
