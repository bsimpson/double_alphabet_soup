dictionary = File.open('/usr/share/dict/web2','r').to_a
# includes \n character which is chopped off later
dictionary.keep_if {|word| word.length >= 7}
dictionary = dictionary.map {|word| word.chop.downcase}

group1 = ('a'..'z').to_a
group2 = ('a'..'z').to_a

grid = [
  #"malt deo raph".split("")
  #"anim tio outl".split("")
  "conn ocu aria".split("")
]

grid.each do |row|
  group1.each do |letter1|
    group2.each do |letter2|
      row[4] = letter1
      row[8] = letter2

      dictionary.each do |word|
        if matches = row.join.match(word)
          puts "Found match: " + matches[0]
        end
      end
    end
  end
end
