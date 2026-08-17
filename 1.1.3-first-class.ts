class Bok {
    titel: string = ""
    forfattare: string = ""
    isbn: string = ""
    antalSidor: number = 0
}

const bok1 = new Bok();
bok1.titel = "The Hobbit";
bok1.forfattare = "J.R.R. Tolkien";
bok1.isbn = "69";
bok1.antalSidor = 250;

const bok2 = new Bok();
bok2.titel = "Harry Potter";
bok2.forfattare = "J.K. Rowling";
bok2.isbn = "70";
bok2.antalSidor = 300;

console.log(bok1.titel);
console.log(bok1.forfattare);
console.log(bok1.isbn);
console.log(bok1.antalSidor);
console.log(bok2.titel);
console.log(bok2.forfattare);
console.log(bok2.isbn);
console.log(bok2.antalSidor);