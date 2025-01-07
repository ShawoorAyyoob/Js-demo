class book{
    author;
    title;

    constructor (a,t){
        this.author = a;
        this.title = t;
    }

    dslBook(){
        console.log(`This book is published by ${this.author}, ${this.title}`)
    }
}
const book2 = new book("Eichiro Oda","One Piece" );
 book2.dslBook()
