node merge-mapping.js  > full_mapping.rml.ttl
java -jar rmlmapper.jar -m full_mapping.rml.ttl | sort >  2.ttl
#java -jar rmlmapper.jar -m full_mapping.rml.ttl -s turtle
