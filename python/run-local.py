from run_morph_kgc import write_file

# result = write_file("transformation/mappings/s1_contracting_authority.rml.ttl", 'output-notice.nt')

result = write_file("../simple/characters.rml.ttl",'output.nt')

print(f"Graph created with {result} triples.")
