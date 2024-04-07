const liczby = [1, 5, 23, 13];

const foo2 = value => value*2;

const liczbyPodwojone = liczby.map(foo2);

console.log(liczby);
console.log(liczbyPodwojone);

//#################################

const student = [
    {
    name: "Jan",
    nazwisko: "Kowalski",
    },
    {
    name: "Anna",
    nazwisko: "Adamska",
    },
    {
    name: "Adam",
    nazwisko: "Nowakl",
    }
]

const foo3 = obj => obj.name;

const imiona = student.map(foo3);

console.log(student);
console.log(imiona);