class Node{
    constructor(element){
        this.element = element;
        this.next = undefined;
    }
}

class LinkedList{
    constructor(equalsFn=defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    defaultEquals(a,b){
        return a === b;
    }

    push(element){
        const node = new Node(element);
        let current;
        if (this.head == null){
            this.head = node;
        } else {
            current = this.head;
            while(current.next != null){
               current = current.next;
            }
            current.next = node;
        }
        this.count++;
    };
    removeAt(index){
        if (index>=0 && index < this.count){
            let current = this.head;
            if (index === 1){
                this.head = current.next;
            } else {
                let previous;
                for (let i=0;i<index;i++){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    };

    getElementAt(index){
        if (index>=0 && index<=this.count){
            let node = this.head;
            for (let i=0;i<index && node!= null;i++){
                node =node.next;
            }
            return node;
        }
        return undefined;
    };

    insert(element, index){
        if (index>=0 && index<=this.count){
            const node = new Node(element);
            if(index===1){
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previus = this.getElementAt(index - 1);
                const current = previus.next;
                node.next = current;
                previus.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    };
   
    indexOf(element){
        let current =this.head;
        for(let i=0;i<this.count && current!=null;i++){
            if(this.equalsFn(element, current.element)){
                return i;
            }
            current = current.next;
        }
        return -1;

    };
   
    isEmpty(){
        return this.size() === 0;
    };
    size(){
        return this.count;
    };
    getHead(){
        return this.head;
    }; //Façam esse também!!!
   
    remove(element){
        const index = this.indexOf(element);
        return this.removeAt(index);
    };
    toString(){
        if (this.head==null){
            return '';
        }
        let objString = `{this.head.element}`;
        let current = this.head.next;
        for(let i = 1; i<this.size() && current != null; i++){
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    };
} 