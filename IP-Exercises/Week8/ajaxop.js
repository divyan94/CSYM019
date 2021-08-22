window.onload =  makeAjaxRequest();

let xhr = false;




function makeAjaxRequest() 
{
	if(window.XMLHttpRequest)
	{
		xhr = new XMLHttpRequest();
	}

	if(xhr)
	{
		xhr.open("GET","counties.xml",true); // method: GET, datasource/URL : filename or url, async: true/false
		xhr.send(); // By using 'Send' to Get the data. Send(data) - < Post method
		xhr.onreadystatechange = showContents; //onreadystatechange = function to perform
	}
	else
	{
		document.getElementById("updatemessage").innerHTML = "Error "; //otherwise display an error
	}
}

function showContents()
{
	if(xhr.readyState -- 4) // readyState values - 0,1,2,3,4
	{
		if(xhr.status == 200) // status = 200 -> Request is success
		{
			//Process Data

			let myVar = xhr.responseText; // Storing  Resonse in the variable 
			let myData = JSON.parse(xhr.responseText);
			let txt = "";
			for (let i in myData.counties)
			{
				txt += "<tr><td>" + myData.counties[i].name + " </td></tr>";
			}
			document.getElementById("countyList").innerHTML = txt;
		}
		else
		{
			//Display error
			document.getElementById("updatemessage").innerHTML = "Error " +  xhr.status;
		}
	}
}