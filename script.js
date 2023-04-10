// complete the given function

function palindrome(str){
let Str=str.toLowerCase();
Str.replaceAll(" ","");
let i=0;
let j=Str.length-1;
while(i<j){
	if(Str.charAt(i)!=Str.charAt(j)){
		return false;
	}
	i++;
	j--;
}
	return true;
}
module.exports = palindrome
