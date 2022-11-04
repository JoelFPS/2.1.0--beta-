function funLamp(nr, status)
{
    if (nr == 1) {
        var lamp = document.getElementById("lamp1");
    } else if (nr == 2) {
        var lamp = document.getElementById("lamp2");
    }
    if(status == 1) {
        lamp.style.backgroundColor = "red";

    } else if (status == 0) {
        lamp.style.backgroundColor = "green";
    } else if (status == 2) {
        lamp.style.backgroundColor = "rgb(72, 72, 73)";
    }
}

function funErrorCnc(nr, zasilanie)
{
    if (nr == 1) {
        var connector = document.getElementById("errCnc1_img");
        var screen = document.getElementById("inErrScreen1");
    } else if (nr == 2) {
        var connector = document.getElementById("errCnc2_img");
        var screen = document.getElementById("inErrScreen2");
    }
    var connectors = new Array();
    connectors[0] = "images/connector_on.png";
    connectors[1] = "images/connector_off.png";

    function funErrConnectorOn()
    {
        connector.classList.add("active");
        connector.src = connectors[0];
    }
    function funErrConnectorOff()
    {
        connector.classList.remove("active");	
        connector.src = connectors[1];
    }

    if (document.getElementById("connector_img").classList.contains("active"))
    {
        if (connector.classList.contains("active")) 
        {
            funErrConnectorOff();
            funLamp(nr,2);
            screen.value = "";
        }
        else{
            funErrConnectorOn();
            funEnde();
        }
    }
    if (zasilanie == "off"){
        funErrConnectorOff();
        funLamp(nr,2);
        screen.value = "";
    }
}

function funMainConnector()
{
    var connector = document.getElementById("connector_img");
    var connectors = new Array();
    connectors[0] = "images/connector_off.png";
    connectors[1] = "images/connector_on.png";
    
    function funConnectorOn()
    {
        connector.classList.add("active");
        connector.src = connectors[1];
        funErrorCnc(1);
        funErrorCnc(2);
    }
    function funConnectorOff()
    {
        connector.classList.remove("active");
        connector.src = connectors[0];
        funErrorCnc(1,"off");
        funErrorCnc(2,"off");
    }

    if (connector.classList.contains("active")) 
    {
        funConnectorOff();
        document.getElementById("inCipher").value = "";
        document.getElementById("inCleartext").value = "";
    }
    else{
        funConnectorOn();
        funEnde();
    }
}

function funSelector()
{
    var selector = document.getElementById("selector_img");
    var connector = document.getElementById("connector_img");
    var selectors = new Array();
    selectors[0] = "images/selector_down.png";
    selectors[1] = "images/selector_up.png";

    if (selector.classList.contains("active"))
    {
        selector.classList.remove("active");
        selector.src = selectors[1];
        document.getElementById("inErrScreen2").value = "";
    }
    else{
        selector.classList.add("active");	
        selector.src = selectors[0];
        document.getElementById("inErrScreen1").value = "";
    }    
}

function funEnde()
{
    var statusSelector = document.getElementById("selector_img");
    if(statusSelector.classList.contains("active"))
    {
        funEncryption();
    }
    else{
        funDecryption();
    }
}

function funResize(id)
{
    var screenValue = document.getElementById(id).value;
    screenLength = screenValue.length;
    if (screenLength >= 150)
    {
        var quantityRows = screenLength / 30;
        if (quantityRows % 30 != 0)
        {
            quantityRows++;
        }
        document.getElementById(id).rows = quantityRows;
    }
    else if (screenLength < 150)
    {
        document.getElementById(id).rows = 5;
    }
}

function funReduce(id)
{
    document.getElementById(id).rows--;
}
function funSpread(id)
{
    document.getElementById(id).rows++;
}

function funReset(nr)
{
    if (document.getElementById("connector_img").classList.contains("active")) {
        if (nr == 1) {
            var textarea = "inCleartext";
        } else if (nr == 2) {
            var textarea = "inCipher";
        }
            var error = "inErrScreen" + nr;
            var image = "errCnc" + nr + "_img";
        document.getElementById(textarea).value = "";
        document.getElementById(error).value = "";
        if (document.getElementById(image).classList.contains("active")) {funLamp(nr,0);}
    }
}
function funCopy(nr)
{
    if (nr == 1) {var copyText = document.getElementById("inCleartext");
    } else if (nr == 2) {var copyText = document.getElementById("inCipher");}
    copyText.select();
    document.execCommand("copy");
}

function funSelect(nr)
{
    if (nr == 1) {var selectText = document.getElementById("inCleartext");
    } else if (nr == 2) {var selectText = document.getElementById("inCipher");}
    selectText.select();
}