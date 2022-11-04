/*OBJAŚNIENIA
inCleartext [tekst jawny].html
inCipher    [szyfr]      .html
cleartext   [tekst jawny].js
Cipher      [szyfr]      .js

q - litera, x - cyfra

NAZEWNICTWO: 
    function funQ...()
    const Q...
    var q...

    tablice szyfrowe EnQ...
    tablice tekstowe DeQ...

XXX - lowercases LTN [małe LTN]
4XX - lowercases PL [małe PL]
XX4 + 444 - trio digits [cyfry zwykłe]
XX + 42 - duo digits [cyfry w number locku]

4X4 - separators [separatory]
X4X - brackets [nawiasy]

X44 - [przełączniki]: 344 - SHIFT; 144, 244 - wolne
44X - [locki]

323XXX - special signs [znaki specjalne]

344XXX - capital letters LTN [wielkie LTN]
3444XX - capital letters PL [wielkie PL]

*/

function funDecryption()
{
    const EnBasic = [
        //separators
        "414","424","434",
        //lowercases LTN
        "111","112","113","121","122","123","131","132","133","211","212","213","221","222","223","231","232","233","311","312","313","321","322","331","332","333",
        //lowercases PL
        "411","412","413","421","422","423","431","432","433",
        //trio digits
        "114","124","134","214","224","234","314","324","334","444",
        //brackets
        "141","142","143","241","242","243","341","342","343"];

    const EnSpecialSigns = ["111","112","113","121","122","123","131","132","133","211","212","213","221","222","223","231","232","233","311","312","313","321","322","331","332","333"];

    const EnDuoDigits = ["11","12","13","21","22","23","31","32","33","42"];

    const EnCapitalLetters = [
        //LTN
        "111","112","113","121","122","123","131","132","133","211","212","213","221","222","223","231","232","233","311","312","313","321","322","331","332","333",
        //PL
        "411","412","413","421","422","423","431","432","433"];

    const Cipher = document.getElementById("inCipher").value;
    const CipherLength = Cipher.length;

    //ERRORS
    var errorStatus = 0;
    var errorTrios = "";

    var cleartext = "";
    var i = 0;
    var j = 1;
    var k = 2;
    var id = 0;
    
        for(i; i < CipherLength-2; i+=3)
        {
            if(j < CipherLength-1)
            {
                if(k < CipherLength)
                {
                    var trio = Cipher[i]+Cipher[j]+Cipher[k];
                }
            }
            if(trio == "323") //SHIFT SPECIAL
            {
                i+=3;
                j+=3;
                k+=3;
                trio = Cipher[i]+Cipher[j]+Cipher[k];
                id = EnSpecialSigns.indexOf(trio);
                cleartext += funDeSpecialSigns(id);
            }
            else if(trio == "344") //SHIFT CAPS
            {
                i+=3;
                j+=3;
                k+=3;
                trio = Cipher[i]+Cipher[j]+Cipher[k];
                id = EnCapitalLetters.indexOf(trio);
                cleartext += funDeCapitalLetters(id);
            }
            else if(trio == "441") //SPECIAL LOCK
            {
                i+=3;
                j+=3;
                k+=3;
                var iStart = i;
                var statusLock = 0;
                while(statusLocK < 1)
                {
                    trio = Cipher[i]+Cipher[j]+Cipher[k];
                    if(trio == "441")
                    {
                        var lock = "";
                        var l = iStart;
                        for(l; l<i; l++)
                        {
                            lock += Cipher[l];
                        }
                        var lockLength = lock.length;
                        var m = 0;
                        var n = 1;
                        var o = 2;

                        for(m; m<lockLength-2; m+=3)
                        {
                            if(n < lockLength-1)
                            {
                                if(o < lockLength)
                                {
                                    trio = lock[m]+lock[n]+lock[o];
                                    id = EnSpecialSigns.indexOf(trio);
                                    cleartext += funDeSpecialSigns(id);
                                    statusLock = 1;
                                }
                            }
                            n+=3;
                            o+=3;
                        }
                    }
                    else{
                        i+=3;
                        j+=3;
                        k+=3;
                    }
                }
            }
            else if(trio == "442") //NUMBER LOCK
            {
                i+=3;
                j+=3;
                var iStart = i;
                var statusLock = 0;
                var duo = "";
                while(statusLock < 1)
                {
                    duo = Cipher[i]+Cipher[j];
                    if(duo == "44")
                    {
                        if(Cipher[j+1] == "2")
                        {
                            var lock = "";
                            var l = iStart;
                            for(l; l<i; l++)
                            {
                                lock += Cipher[l];
                            }
                            var lockLength = lock.length;
                            var m = 0;
                            var n = 1;

                            for(m; m<lockLength-1; m+=2)
                            {
                                if(n < lockLength)
                                {
                                    duo = lock[m]+lock[n];
                                    id = EnDuoDigits.indexOf(duo)
                                    cleartext += funDeDuoDigits(id);
                                    statusLock = 1;
                                }
                            n+=2;
                            }
                        }
                        else{
                            i+=2;
                            j+=2;
                        }
                    }
                    else{
                        i+=2;
                        j+=2;
                    }
                }
            }
            else if(trio == "443") //CAPS LOCK
            {
                i+=3;
                j+=3;
                k+=3;
                var iStart = i;
                var statusLock = 0;
                while(statusLock < 1)
                {
                    trio = Cipher[i]+Cipher[j]+Cipher[k];
                    if(trio == "443")
                    {
                        var lock = "";
                        var l = iStart;
                        for(l; l<i; l++)
                        {
                            lock += Cipher[l];
                        }
                        var lockLength = lock.length;
                        var m = 0;
                        var n = 1;
                        var o = 2;

                        for(m; m<lockLength-2; m+=3)
                        {
                            if(n < lockLength-1)
                            {
                                if(o < lockLength)
                                {
                                    trio = lock[m]+lock[n]+lock[o];
                                    id = EnCapitalLetters.indexOf(trio);
                                    cleartext += funDeCapitalLetters(id);
                                    statusLock = 1;
                                }
                            }
                            n+=3;
                            o+=3;
                        }
                    }
                    else{
                        i+=3;
                        j+=3;
                        k+=3;
                    }
                }
            }
            else{
                if (EnBasic.includes(trio) == true)
                {
                    id = EnBasic.indexOf(trio);
                    cleartext += funDeBasic(id);
                }
                else{
                    errorStatus = 1;
                    errorTrios += trio;
                }
            }
            j+=3;
            k+=3;
        }
    funErrorSpace2(errorStatus,errorTrios);
    document.getElementById("inCleartext").value = cleartext;
}

function funErrorSpace2(errorStatus,errorTrios)
{
    if (document.getElementById("errCnc2_img").classList.contains("active")){
        if(errorStatus == 1)
        {
            document.getElementById("inErrScreen2").value = errorTrios;
            funLamp(2,errorStatus);
        } else {
            funLamp(2,0);
        }
    }
    if (document.getElementById("errCnc1_img").classList.contains("active")) {
        if (document.getElementById("inErrScreen1").value == ""){
            funLamp(1,0);
        } else {
            funLamp(1,1);}}
}

function funDeBasic(iid)
{
    const DeBasic = [
        //separators
        " ","\t","\n",
        //lowercases LTN
        "q","v","x","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","w","y","z",
        //lowercases PL
        "ą","ć","ę","ł","ń","ó","ś","ź","ż",
        //trio digits
        "1","2","3","4","5","6","7","8","9","0",
        //brackets
        "(",")","„","[","]","”","{","}","–"];
    return DeBasic[iid];
}
function funDeSpecialSigns(iid)
{
    const DeSpecialSigns = ["`","'","%","@","\\","\"","+","&","=","*","#",":",";",".","|","-","^","<","_",",","$","~","/","!","?",">"];
    return DeSpecialSigns[iid];
}
function funDeDuoDigits(iid)
{
    const DeDuoDigits = ["1","2","3","4","5","6","7","8","9","0"];
    return DeDuoDigits[iid];
}
function funDeCapitalLetters(iid)
{
    const DeCapitalLetters = [
        //LTN
        "Q","V","X","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","W","Y","Z",
        //PL:
        "Ą","Ć","Ę","Ł","Ń","Ó","Ś","Ź","Ż"];
    return DeCapitalLetters[iid];
}