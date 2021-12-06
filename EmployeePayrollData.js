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

    setId(id){
        if(id>0) this._id = id;
        else throw "ID is not valid"
    }

    setSalary(salary){
        if(salary>0) this._salary = salary;
        else throw "Salary is not valid"
    }
    setGender(gender){
        if(gender=="M"||gender=="F") this._gender = gender;
        else throw "Invalid gender"
    }
    setStartDate(startDate){
        let currentDate = new Date();
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const empDate = this.currentDate == undefined ? 'undefined' : currentDate.toLocaleDateString('en-US', options);
        currentDate = new Date(empDate);
        let joinDate = startDate;
        if (joinDate <= currentDate)
            this.startDate = startDate;
        else throw 'Invalid Date'
    }

    toString(){
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const empDate = this.startDate == undefined ? 'undefined' :
        this.startDate.toLocaleDateString('en-US', options);
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
try { 
    employee1.setId(-1);
    console.log(employee1.toString());
} catch (e) {
    console.error(e);
}
try { 
    employee1.setSalary(-20000);
    console.log(employee1.toString());
} catch (e) {
    console.error(e);
}
try { 
    employee1.setGender("Male");
    console.log(employee1.toString());
} catch (e) {
    console.error(e);
}
let employee2 = new EmployeePayrollData(2,"Mahesh",50000,"M",new Date('1/6/2021'));
console.log(employee2.toString());
try {
    employee2.setStartDate('13/6/2021');
    console.log(employee2.toString());
} catch (e) {
    console.error(e);
}
