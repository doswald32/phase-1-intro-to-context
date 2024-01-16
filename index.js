let employeeRecord = ["Dan", "Oswald", "Sales", 20]

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

console.log(createEmployeeRecord(employeeRecord));

let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ];

function createEmployeeRecords(arrayOfArrays) {
    let arrayOfObjs = [];
    for (let i = 0; i < arrayOfArrays.length; i++) {
        let obj = createEmployeeRecord(arrayOfArrays[i]);
        arrayOfObjs.push(obj);
    };
    return arrayOfObjs;
};

console.log(createEmployeeRecords(twoRows));

function createTimeInEvent() {
    
}