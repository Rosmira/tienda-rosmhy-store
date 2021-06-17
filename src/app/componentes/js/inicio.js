miappRosmhy.controller('inicio' , function ($scope, $location, carritodeCompra){
    $scope.productos = [
        {
            id: 1,
            nombre:"Tenis",
            descripcion: "misisosjonsonsnsionisnsisni",
            precio: 10,
            imagen: "../../../assets/tenis1.png",
            ocultar: true
        },
        {
            id: 2,
            nombre:"Tenis",
            descripcion: "misisosjonsonsnsionisnsisni",
            precio: 10,
            imagen: "../../../assets/Tenis2.png"
        },
        {
            id: 3,
            nombre:"Tenis",
            descripcion: "misisosjonsonsnsionisnsisni",
            precio: 10,
            imagen: "../../../assets/Tenis3.png"
        }
    ]
    $scope.carrito = [];

    $scope.comprar = function(_item){
        _item.ocultar = true;
        $scope.carrito.push(_item);
        carritodeCompra.productos = $scope.carrito;
    }
    $scope.total = function(){
        var total = 0;
        for(item of $scope.carrito){
            total += item.precio;
        }
        carritodeCompra.total = total;
        return total;
    }
    $scope.finalizar = function(){
        $location.path("/confirmacion");
    }
});