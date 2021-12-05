const ABSENT = 0;
const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIMR_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
function calculateWage(empHrs){
    return WAGE_PER_HOUR * empHrs
}
function totalEmpWage(){
    let attendence = Math.floor(Math.random()*3);
    switch(attendence){
        case PART_TIME : 
            console.log("Employee is Present PART TIME");
            return calculateWage(PART_TIME_HOURS);
        case FULL_TIME : 
            console.log("Employee is Present FULL TIME");
            return calculateWage(FULL_TIMR_HOURS);
        default : 
            console.log("Employee is Absent");
            return ABSENT;
    }
}
console.log("Total Wage of Employee = "+totalEmpWage());