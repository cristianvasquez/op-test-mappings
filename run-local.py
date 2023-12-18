from python.run_morph_kgc import write_file


result = write_file("transformation/mappings/technical_mapping_F03.rml.ttl", 'output-notice.nt')

print(f"Graph created with {result} triples.")
