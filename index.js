// Write your classes here
//Tree: initializes an instance with one parameter and assigns it to `species`:
class Tree {
  constructor(species) {
    this.species = species;
  }
//Tree: has a static method `definition` that returns a sentence on trees:

  static definition() {
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
  }
}
//Deciduous: initializes with two parameters, species and name, and uses `super` to set `species`:

class Deciduous extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }
//Deciduous: has a static method `definition` that uses `super.definition` and expands on it:
  static definition() {
    return `${super.definition()} Deciduous trees shed their leaves annually.`;
  }
}
//Evergreen: initializes with two parameters, species and name, and uses `super` to set `species`:
class Evergreen extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }
//Evergreen: has a static method `definition` that uses `super.definition` and expands on it:
  static definition() {
    return `${super.definition()} Evergreens keep their leaves all year round.`;
  }
}