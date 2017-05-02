module.exports = function(s1, s2) {
	var sim = [];
   for (i = 0; i < s1.length; i++) {
		for (j = 0; j < s2.length; j++) {
			if (s1[i] == s2[j]) {
				sim.push(s1[i]);
			}
	   }
   }
	return (sim);
}
