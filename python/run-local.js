import { createMapper } from "./mapper.js";

const triplify = await createMapper();

// const result = await triplify({
//   mappingFile: '../simple/characters.rml.ttl', outputFile: 'output-local.nt',
// })

const result = await triplify({
  mappingFile: "../simple/characters.rml.ttl",
  outputFile: "output-local",
});
console.log(result);
