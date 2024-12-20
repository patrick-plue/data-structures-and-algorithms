const { SeparateChainingHashMap } = require("../datastructures/Hash.js");

const birdCensus = new SeparateChainingHashMap(16);

birdCensus.assign("mandarin duck", "Central Park Pond");
birdCensus.assign("monk parakeet", "Brooklyn College");
birdCensus.assign("horned owl", "Pelham Bay Park");

birdCensus.retrieve("mandarin duck");
birdCensus.retrieve("monk parakeet");
console.log(birdCensus.retrieve("horned owl"));
