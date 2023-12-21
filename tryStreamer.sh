docker run -v $PWD/full_mapping.rml.ttl:/data/mapping.ttl $PWD/transformation:/data/transformation    --rm rmlio/rmlstreamer toFile -m /data/mapping.ttl -o /data/output
