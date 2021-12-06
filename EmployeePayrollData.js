class EmployeePayrollData {

    getName() { 
        return this._name; 
    }
    setName(name){ 
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name)) 
            this._name = name;
        else throw "Name is Incorrect" ;
    };

    getId() {return this.id};
    setId(id){
        if(id>0) this.id = id;
        else throw "ID is not valid"
    }

    getSalary() {return this.salary};
    setSalary(salary){
        if(salary>0) this.salary = salary;
        else throw "Salary is not valid"
    }

    getGender() {return this.gender};
    setGender(gender){
        if(gender=="M"||gender=="F") this.gender = gender;
        else throw "Invalid gender"
    }

    getStartDate() {return this.startDate};
    setStartDate(startDate){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = startDate == undefined ? 'undefined' :
                        startDate.toLocaleDateString('en-US', options);
        if((new Date(empDate)<=new Date()))
            this.startDate = empDate;
        else throw "Invalid Date"
    }

    toString(){
        return "id : "+this.getId()+", Name : "+this.getName()+", Salary : "+this.getSalary()+", gender : "+this.getGender()+
        ", Date : "+this.getStartDate();
    }
}

let employee1 = new EmployeePayrollData();
employee1.setId(1);
employee1.setName("Saran");
employee1.setSalary(30000);
employee1.setGender("M");
employee1.setStartDate(new Date('1/6/2021'));
console.log(employee1.toString());
try { 
    employee1.setName("dinesh");
    console.log(employee1.toString());
} catch (e) {
    console.error(e);
}
try { 
    employee1.setStartDate(new Date('12/7/2021'));
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