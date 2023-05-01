/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(arr){
    const newEmployee= {}
    newEmployee.firstName = arr[0]
    newEmployee.familyName = arr[1]
    newEmployee.title = arr[2]
    newEmployee.payPerHour = arr[3]
    newEmployee.timeInEvents = []
    newEmployee.timeOutEvents = []
    return newEmployee
}
//creates an array of employee records
function createEmployeeRecords(arr){
    const employees =[]
     arr.forEach(employee => employees.push(createEmployeeRecord(employee)));
    return employees
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 
 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createTimeInEvent(timeStamp){
    const timeArr = timeStamp.split(" ")
    const timeEvent = {}
    timeEvent.date = timeArr[0]
    timeEvent.hour = parseInt(timeArr[1])
    timeEvent.type = "TimeIn"
    this.timeInEvents.push(timeEvent)
    return this
}
function createTimeOutEvent(timeStamp){
    const timeArr = timeStamp.split(" ")
    const timeEvent = {}
    timeEvent.date = timeArr[0]
    timeEvent.hour = parseInt(timeArr[1])
    timeEvent.type = "TimeOut"
    this.timeOutEvents.push(timeEvent)
    return this
}
function hoursWorkedOnDate(dateStr){
    const timeOut = this.timeOutEvents.find(singleEvent => singleEvent.date === dateStr).hour
    const timeIn = this.timeInEvents.find(singleEvent => singleEvent.date === dateStr).hour
    return (timeOut-timeIn)/100
}
function wagesEarnedOnDate(dateStr){
    return hoursWorkedOnDate.call(this, dateStr)*this.payPerHour
}
function findEmployeeByFirstName(employees, name){
   return employees.find(employee => name===employee.firstName)
}
function calculatePayroll(employees){
    let sum = 0
     employees.forEach(employee => sum +=allWagesFor.call(employee))
    return sum 
}