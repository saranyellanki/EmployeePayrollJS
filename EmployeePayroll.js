const ABSENT = 0;
const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIMR_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 20;
const WORKING_HOURS = 160;
let totalWage = 0;
let empHrs = 0;
let totalEmpHrs=0;
let empDailyWageArray = new Array();
let partTimeCount = 0;
let fullTimeCount = 0;
let absentCount = 0;
let totalWorkingDays = 0;
while (totalEmpHrs<WORKING_HOURS && totalWorkingDays<WORKING_DAYS){
    totalWorkingDays++;
    let attendence = Math.floor(Math.random()*3);
    empHrs = workingHrs(attendence);
    totalEmpHrs += workingHrs(attendence);
    empDailyWageArray.push(calculateWage(empHrs));
}
function workingHrs(attendence){
    switch(attendence){
        case PART_TIME :
            partTimeCount++;
            return PART_TIME_HOURS;
        case FULL_TIME :
            fullTimeCount++;
            return FULL_TIMR_HOURS;
        default :
            absentCount++;
            return 0;
    }
}
function calculateWage(empHrs){
    return WAGE_PER_HOUR * empHrs
}
console.log("Employee Present Part time = "+partTimeCount+" days");
console.log("Employee Present Full time = "+fullTimeCount+" days");
console.log("Employee Absent = "+absentCount+" days");
console.log("Total Days : "+totalWorkingDays+" ,Total hours : "+totalEmpHrs);
console.log("Total Wage for a month = "+empDailyWageArray.reduce((totalWage,dailyWage) => totalWage+dailyWage));
