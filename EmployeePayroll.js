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
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let partTimeCount = 0;
let fullTimeCount = 0;
let absentCount = 0;
let totalWorkingDays = 0;
while (totalEmpHrs<WORKING_HOURS && totalWorkingDays<WORKING_DAYS){
    let attendence = Math.floor(Math.random()*3);
    empHrs = workingHrs(attendence);
    totalEmpHrs += empHrs;
    empDailyHrsMap.set(totalWorkingDays,empHrs);
    empDailyWageMap.set(totalWorkingDays,calculateWage(empHrs));
    empDailyWageArray.push(calculateWage(empHrs));
    totalWorkingDays++;
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
let day = 0;
console.log("Employee Present Part time = "+partTimeCount+" days");
console.log("Employee Present Full time = "+fullTimeCount+" days");
console.log("Employee Absent = "+absentCount+" days");
console.log("Total Days : "+totalWorkingDays+" ,Total hours : "+totalEmpHrs);

//UC 7B Using array map helper function
let mapArr = empDailyWageArray.map(dailyWage => "Day "+day++ +" Wage = "+dailyWage)
console.log(mapArr);

//UC 7C using filter method
console.log("Days when only full time Wage is earned by filter method");
let fullDayWage = mapArr.filter(dailyWage => dailyWage.includes(160));
console.log(fullDayWage);

//UC 7D find first occurrence when full time Wage was earned
console.log(mapArr.find(dailyWage => dailyWage.includes(160)));

//UC 7E check if every element of full time wage is holding full time wage only
console.log(fullDayWage.every(dailyWage => dailyWage.includes(160)));

//UC 7F Check if any part time Wage
console.log(mapArr.some(dailyWage => dailyWage.includes(80)));

//UC 7G Find number of days employee worked
let workingDays = empDailyWageArray.filter(dailyWage => dailyWage>0);
console.log("Number of days Employee worked = "+workingDays.length);

//UC 7A Total wage calculated by reduce function
console.log("Total Wage for a month = "+empDailyWageArray.reduce((totalWage,dailyWage) => totalWage+dailyWage));

//UC8 Map Functions
console.log("Total Wage for a month = "+Array.from(empDailyWageMap.values()).reduce((totalWage,dailyWage) => totalWage+dailyWage));