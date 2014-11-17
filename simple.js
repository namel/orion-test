// this is simple.js
// created on Orion



function flip(s,p1,p2)
{
	if (p1 === p2) return s;
	var c = s[p1];
	s[p1] = s[p2];
	s[p2] = c;
	return s;
}

function permute(s, position)
{
	// check if we reached the end
	if ((position + 1) === s.length) {
		console.log(s);
		return;
	}
	
	// iterate over all possibilities for current position
	var new_s = '';
	var p = 0;
	for (p=position; p<s.length; p++) {
		new_s = flip(s, position, p);
		permute(new_s, position+1);
	}
}

function main()
{
	permute('abcd', 0);
}

main();