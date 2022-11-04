/*OBJAŚNIENIA

*/

function funDecryption()
{
    const Cipher = document.getElementById("inCipher").value;
    const CipherLength = Cipher.length;
	
	const UkraLower = ["а","б","ц","д","е","ф","ґ","г","і","й","к","л","м","н","о","п","р","с","т","у","в","и","з","ж","ч","ш","щ","ь","є","ї","ю","я"];
    const UkraUpper = ["А","Б","Ц","Д","Е","Ф","Ґ","Г","І","Й","К","Л","М","Н","О","П","Р","С","Т","У","В","И","З","Ж","Ч","Ш","Щ","Ь","Є","Ї","Ю","Я"];
    const PolyVowels = ["a","ą","e","ę","i","o","ó","u","y","A","Ą","E","Ę","I","O","Ó","U","Y"];

	var i = 0;
    var cleartext = " ";

    //ERRORS
    var errorStatus = 0;
    var errorTrios = "";
	
	while(i<CipherLength)
	{
		if(UkraLower.includes(Cipher[i]))
		{
			var id = UkraLower.indexOf(Cipher[i]);
			if(id==25){
                cleartext += "cz";
                i++;
            } else if(id==26) {
                cleartext += "sz";
                i++;
            } else if(id==27) {
                cleartext += "szcz";
                i+=3;
            } else if(id>28) {
                var j = i-1;
                if(j==" " || j.includes(PolyVowels)){
                    if(id==29) {
                        cleartext += "je";
                        i++;
                    } else if(id==30) {
                        cleartext += "ji";
                        i++;
                    } else if(id==31) {
                        cleartext += "ju";
                        i++;
                    } else if(id==32) {
                        cleartext += "ja";
                        i++;
                    }
                } else {
                    if(id==29) {
                        cleartext += "ie";
                        i++;
                    } else if(id==30) {
                        cleartext += "ji";
                        i++;
                    } else if(id==31) {
                        cleartext += "iu";
                        i++;
                    } else if(id==32) {
                        cleartext += "ia";
                        i++;
                    }
                }
            } else {
                cleartext += funPolyLower(id);
            }
	    }
        i++;
    }
    funErrorSpace2(errorStatus,errorTrios);
    document.getElementById("inCleartext").value = cleartext.trim();
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

function funPolyLower(iid)
{
    const PolyLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","w","y","z","ż","cz","sz","szcz","'"];
    return PolyLower[iid];
}
function funPolyUpper(iid)
{
    const PolyUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","W","Y","Z","Ż","Cz","Sz","Szcz","'"];
    return PolyUpper[iid];
}