var size = 8;
var pattern = '';
for(var i=0; i<size; i++){
	for(var j=0; j<size; j++){
  	if((i+j) % 2 == 0) {
    	pattern += " ";
    } else {
    	pattern += "#";
    }
  }
  pattern += '\n';
}
console.log(pattern)