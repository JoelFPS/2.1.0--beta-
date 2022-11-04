function funEncryption()
{
    const Cleartext = document.getElementById("inCleartext").value;
    const CleartextLength = Cleartext.length;
    
    const PolyLower = ["a","ą","b","c","ć","d","e","ę","f","g","h","i","j","k","l","ł","m","n","ń","o","ó","p","r","s","ś","t","u","w","y","z","ź","ż"];
    const PolyUpper = ["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","R","S","Ś","T","U","W","Y","Z","Ź","Ż"];

    var i = 0;
    var cipher = "";
    //ERRORS
    var errorStatus = 0;
    var errorCharacters = "";

    while(i<CleartextLength)
    {
    //małe litery PL;
        if(PolyLower.includes(Cleartext[i]))
        {
            var id = PolyLower.indexOf(Cleartext[i]);
			var j = i+1;
            if(id==3){               
				if(PolyLower.indexOf(Cleartext[j])==10){
					cipher += "х";
					i++;
				} else if(PolyLower.indexOf(Cleartext[j])==29){
					cipher += "ч";
					i++;
				} else {
					cipher += funUkraLower(id);
				}
            } else if(id==11){
				if(PolyLower.indexOf(Cleartext[j])==0){
					cipher += "я";
					i++;
                } else if(PolyLower.indexOf(Cleartext[j])==6){
                    cipher += "є";
					i++;
                } else if(PolyLower.indexOf(Cleartext[j])==26){
                    cipher += "ю";
					i++;
                } else {
					cipher += funUkraLower(id);
				}
            } else if(id==12){
                if(PolyLower.indexOf(Cleartext[j])==0){
                    cipher += "я";
					i++;
                } else if(PolyLower.indexOf(Cleartext[j])==6){
                    cipher += "є";
					i++;
                } else if(PolyLower.indexOf(Cleartext[j])==11){
                    cipher += "ї";
					i++;
                } else if(PolyLower.indexOf(Cleartext[j])==26){
                    cipher += "ю";
					i++;
                } else {
					cipher += funUkraLower(id);
				}
            } else if(id==22){
                if(PolyLower.indexOf(Cleartext[j])==29){
                    cipher += "ж";
					i++;
                } else {
					cipher += funUkraLower(id);
				}
            } else if(id==23){
                if(PolyLower.indexOf(Cleartext[j])==29){
					var k = j+1;
                    if(PolyLower.indexOf(Cleartext[k])==3){
						var l = k+1;
                        if(PolyLower.indexOf(Cleartext[l])==29){
                            i+=3;
                            cipher += "щ";
                        } else {
                            i+=2;
                            cipher += "шц"
                        }
                    } else {
                    i++;
                    cipher += "ш";
                    }
                } else {
					cipher += funUkraLower(id);
				}
            } else {
				cipher += funUkraLower(id);
            }
        }
    //WIELKIE LITERY PL
        else if(PolyUpper.includes(Cleartext[i]))
        {
            var id = PolyUpper.indexOf(Cleartext[i]);
			var j = i+1;
            if(id==3){               
				if(PolyUpper.indexOf(Cleartext[j])==10 || PolyLower.indexOf(Cleartext[j])==10){
					cipher += "Х";
					i++;
				} else if(PolyUpper.indexOf(Cleartext[j])==29 || PolyLower.indexOf(Cleartext[j])==29){
					cipher += "Ч";
					i++;
				} else {
					cipher += funUkraUpper(id);
				}
            } else if(id==11){
				if(PolyUpper.indexOf(Cleartext[j])==0 || PolyLower.indexOf(Cleartext[j])==0){
					cipher += "Я";
					i++;
                } else if(PolyUpper.indexOf(Cleartext[j])==6 || PolyLower.indexOf(Cleartext[j])==6){
                    cipher += "Є";
					i++;
                } else if(PolyUpper.indexOf(Cleartext[j])==26 || PolyLower.indexOf(Cleartext[j])==26){
                    cipher += "Ю";
					i++;
                } else {
					cipher += funUkraUpper(id);
				}
            } else if(id==12){
                if(PolyUpper.indexOf(Cleartext[j])==0 || PolyLower.indexOf(Cleartext[j])==0){
                    cipher += "Я";
					i++;
                } else if(PolyUpper.indexOf(Cleartext[j])==6 || PolyLower.indexOf(Cleartext[j])==6){
                    cipher += "Є";
					i++;
                } else if(PolyUpper.indexOf(Cleartext[j])==11 || PolyLower.indexOf(Cleartext[j])==11){
                    cipher += "Ї";
					i++;
                } else if(PolyUpper.indexOf(Cleartext[j])==26 || PolyLower.indexOf(Cleartext[j])==26){
                    cipher += "Ю";
					i++;
                } else {
					cipher += funUkraUpper(id);
				}
            } else if(id==22){
                if(PolyUpper.indexOf(Cleartext[j])==29 || PolyLower.indexOf(Cleartext[j])==29){
                    cipher += "Ж";
					i++;
                } else {
					cipher += funUkraUpper(id);
				}
            } else if(id==23){
                if(PolyUpper.indexOf(Cleartext[j])==29 || PolyLower.indexOf(Cleartext[j])==29){
					var k = j+1;
                    if(PolyUpper.indexOf(Cleartext[k])==3 || PolyLower.indexOf(Cleartext[k])==3){
						var l = k+1;
                        if(PolyUpper.indexOf(Cleartext[l])==29 || PolyLower.indexOf(Cleartext[k])==3){
                            i+=3;
                            cipher += "Щ";
                        } else {
                            i+=2;
                            cipher += "Шц"
                        }
                    } else {
                    i++;
                    cipher += "Ш";
                    }
                } else {
					cipher += funUkraUpper(id);
				}
            } else {
				cipher += funUkraUpper(id);
            }
        }
    //POZOSTAŁE
        else 
        {
            cipher += Cleartext[i];
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

function funUkraLower(iid)
{
    const UkraLower = ["а","оу","б","ц","ць","д","е","еу","ф","ґ","г","і","й","к","л","л","м","н","нь","о","у","п","р","с","сь","т","у","в","и","з","зь","ж"];
    return UkraLower[iid];
}
function funUkraUpper(iid)
{
    const UkraUpper = ["А","Оу","Б","Ц","Ць","Д","Е","Еь","Ф","Ґ","Г","І","Й","К","Л","Л","М","Н","Нь","О","У","П","Р","С","Сь","Т","У","В","И","З","Зь","Ж"];
    return UkraUpper[iid];
}