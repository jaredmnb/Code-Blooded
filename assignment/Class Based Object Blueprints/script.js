class weight {
    constructor(name, kg) {
        this.name = name;
        this.kg = kg,
            this.pounds = kg * 2.2,
            this.convertedWeight = function () {
                console.log(`${this.name}'s weight in lbs is ${this.pounds}`);
            };

    }
}
let poundWeight =  new weight ("Sam",60)
poundWeight.convertedWeight();