function Color(random) {
  this.r = random? randomMono() : 0;
  this.g = random? randomMono() : 0;
  this.b = random? randomMono() : 0;

  function randomMono(){
    return Math.floor(Math.random()*256);
  }
}

Color.prototype.toHex = function() {
  var hex = '#';
  [this.r, this.g, this.b].forEach(function(color){
    var num = color.toString(16);
        prefix = (num.length == 1)? '0' : '';
    hex += (num + prefix);
  });
  return hex;
};




angular.module('colors', [])
  .controller('BodyCtrl', function($scope){
    $scope.colors = [];
    for (var i = 0; i < 100; i++) {
      addBox();
    };

    function addBox(){
      var color = new Color(true);
      $scope.colors.push(color.toHex());
    }

  });
