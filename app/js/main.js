var model = 'Hello AngularJS!';
var myApp = angular.module('myApp', []);

myApp.controller('myAppCtrl', function($scope) {
    $scope.message = model;
    $scope.num = 0;
    $scope.operations = [
        {op: 'Decrease', val: 'decrease'},
        {op: 'Increase', val: 'increase'}
    ]
    $scope.items = [
        {per: '10', val: 0.9, val2: 10},
        {per: '15', val: 0.85, val2: 15},
        {per: '20', val: 0.8, val2: 20},
        {per: '25', val: 0.75, val2: 25},
        {per: '30', val: 0.7, val2: 30},
        {per: '35', val: 0.65, val2: 35},
        {per: '40', val: 0.6, val2: 40},
        {per: '45', val: 0.55, val2: 45},
        {per: '50', val: 0.5, val2: 50},
        {per: '55', val: 0.45, val2: 55},
        {per: '60', val: 0.4, val2: 60},
        {per: '65', val: 0.35, val2: 65},
        {per: '70', val: 0.3, val2: 70},
        {per: '75', val: 0.25, val2: 75},
        {per: '80', val: 0.2, val2: 80},
        {per: '85', val: 0.15, val2: 85},
        {per: '90', val: 0.1, val2: 90},
        {per: '100', val: 0, val2: 100}
    ]
    $scope.selected = $scope.items[0];
    $scope.mode = $scope.operations[0];
    $scope.themes = [
        {name: 'Light theme', value: 'light'},
        {name: 'Dark theme', value: 'dark'}
    ]
    $scope.selectedTheme = 'light';
    $scope.clear = function() {
        $scope.num = '';
    }
})
