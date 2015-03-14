var TriangleClassifier = function(sideAElement, sideBElement, sideCElement) {

  this.classify = function(sideAElement, sideBElement, sideCElement) {
    if( sideAElement == sideBElement && sideBElement == sideCElement){
      return "equilateral";
    } else if ( sideAElement == sideBElement || sideAElement == sideCElement ){
      return "isosceles";
    } else if ( sideAElement != sideBElement && sideBElement != sideCElement ) {
      return "scalene";
    } else {
      return ArgumentError("Nope");
    }
  };
};
