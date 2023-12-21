## Problem

I don't know how to combine these mapping, the libraries fail without giving me any feedback.

## Log 21/12/2023

Setup RML.

## Hello world

Worked in morphrc and rml.jar

## Notice f03

- It didn't work with morphrc (python).

- Produced RDF with rmlmapper and one segment of the mapping.

```sh
java -jar rmlmapper.jar -m transformation/mappings/technical_mapping_F03.rml.ttl
```

However, when merging all partitions, and running

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

## Javascript

Gave a try to comake-mapper. It outputs an empty string.

Gave a try to rml wrapper. It fails with the same error as no wrapper. 


