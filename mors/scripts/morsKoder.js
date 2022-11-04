function funEncryption()
{
    const CleartextLower = document.getElementById("inCleartext").value;
    const Cleartext = CleartextLower.toUpperCase();
    const CleartextLength = Cleartext.length;

    const DeSeparators = [" ","\t","\n"];

    const DeDigits = ["1","2","3","4","5","6","7","8","9","0"];

    const DeLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",/*PL:*/"Ą","Ć","Ę","Ł","Ń","Ó","Ś","Ź","Ż"];

    const DeSpecialSigns = [".",",","?","'","!","/","(",")","&",":",";","=","+","-","_","\"","$","@","¿","¡"];

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
    //CYFRY
        else if (DeDigits.includes(Cleartext[i]))
        {
            var id = DeDigits.indexOf(Cleartext[i]);
            cipher += funEnDigits(id);   
        }
    //LITERY
        else if(DeLetters.includes(Cleartext[i]))
        {
            var id = DeLetters.indexOf(Cleartext[i]);
            cipher += funEnLetters(id);
        }
    //ZNAKI SPECJALNE
        else if(DeSpecialSigns.includes(Cleartext[i]))
        {
            var id = DeSpecialSigns.indexOf(Cleartext[i]);
            cipher += funEnSpecialSigns(id);
        }
        else{
            errorStatus = 1;
            errorCharacters += Cleartext[i];
        }
        cipher += " ";
        i++;
    }
    funErrorSpace1(errorStatus,errorCharacters);
    var finishedCipher = cipher.trim();
    document.getElementById("inCipher").value = finishedCipher;
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
    const EnSeparators = ["/","/","/"];
    return EnSeparators[iid];
}

function funEnDigits(iid)
{
    const EnDigits = [".----","..---","...--","....-",".....","-....","--...","---..","----.","-----"];
    return EnDigits[iid];
}

function funEnLetters(iid)
{
    const EnLetters = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",/*PL:*/".-.-","-.-..","..-..",".-..-","--.--","---.","...-...","--..-.","--..-"];
    return EnLetters[iid];
}

function funEnSpecialSigns(iid)
{
    const EnSpecialSigns = [".-.-.-","--..--","..--..",".----.","-.-.--","-..-.","-.--.","-.--.-",".-...","---...","-.-.-.","-...-",".-.-.","-....-","..--.-",".-..-.","...-..-",".--.-.","..-.-","--...-"];
    return EnSpecialSigns[iid];
}