function funEncryption()
{
    const Cleartext = document.getElementById("inCleartext").value;
    const CleartextLength = Cleartext.length;

    const DeSeparators = [" ","\t","\n"];
    
    const DeLowercasesLTN = ["q","v","x","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","w","y","z"];

    const DeLowercasesPL = ["ą","ć","ę","ł","ń","ó","ś","ź","ż"];

    const DeDigits = ["1","2","3","4","5","6","7","8","9","0"];
    
    const DeBrackets = ["(",")","„","[","]","”","{","}","–"];

    const DeCapitalLetters = ["Q","V","X","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","W","Y","Z",/*PL:*/"Ą","Ć","Ę","Ł","Ń","Ó","Ś","Ź","Ż"];

    const DeSpecialSigns = ["`","'","%","@","\\","\"","+","&","=","*","#",":",";",".","|","-","^","<","_",",","$","~","/","!","?",">"];

    var i = 0;
    var cipher = "";
    //ERRORS
    var errorStatus = 0;
    var errorCharacters = "";

    while(i<CleartextLength)
    {
    //SEPARATORY
        if(DeSeparators.includes(Cleartext[i]))
        {
            var id = DeSeparators.indexOf(Cleartext[i]);
            cipher += funEnSeparators(id);
        }
    //małe litery LTN
        else if(DeLowercasesLTN.includes(Cleartext[i]))
        {
            var id = DeLowercasesLTN.indexOf(Cleartext[i]);
            cipher += funEnLowercasesLTN(id);
        }
    //małe litery PL
        else if(DeLowercasesPL.includes(Cleartext[i]))
        {
            var id = DeLowercasesPL.indexOf(Cleartext[i]);
            cipher += funEnLowercasesPL(id);
        }
    //CYFRY
        else if (DeDigits.includes(Cleartext[i]))
        {
            var lock = "";
            while(DeDigits.includes(Cleartext[i]))
            {
                lock += Cleartext[i];
                i++;
            }
            i--;
            var j = 0;
            var lockLength = lock.length;
            if (lockLength < 6)
            {
                do{
                    var id = DeDigits.indexOf(lock[j]);
                    cipher += funEnTrioDigits(id);
                    j++;
                }while(j<lockLength)
            }
            else{
                cipher += "442";
                for (j; j < lockLength; j++)
                {
                    var id = DeDigits.indexOf(lock[j]);
                    cipher += funEnDuoDigits(id);
                }
                cipher += "442";
            }
        }
    //NAWIASY i ZNAKI DIALOGOWE
        else if(DeBrackets.includes(Cleartext[i]))
        {
            var id = DeBrackets.indexOf(Cleartext[i]);
            cipher += funEnBrackets(id);
        }
    //WIELKIE LITERY
        else if(DeCapitalLetters.includes(Cleartext[i]))
        {
            if(DeCapitalLetters.includes(Cleartext[i+1]))
            {
                if(DeCapitalLetters.includes(Cleartext[i+2]))
                {
                    var lock = "";
                    while(DeCapitalLetters.includes(Cleartext[i]))
                    {
                        lock += Cleartext[i];
                        i++;
                    }
                    i--;
                    var lockLength = lock.length;
                    cipher += "443";
                    var j = 0;
                    for(j; j<lockLength; j++)
                    {
                        var id = DeCapitalLetters.indexOf(lock[j]);
                        cipher += funEnCapitalLetters(id);
                    }
                    cipher += "443";
                }
                else{
                    var id = DeCapitalLetters.indexOf(Cleartext[i]);
                    cipher += "344"+funEnCapitalLetters(id);
                    i++;
                    id = DeCapitalLetters.indexOf(Cleartext[i]);
                    cipher += "344"+funEnCapitalLetters(id);
                }
            }
            else{
                var id = DeCapitalLetters.indexOf(Cleartext[i]);
                cipher += "344"+funEnCapitalLetters(id);
            }
        }
    //ZNAKI SPECJALNE
        else if(DeSpecialSigns.includes(Cleartext[i]))
        {
            if(DeSpecialSigns.includes(Cleartext[i+1]))
            {
                if(DeSpecialSigns.includes(Cleartext[i+2]))
                {
                    var lock = "";
                    for(i; DeSpecialSigns.includes(Cleartext[i]); i++)
                    {
                        lock += Cleartext[i];
                    }
                    i--;
                    var lockLength = lock.length;
                    cipher += "441";
                    var j = 0;
                    for(j; j<lockLength; j++)
                    {
                        var id = DeSpecialSigns.indexOf(lock[j]);
                        cipher += funEnSpecialSigns(id);
                    }
                    cipher += "441";
                }
                else{
                    var id = DeSpecialSigns.indexOf(Cleartext[i]);
                    cipher += "323"+funEnSpecialSigns(id);
                    id = DeSpecialSigns.indexOf(Cleartext[i+1]);
                    cipher += "323"+funEnSpecialSigns(id);
                    i++;
                }
            }
            else{
                var id = DeSpecialSigns.indexOf(Cleartext[i]);
                cipher += "323"+funEnSpecialSigns(id);
            }
        }
        else{
            errorStatus = 1;
            errorCharacters += Cleartext[i];
        }
        i++;
    }
    funErrorSpace1(errorStatus,errorCharacters);
    document.getElementById("inCipher").value = cipher;
}

function funErrorSpace1(errorStatus,errorCharacters)
{
    if (document.getElementById("errCnc1_img").classList.contains("active")){
        if(errorStatus == 1)
        {
            document.getElementById("inErrScreen1").value = errorCharacters;
            funLamp(1,errorStatus);
        } else {
            funLamp(1,0);
        }
    }
    if (document.getElementById("errCnc2_img").classList.contains("active")) {
        if (document.getElementById("inErrScreen2").value == "") {
            funLamp(2,0);
        } else {
            funLamp(2,1);}}
}

function funEnSeparators(iid)
{
    const EnSeparators = ["414","424","434"];
    return EnSeparators[iid];
}

function funEnLowercasesLTN(iid)
{
    const EnLowercasesLTN = ["111","112","113","121","122","123","131","132","133","211","212","213","221","222","223","231","232","233","311","312","313","321","322","331","332","333"];
    return EnLowercasesLTN[iid];
}

function funEnLowercasesPL(iid)
{
    const EnLowercasesPL = ["411","412","413","421","422","423","431","432","433"];
    return EnLowercasesPL[iid];
}

function funEnTrioDigits(iid)
{
    const EnTrioDigits = ["114","124","134","214","224","234","314","324","334","444"];
    return EnTrioDigits[iid];
}

function funEnDuoDigits(iid)
{
    const EnDuoDigits = ["11","12","13","21","22","23","31","32","33","42"];
    return EnDuoDigits[iid];
}

function funEnBrackets(iid)
{
    const EnBrackets = ["141","142","143","241","242","243","341","342","343"];
    return EnBrackets[iid];
}

function funEnCapitalLetters(iid)
{
    const EnCapitalLetters = ["111","112","113","121","122","123","131","132","133","211","212","213","221","222","223","231","232","233","311","312","313","321","322","331","332","333",/*PL:*/"411","412","413","421","422","423","431","432","433"];
    return EnCapitalLetters[iid];
}

function funEnSpecialSigns(iid)
{
    const EnSpecialSigns = ["111","112","113","121","122","123","131","132","133","211","212","213","221","222","223","231","232","233","311","312","313","321","322","331","332","333"];
    return EnSpecialSigns[iid];
}