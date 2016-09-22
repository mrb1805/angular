MyModule.controller("MyController", function ($scope,EmployeeService) {

    $scope.Employees = EmployeeService.Employees;


    $scope.IsAddNew = false;

    $scope.AddNew = function () {
        $scope.IsAddNew = true;
    }


    //***************************************************************************************************************


    $scope.AddNewController = function ($scope) {

        $scope.Save = function () {
            //alert('a');
            EmployeeService.Add(angular.copy($scope.E));

            $scope.$parent.IsAddNew = false;
        }


        $scope.CancelAdd = function () {
            //alert("b")
            $scope.$parent.IsAddNew = false;
        }
    }

});
