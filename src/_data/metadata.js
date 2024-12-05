const frame = require("../_includes/frame.js");

// Read Files
const TURTLE_FILE = "./src/_data/concepts_mini.ttl";
// Framing
const FRAMING_FILE_CATEGORIES = "./src/_data/spa-categories-framing.json";
const FRAMING_FILE = "./src/_data/spa-skos-framing.json";
// Cache Local
const MEMORY_SCHEME = "skos_vocabulary";
const MEMORY_CATEGORIES = "categories";

// Generate result
module.exports = async function () {

	const categories = await frame(TURTLE_FILE,FRAMING_FILE_CATEGORIES,MEMORY_CATEGORIES);
	const scheme = await frame(TURTLE_FILE,FRAMING_FILE,MEMORY_SCHEME);
	//const aweasonConcepts = await Concepts(scheme);
	console.log("Scheme")
	console.log(scheme.graph)

	return { 
		"categories" : categories,
		"scheme" : scheme
	};
}
