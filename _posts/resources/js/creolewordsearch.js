var creolegrid = [
	['N',	'N',	'E',	'D',	'O',	'K',	'C',	'H',	'A',	'T',	'L',	'U',	'O',	'P',	'A',	'Z',	'É',	'L',	'P'],
	['G',	'S',	'Ò',	'L',	'S',	'O',	'U',	'W',	'I',	'B',	'È',	'F',	'É',	'P',	'K',	'P',	'É',	'A',	'K'],
	['I',	'M',	'O',	'U',	'T',	'O',	'N',	'K',	'O',	'W',	'M',	'B',	'W',	'Y',	'A',	'Ò',	'N',	'V',	'Ò'],
	['T',	'M',	'K',	'W',	'A',	'P',	'O',	'Ò',	'K',	'W',	'A',	'É',	'O',	'N',	'B',	'U',	'K',	'T',	'B'],
	['Y',	'B',	'T',	'A',	'Z',	'A',	'A',	'F',	'E',	'O',	'S',	'D',	'T',	'U',	'O',	'I',	'I',	'D',	'O'],
	['Ò',	'É',	'L',	'P',	'L',	'I',	'M',	'N',	'B',	'O',	'K',	'O',	'E',	'T',	'W',	'W',	'J',	'O',	'W'],
	['K',	'L',	'S',	'A',	'K',	'N',	'N',	'K',	'N',	'A',	'U',	'I',	'A',	'N',	'B',	'I',	'X',	'W',	'A'],
	['Ò',	'Y',	'È',	'Z',	'P',	'S',	'E',	'V',	'Z',	'F',	'L',	'H',	'Y',	'A',	'N',	'M',	'K',	'A',	'N'],
	['L',	'É',	'P',	'É',	'O',	'E',	'O',	'Y',	'O',	'A',	'C',	'E',	'K',	'A',	'A',	'K',	'M',	'D',	'M'],
	['Ò',	'M',	'A',	'N',	'S',	'L',	'N',	'U',	'H',	'N',	'N',	'N',	'N',	'N',	'J',	'A',	'È',	'L',	'Y'],
	['M',	'K',	'N',	'K',	'A',	'I',	'Y',	'A',	'E',	'C',	'O',	'N',	'N',	'N',	'I',	'Y',	'L',	'L',	'É'],
	['H',	'M',	'A',	'N',	'W',	'É',	'K',	'W',	'N',	'H',	'N',	'I',	'D',	'W',	'N',	'W',	'N',	'È',	'K'],
	['O',	'A',	'L',	'B',	'N',	'I',	'H',	'W',	'C',	'N',	'K',	'E',	'B',	'O',	'P',	'A',	'A',	'W',	'A'],
	['U',	'K',	'Y',	'I',	'W',	'C',	'B',	'O',	'I',	'O',	'A',	'I',	'J',	'I',	'L',	'T',	'K',	'È',	'L'],
	['M',	'A',	'O',	'V',	'A',	'I',	'K',	'I',	'U',	'Y',	'L',	'K',	'J',	'T',	'V',	'I',	'É',	'T',	'M'],
	['A',	'K',	'N',	'M',	'V',	'J',	'T',	'G',	'C',	'I',	'É',	'O',	'Z',	'B',	'É',	'T',	'L',	'U',	'A'],
	['I',	'N',	'I',	'F',	'L',	'A',	'M',	'O',	'K',	'H',	'N',	'T',	'Ò',	'T',	'I',	'W',	'É',	'O',	'S'],
	['K',	'W',	'A',	'B',	'S',	'O',	'U',	'W',	'I',	'J',	'A',	'K',	'O',	'T',	'O',	'N',	'P',	'T',	'O'],
	['A',	'Y',	'I',	'W',	'B',	'A',	'M',	'C',	'H',	'O',	'U',	'V',	'A',	'L',	'H',	'C',	'I',	'B',	'N']];

var creolewords = ['KWAB', 'TÒTI', 'MANNIKOU', 'TOUTWÈL', 'VÈ', 'BALENN', 'LAPEN', 'TAZA', 'KOKIYAJ','KANNA', 'KÒF', 'KÒK', 'PÉLÉKAN', 'MÈL', 'WÉTJEN', 'KÒBO',
    'MABWIYA', 'CHOUVAL', 'WAT', 'MAKAK', 'LYON', 'VOLAN', 'SIKWIYÉ', 'KWAPO', 'KODENN', 'CHAT','POUL', 'LÉZA', 'SÈPAN', 'CHATOU', 'PAN',
    'WADENN', 'MÒLÒKÒY', 'SOUWI', 'HOUMA', 'KILIBWI', 'CHYEN', 'SÒLSOUWI', 'WANMYÉ', 'PWÉSON', 'MOUTON', 'DOWAD', 'PANTOUFOUYÉ', 'PIJON', 'BICH', 'BÉLYÉ',
    'MWENNSON', 'ZANNDOLI', 'JIBYÉ', 'BOUWIK', 'KABWIT', 'MACHWEN', 'MALFINI', 'JAKO', 'BÈF','TIG','KOCHON', 'ZÉ', 'KAY', 'KWIBICH' ];

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

var wordnames = getRandom(creolewords, 5)

ws = new WordSearch({
        "grid": creolegrid, // Your grid to search
        "words": wordnames, // The list of words to find
        "parentId": "mysearchtask",
        "onFindWord": function() { // When a word is found...
          console.log(this.getScore()); // Log score
          console.log(this.getTiming()); // Log time to find each word
        } 
    });