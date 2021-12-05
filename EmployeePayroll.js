const ABSENT = 0;
const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIMR_HOURS = 8;
const WAGE_PER_HOUR = 20;
let totalEmpWage = 0;
let attendence = Math.floor(Math.random()*3);
switch(attendence){
    case PART_TIME : 
        console.log("Employee is Present PART TIME");
        totalEmpWage = PART_TIME_HOURS*WAGE_PER_HOUR;
        break;
    case FULL_TIME :
        console.log("Employee is Present FULL TIME");
        totalEmpWage = FULL_TIMR_HOURS*WAGE_PER_HOUR;
        break;
    default : 
        console.log("Employee is Absent");
}
console.log("Total Wage = "+totalEmpWage);