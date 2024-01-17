function createEmployeeRecord(array) {
    let obj = {
        "firstName": array[0],
        "familyName": array[1],
        "title": array[2],
        "payPerHour": array[3],
        "timeInEvents": [],
        "timeOutEvents": [],
    };
    return obj;
};

function createEmployeeRecords(arrayOfArrays) {
    let arrayOfObjs = [];
    for (let i = 0; i < arrayOfArrays.length; i++) {
        let obj = createEmployeeRecord(arrayOfArrays[i]);
        arrayOfObjs.push(obj);
    };
    return arrayOfObjs;
};

function createTimeInEvent(eRecord, date) {
    let timeInEvent = {
        "type": "TimeIn",
        "hour": parseInt(date.slice(-4)),
        "date": date.slice(0, 10)
    };
    eRecord.timeInEvents.push(timeInEvent);
    return eRecord;
};

function createTimeOutEvent(eRecord, date) {
    let timeOutEvent = {
        "type": "TimeOut",
        "hour": parseInt(date.slice(-4)),
        "date": date.slice(0, 10)
    };
    eRecord.timeOutEvents.push(timeOutEvent);
    return eRecord;
};

function hoursWorkedOnDate(eRecord, date) {
    let timeInEvent = eRecord.timeInEvents.find(event => event.date === date);
    let timeOutEvent = eRecord.timeOutEvents.find(event => event.date === date);
  
    let timeOut = timeOutEvent.hour;
    let timeIn = timeInEvent.hour;
  
    let hours = (timeOut - timeIn) / 100;
    return hours;
  };

  function wagesEarnedOnDate(eRecord, date) {
    let hours = hoursWorkedOnDate(eRecord, date);
    let payRate = parseInt(eRecord.payPerHour);
    let pay = hours * payRate;
    return pay;
  };

  function allWagesFor(eRecord) {
    let totalWages = 0;
    for (let i = 0; i < eRecord.timeInEvents.length; i++) {
        let daysWage = wagesEarnedOnDate(eRecord, eRecord.timeInEvents[i].date);
        totalWages += daysWage;
    };
    return totalWages;
  };

//   function calculatePayroll(array) {
//     let grandTotal = array.forEach((employee) => allWagesFor(employee));
//     return grandTotal;
//   };

  function calculatePayroll(array) {
    let grandTotal = array.reduce((total, employee) => total + allWagesFor(employee), 0);
    return grandTotal;
  }