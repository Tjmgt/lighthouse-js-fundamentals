

const checkAir = function (samples, threshold) {
  let dirtyCount = 0;
  for (i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      dirtyCount++;
    }
  }
  let divideTen = dirtyCount / samples.length;
  if (divideTen < threshold) {
    return "Clean";
  } else return "Polluted";
};



console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
