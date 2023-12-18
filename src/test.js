import rdf from 'rdf-ext'
import {prettyPrint} from './support.js'
// Example data
const data = [
  rdf.quad(rdf.namedNode('http://example/org/s1'), rdf.namedNode('http://schema.org/name'), rdf.literal('Alice')),
  rdf.quad(rdf.namedNode('http://example/org/s1'), rdf.namedNode('http://xmlns.com/foaf/0.1/knows'), rdf.namedNode('http://example/org/o1')),
  rdf.quad(rdf.namedNode('http://example/org/o1'), rdf.namedNode('http://schema.org/name'), rdf.literal('Bob'))
]

const dataset = rdf.dataset(data)

const pretty = await prettyPrint(dataset)
console.log(pretty)
