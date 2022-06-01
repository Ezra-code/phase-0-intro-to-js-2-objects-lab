// Write your solution in this file!
let employee = {
    name:"Ezra",
    streetAddress:"Kstreet"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee}   
    newObj[key] = value;
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const delObj = {...employee}
    delete delObj[key]
    return delObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
