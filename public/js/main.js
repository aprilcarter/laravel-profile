var containerW = $(".container").width();
var containerH = $(".container").height();

startNodePositions("#center-node");
function startNodePositions(node) {
  if(node == "#center-node") {
    TweenMax.set(node, {
      xPercent: -50,
      yPercent: -50
    });
  } else {
    //Create logic to loop through the nodes and position them evenly around the center without rotating them, and without going off screen, possibly to be extracted to an external funtion.
      //determine whether the node will go on the top or bottom based on how many nodes there are total
      //position at a certain distance vertically from the center depending on the width and height of the container
      //position at a certain distance from the left or right depending on what element it is in the list
      //reference http://jsfiddle.net/yxVkk/914/ to see if you can make an arc guide so the odd-numbered side can be aligned on an arc
  }
}