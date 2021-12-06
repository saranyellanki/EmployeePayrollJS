class EmployeePayrollData {

    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getId(){ return this._id };
    setId(id) { this.id = id };
    getSalary() { return this._salary};
    setSalary(salary) {this.salary = salary}
    getName() { return this._name };
    setName(name){ this.name = name };

    toString(){
        return "id : "+this.id+", Name : "+this.name+", Salary : "+this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Saran",30000);
console.log(employeePayrollData.toString());