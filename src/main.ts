
class User {
    public Id: number;
    public name: string;
    public email: string;
    private Password: string;
    protected Phone: string;
    private age: number;

    constructor(
        Id: number,
        name: string,
        email: string,
        Password: string,
        Phone: string,
        age: number
    ) {
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }

        this.Id = Id;
        this.name = name;
        this.email = email;
        this.Password = Password;
        this.Phone = Phone;
        this.age = age;
    }

    public displayInfo(): void {
        console.log("ID:", this.Id);
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Phone:", this.Phone);
        console.log("Age:", this.age);
    }


public notebooks: NoteBook[] = [];

public addNotebook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
}

public removeNotebook(notebook: NoteBook): void {
    this.notebooks = this.notebooks.filter(
        nb => nb !== notebook
    );
}


}

// Creating an object
const user1 = new User(
    1,
    "Ali",
    "ali@gmail.com",
    "123456",
    "01012345678",
    20
);

user1.displayInfo();

/////////////////////////////////////////////////////////////////////////////////////////////

class Admin extends User {

    public manageNotes(): void {
        console.log("Admin is managing notes");
    }
}

// Creating an Admin object
const admin1 = new Admin(
    1,
    "Ahmed",
    "Ahmed@gmail.com",
    "12345678",
    "01012345678",
    25
);


admin1.displayInfo();


admin1.manageNotes();
///////////////////////////////////////////////////////////////////////////////////////////////

class Note {
    public Id: number;
    public tittle: string;
    public content: string;
    public userId: User;

    constructor(
        Id: number,
        tittle: string,
        content: string,
        userId: User
    ) {
        this.Id = Id;
        this.tittle = tittle;
        this.content = content;
        this.userId = userId;
    }

    public preview(): string {
        return this.content.substring(0, 50) + "...";
    }
}


const note1 = new Note(
    1,
    "My First Note",
    "This is my first note and I am learning OOP and Typescript now.",
    user1
);

console.log(note1.preview());
//////////////////////////////////////////////////////////////////////////////////////

class NoteBook {
    public notes: Note[] = [];

    public addNote(note: Note): void {
        this.notes.push(note);
        console.log("Note added successfully");
    }

    public removeNote(noteId: number): void {
        this.notes = this.notes.filter(note => note.Id !== noteId);
        console.log("Note removed successfully");
    }
}

// Creating a Notebook
const notebook1 = new NoteBook();

// Adding notes
notebook1.addNote(note1);

// Removing a note
notebook1.removeNote(1);

//////////////////////////////////////////////////////////////////////////////////////


user1.addNotebook(notebook1);

console.log(user1.notebooks.length);

user1.removeNotebook(notebook1);

console.log(user1.notebooks.length); 
//////////////////////////////////////////////////////////////////////////////////////////

console.log(note1.userId.name);

//////////////////////////////////////////////////////////////////////////////////////////

class Storage<T> {
    private items: T[] = [];

    public addItem(item: T): void {
        this.items.push(item);
    }

    public removeItem(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

    public getAllItems(): T[] {
        return this.items;
    }
}

const numberStorage = new Storage<number>();

numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);
console.log(numberStorage.getAllItems());
numberStorage.removeItem(30);
console.log(numberStorage.getAllItems());
///////////////////////////////////////////////////////////////////////////////////////////////////
