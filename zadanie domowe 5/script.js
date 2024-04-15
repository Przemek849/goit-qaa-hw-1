// Słowo kluczowe this służy do wskaszywania na obiekt, do którego 
// odnosi się dane pole lub metoda. W programowaniu obiektowym 
// słowo kluczowe this głównie wykorzystuje się w konstruktorze 
// danej klasy do przypisywania wartości do obiektów powstałych
// na bazie tej klasy

// w funkcji takiej jak poniżej this będzie wywoływany zależnie od 
// kontekstu użycia funkcji. W zasięgu globalnym będzie odnosić się
// do obiektu window

function foo() {
    console.log(this);
}

foo();
// w tej funkcji słowo this odnosi się do bezpośrednio do obiektu 
// którego jest częścią

const book = {

    //pola author i price obiektu book
    author: "...",
    price: 37.50,

    //metoda obiektowa wypisująca w konsoli wartość author tego obiektu
    showAuthor() {
        console.log(this.author);
    },

    //metoda obiektowa wypisująca w konsoli informacje o obiekcie book
    foo2() {
        console.log(this);
    }
}

book.foo2()

// Obiekt maciej
const maciej = {
    //pole username z przypisaną wartością "Maciej"
    username: "Maciej",

    //metoda obiektowa showName używa this do wskazania na obiekt maciej, jako kontekst wykonania
    showName() {
        console.log(this.username)
    }
}

//użycie metody showName
maciej.showName();

//obiekt półka
const bookshelf = {
    //pole authors będące tablicą autorów
    authors: ["Jan Kowalski"],

    //metoda getAuthors wskazuje na tablicę authors należące do tego obiektu
    getAuthors() {
        console.log(this.authors);
    },

    //metoda addAuthor wskazuje na tablicę authors należące do tego obiektu i przesyła do niej podany argument
    addAuthor(authorName) {
        this.authors.push(authorName);
    }
}

//dodanie nowego autora i pobranie zapisanych autorów
bookshelf.addAuthor("Adam Nowak");
bookshelf.getAuthors();