## Log 21/12/2023

Setup RML, two libraries. It didn't work with morphrc, in python.

It produced RDF using rmlmapper and one segment of the mapping.

```sh
java -jar rmlmapper.jar -m transformation/mappings/technical_mapping_F03.rml.ttl
```

When merging all partitions, and running

```sh
java -jar rmlmapper.jar -m full_mapping.rml.ttl
```

Fails with:

```
14:26:28.351 [main] ERROR be.ugent.rml.cli.Main               .run(420) - Cannot invoke "java.util.Collection.toArray()" because "c" is null
14:26:28.353 [main] ERROR be.ugent.rml.cli.Main               .run(457) - Cannot invoke "java.util.Collection.toArray()" because "c" is null
java.lang.NullPointerException: Cannot invoke "java.util.Collection.toArray()" because "c" is null
at java.base/java.util.ArrayList.addAll(ArrayList.java:670)
at be.ugent.rml.Executor.getIRIsWithTrueCondition(Executor.java:464)
at be.ugent.rml.Executor.getIRIsWithConditions(Executor.java:424)
at be.ugent.rml.Executor.generatePredicateObjectGraphs(Executor.java:363)
at be.ugent.rml.Executor.executeWithFunction(Executor.java:178)
at be.ugent.rml.Executor.execute(Executor.java:132)
at be.ugent.rml.cli.Main.run(Main.java:416)
at be.ugent.rml.cli.Main.main(Main.java:49)
```
