// Arrays: Sorting Arrays of Objects

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'java' }
    ];

console.log(courses);

courses.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
    }); 

// NOTE: Once sorted you might notice that the capital 'J' in 'JavaScript' comes before the Capital 'N' in 'Node.js'
// but the lowercase 'j' in 'javaScript' comes after the capital 'N' in 'Node.js'
// this is beause the sorting is using the numerical values of the characters in the ASCII table
// Seen in the redacted table below the letters N, J & j in numerical order is as follows:
// 74 = J
// 78 = N
// 106 = j

// Dec  Char                           Dec  Char     Dec  Char     Dec  Char
// -------------------------------------------------------------------------
// --------------------------------Redacted---------------------------------
//   7  BEL (bell)                      39  '         71  G        103  g
//  10  LF  (NL line feed, new line)    42  *         74  J        106  j
//  11  VT  (vertical tab)              43  +         75  K        107  k
//  12  FF  (NP form feed, new page)    44  ,         76  L        108  l
//  13  CR  (carriage return)           45  -         77  M        109  m
//  14  SO  (shift out)                 46  .         78  N        110  n
// --------------------------------Redacted---------------------------------


// View the full ascii table here: https://www.asciitable.com/
// ascii is an acronym for - American Standard Code for Information Interchange