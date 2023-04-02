

interface MyBook {
    name: string,
    volume: number,
    author: string,
    illustrator: string,
    publisher: string,
    year: number,
    pages: number,
    language: "RUS" | "ENG" | "HEB",
    characters: object,
    protogonist: string,
    summery: string,
    isNew: boolean;
    isOld: boolean;
    condition: "perfect"|"good"|"bad",
    genre: "fantasy" | "poetry" | "novel" | "fiction" | "studie book" | "science" | "publicistic",
    isTranslated?: boolean,
    translatedFrom?: "RUS"| "ENG"|"HEB"|"CHI"|"FRA"|"KOR"|"GER",
    owner?:string
}

const theLordOfTheRings: MyBook = {name: "The Lord of the Rings", volume: 1, author: "John Ronald Ruel Tolkien", illustrator: "I.Kuchma"
, publisher: "AZBUKA. St.Petersburg. Russia", year: 1996, pages:523, language: "RUS", characters: ["Bilbo", "Frodo", "Gendalf", "Sauron"],
protogonist: "Frodo", summery: "blablabla", isNew: false, isOld: true, condition: "bad", genre: "fantasy", isTranslated: true, translatedFrom: "ENG",
owner: "me"}

console.log(theLordOfTheRings.owner)