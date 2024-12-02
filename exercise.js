function Book( title , author , pages , read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        var result = "\nTitle: ";
        result = result.concat(this.title,"\nAuthor: ",this.author,"\nPages: ",this.pages);
        if(this.read == true){
            result = result.concat("\nCompleted: Yes\n");
        }
        else{
            result = result.concat("\nCompleted: No\n");
        }
        return result;
    }
}

Book.prototype.borrow = function (){
    if( this.read == true){
        return "The Book: '" + this.title + "' can be borrowed.";
    }
    else{
        return "The Book: ",this.title," used by someone, can't be borrowed.";
    }
}

function addToLibrary(){
    
}

var Book1 = new Book("Can't Hurt Me","David Goggins",363,true);
console.log(Book1.author);
console.log(Book1.info());
console.log(Book1.borrow());
console.log(Book1.author);