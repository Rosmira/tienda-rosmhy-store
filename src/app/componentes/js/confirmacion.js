miappRosmhy.controller('confirmacion',function($scope, carritodeCompra){
    $scope.total = carritodeCompra.total;
    $scope.productos = carritodeCompra.productos;
});