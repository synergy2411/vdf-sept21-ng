export class Animal{
    // private species : string;
    constructor(private species : string, private legs : number){
        // this.species = species
    }

    getSpecies(){
        return "Hi, I am " + this.species + ". I am having " + this.legs + " legs!";
    }
}

export function getLuckyNumber() : string {
    return "Your Lucky Number : " + MAGIC_NUMBER;
}

export const MAGIC_NUMBER : number = Math.round(Math.random() * 100);