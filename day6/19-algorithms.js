//Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

var a = [2, 47, 8, 3, 48, 23, 49,33,9,88,9,38,3];
var r = [];
for (var i = 0; i < a.length -1; i++) {
    r[i] = a[i] < a[i+1] ? a[i] :a[i+1];
}

console.log(r.reduce((acc,item) => acc > item ? acc : item));

function palindromic() {
    //longest palindromic substring

    var str = "dsaeabcddcbasdndll";

    for (i = 0; i < str.length; i++) {
        console.log(getPalindrome(str, i));
    }

//console.log(getPalindrome(str,7,1));

//test();

    function getPalindrome(str, mid) {
        var i = 1;
        var offset = 0;

        if (str[mid] == str[mid + 1]) {
            offset++;
        }

        if (str[mid] == str[mid - 1]) {
            offset--;
        }

        while (mid + offset + i < str.length && str[mid - i] == str[mid + offset + i]) {
            i++;
        }

        return str.substring(mid - (i - 1), mid + i + offset);

    }

    function test() {

        if (getPalindrome("a", 0) == "a") {
            console.log("Pass1");
        } else {
            console.log("fail1");
        }

        if (getPalindrome("aa", 0) == "aa") {
            console.log("pass2");
        } else {
            console.log("fail2");
        }

        if (getPalindrome("aa", 1) == "aa") {
            console.log("pass2");
        } else {
            console.log("fail2");
        }

        if (getPalindrome("aaa", 1) == "aaa") {
            console.log("Pass3");
        } else {
            console.log("fail3");
        }

        if (getPalindrome("ab", 0) == "a") {
            console.log("Pass4");
        } else {
            console.log("fail4");
        }

        if (getPalindrome("dsaeabcdcbasdndll", 7) == "abcdcba") {
            console.log("Pass5");
        } else {
            console.log("fail5");
        }

        if (getPalindrome("dsaeabcddcbasdndll", 7) == "abcddcba") {
            console.log("Pass6");
        } else {
            console.log("fail6");
        }

        if (getPalindrome("dsaeabcddcba", 7) == "abcddcba") {
            console.log("Pass6");
        } else {
            console.log("fail6");
        }
        if (getPalindrome("abcdcbasdndll", 3) == "abcdcba") {
            console.log("Pass5");
        } else {
            console.log("fail5");
        }
        if (getPalindrome("abcddcbasdndll", 3) == "abcddcba") {
            console.log("Pass5");
        } else {
            console.log("fail5");
        }
    }
}