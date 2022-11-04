function funModification()
{
//Top
    var string = document.getElementById("navTop");
    if(string.innerHTML[0] == "3")
    {
        string.innerHTML = "1231231231231231231231231231231";
    }
    else if(string.innerHTML[0] == "1")
    {
        string.innerHTML = "2312312312312312312312312312312";
    }
    else if(string.innerHTML[0] == "2")
    {
        string.innerHTML = "3123123123123123123123123123123";
    }

//Left
    var string = document.getElementById("navLeft");
    if(string.innerHTML[0] == "2")
    {
        string.innerHTML = "3123123123123";
    }
    else if(string.innerHTML[0] == "3")
    {
        string.innerHTML = "1231231231231";
    }
    else if(string.innerHTML[0] == "1")
    {
        string.innerHTML = "2312312312312";
    }

//Right
    var string = document.getElementById("navRight");
    if(string.innerHTML[0] == "2")
    {
        string.innerHTML = "3123123123123";
    }
    else if(string.innerHTML[0] == "3")
    {
        string.innerHTML = "1231231231231";
    }
    else if(string.innerHTML[0] == "1")
    {
        string.innerHTML = "2312312312312";
    }

//Bottom
    var string = document.getElementById("navBottom");
    if(string.innerHTML[0] == "3")
    {
        string.innerHTML = "1321321321321321321321321321321";
    }
    else if(string.innerHTML[0] == "1")
    {
        string.innerHTML = "2132132132132132132132132132132";
    }
    else if(string.innerHTML[0] == "2")
    {
        string.innerHTML = "3213213213213213213213213213213";
    }
    setTimeout("funModification()",200);
}