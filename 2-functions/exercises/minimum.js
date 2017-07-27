// STORY
/*
	MINIMUM
	===
	The previous chapter introduced the standard function Math.min that re
	turns its smallest argument. We can do that ourselves now. Write a
	function min that takes two arguments and returns their minimum.
*/

function getMin(n1, n2){
  if(n1 < n2)
    return n1;
  else return n2;
}