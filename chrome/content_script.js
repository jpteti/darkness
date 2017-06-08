// I (Editor's Note: J-P) stole all this stuff from here: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

var shortPhrases = [
  "Profundity Dies in Slogans",
  "Integrity Dies in WaPo",
  "Daffodils Die in Cold Weather",
  "Jack Kennedy Died in Dallas",
  "Devovfefy Dies in Darkness",
  "Decency Dies in DC",
  "Here's How Bernie Can Still Win",
  "Democracy Dies in Darkness™",
  "Dignity Dies in Newsrooms",
  "Please Subscribe. Please.",
  "Poor Jeb!",
  "Please Clap",
  "Life is pain. Enjoy Arby’s™.",
  "Only a Sith Deals in Absolutes",
  "It's Time For Some Game Theory",
  "The Post-est With The Most-est",
  "The Night is Dark and Full of Terrors",
  "Hey Now, You’re An All-Star!",
  "Franz Ferdinand Dies in Serbia"
];

var bigMastheadOnlyPhrases = [
  "Democracy Dies in Darkness, And So Do Plants.",
  "According to all known laws of aviation, there is no way a bee should be able to fly.",
  "Somebody Once Told Me The World Is Gonna Roll Me",
  "(Wake Me Up!) Wake Me Up Inside! (I Can’t Wake Up!)",
  "I Hurt Myself Today To See If I Still Feel",
  "What Have I Become, My Sweetest Friend?",
  "17 Shocking Things Democracy Dies In",
  "Democracy Dies in Darkness But I Got This Cute Little Night-Light at Amazon for Just $4.99 and It’s Free Shipping Because I Have Prime",
  "This is the way the world ends / Not with a bang, but with democracy dying in darkness"
];

var firstTry = document.getElementsByClassName('masthead-tagline');

//walk(firstTry);

if (firstTry.length === 0) {
  walk(document.getElementsByClassName('site-header')[0], shortPhrases);  
} else {
  var bothPhrases = shortPhrases.concat(bigMastheadOnlyPhrases);
  walk(firstTry[0], bothPhrases);
}

//walk(document.getElementsByClassName('masthead-tagline')[0]);

walk(document.getElementsByClassName('site-header')[0]);
//walk(document.body);

function walk(node, phrases) {
	// I (Editor's Note: Steven Frank) stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child, phrases);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node, phrases);
			break;
	}
}

function handleText(textNode, phrases)  {
	var v = textNode.nodeValue;
  var phraseCeiling = phrases.length;
  var which = Math.floor(Math.random()*phraseCeiling);
	
	v = v.replace(/\bDemocracy Dies in Darkness\b/g, phrases[which]);
	
	textNode.nodeValue = v;
}
