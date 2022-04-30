export class Player {
    name: string;
    assignedName: string;
  
    constructor(name: string, assignedName: string) {
      this.name = name;
      this.assignedName = assignedName;
    }
  
    getAssignedName() {
      return this.assignedName;
    }
  
    setAssignedName(item: string) : void {
      this.assignedName = item;
    }
  
    getName() : string {
      return this.name;
    }
  
    displayDetails() : string {
      return this.name + ' has ' + this.assignedName;
    }
  }
  