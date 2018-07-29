/**
 * Created by Michael on 25/10/2017.
 * This time no story, no theory. The examples below show you how to write function accum:

     Examples:

     accum("abcd");    // "A-Bb-Ccc-Dddd"
     accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
     accum("cwAt");    // "C-Ww-Aaa-Tttt"
     The parameter of accum is a string which includes only letters from a..z and A..Z.
 */
function accum(s) {
    // your code
    var word = "";
    var letters = s.split("");

    for(var i = 0; i < letters.length; i++){
        for(var j = 0; j < i+1; j++){

            word+= j==0 ? letters[i].toUpperCase() : letters[i].toLowerCase();
        }
        word+= i < letters.length - 1 ? "-" : "";
    }
    return word;
}

console.log(accum("ZpglnRxqenU"));
