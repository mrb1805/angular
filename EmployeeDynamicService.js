function EmployeeDynamicService($http) {

	var myObject = {};
	var Employees = [];

	myObject.GetEmployees =  function(){
	return $http.get("http://trainitservice.azurewebsites.net/api/Employee")
	.then(function(r){
			for (i = 0;  i < r.data.length; i++) {
				var Emp1 = {};
				Emp1.fname = r.data[i].FirsName;
				Emp1.lname = r.data[i].LastName;
				Emp1.salary = r.data[i].Salary;
				Employees.push(Emp1);
			}
			return Employees; 
		}); 
	}
	
	myObject.Add = function(e) {
		Employees.push(e);
    	return Employees;
	}

	return myObject;
}
