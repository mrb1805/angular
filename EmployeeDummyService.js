function EmployeeDummyService() {

    var emp1 = { "fname": "ABC", "lname": "X", "salary": 245 };
    var emp2 = { "fname": "DEF", "lname": "Y", "salary": 100000 };
    var emp3 = { "fname": "GHI", "lname": "Z", "salary": 12 };

    var Employees = [emp1, emp2, emp3];

    var AddFunction = function(e){
    	Employees.push(e);
    	return Employees;
    }
    return {
    	Employees:Employees,
    	Add:AddFunction
    }


/*
    var myObject={}
    myObject.Add = function(e){
        Employees.push(e);
        return Employees;
    }
    myObject.Employees=function(){
        {
    var emp1 = { "fname": "ABC", "lname": "X", "salary": 245 };
    var emp2 = { "fname": "DEF", "lname": "Y", "salary": 100000 };
    var emp3 = { "fname": "GHI", "lname": "Z", "salary": 12 };
     var Employees = [emp1, emp2, emp3];
     return Employees; //Call using EmployeeService.Employees();
    };

*/

   
}
