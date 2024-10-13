class List<T> {
    data: T;
    next: List<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null; 
    }
}

class LinkedList<T> {
    head: List<T> | null; 

    constructor() {
        this.head = null; 
    }

    add(data: T): void {
        const newNode = new List(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(data: T): void {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    find(data: T): List<T> | null {
        let current = this.head;

        while (current) {
            if (current.data === data) {
                return current; 
            }
            current = current.next;
        }

        return null; 
    }

    printList(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
