dictionary = require('/Users/bsimpson/dev/double_alphabet_soup/dictionary.js').dictionary

function foo() {
  // dictionary defined in dictionary.js

  var group1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var group2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var grid = [
   ["m","a","l","t","","d","e","o","","r","a","p","h"]
  ];

  for (x=0;x<grid.length;x++) {
    var row = grid[x];

    for(y=0;y<group1.length;y++) {
      var letter1 = group1[y];

      for(z=0;z<group2.length;z++) {
        var letter2 = group2[z];

        row[4] = letter1;
        row[8] = letter2;

        strRow = row.join("");

        for(zz=0;zz<dictionary.length;zz++) {
          var word = dictionary[zz];

          if (matches = strRow.match(word)) {
            throw("Found match: " + matches[0]);
          }
        }
      }
    }
  }
}

foo()
