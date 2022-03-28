const express = require("express");
const router = express.Router();
module.exports = router;

const birds = [
    "Dendrocopos leucotos",
    "Dryocopus martius",
    "Certhia familiaris",
    "Anas platyrhynchos",
    "Bucephala clangula",
    "Larus canus",
    "Larus argentatus",
    "Haliaeetus albicilla",
    "Dendrocopos major",
    "Garrulus glandarius",
    "Corvus cornix",
    "Lophophanes cristatus",
    "Poecile montanus",
    "Cyanistes caeruleus",
    "Parus major",
    "Regulus regulus",
    "Sitta europaea",
    "Pyrrhula pyrrhula",
    "Chloris chloris",
    "Loxia curvirostra",
    "Corvus corax",
    "Histrionicus histrionicus",
    "Columba livia",
    "Passer domesticus"
];

router.get('/', (req, res) => {
    const randomBird = birds[Math.floor(Math.random() * birds.length)];
    return res.send(`It looks like you have met ${randomBird}!`);
});




