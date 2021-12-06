class EmployeePayrollData {
   
    constructor(id,name,salary,gender,startDate){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender
        this.startDate = startDate;
    }

    getName() { return this._name };
    setName(name){ 
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name)) 
            this._name = name;
        else throw "Name is Incorrect" ;
    };

    toString(){
        const options = { year: 'numeric', month : 'long', day : 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" :
        this.startDate.toLocaleDateString("en-US",options);
        return "id : "+this.id+", Name : "+this.name+", Salary : "+this.salary+", gender : "+this.gender+", Date : "+empDate;
    }
}

let employee1= new EmployeePayrollData(1,"Saran",30000);
console.log(employee1.toString());
try { 
    employee1.setName("dinesh");
    console.log(employee1.toString());
} catch (e) {
    console.error(e);
}
let employee2 = new EmployeePayrollData(2,"Mahesh",50000,"M",new Date());
console.log(employee2.toString());