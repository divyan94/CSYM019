window.onload = makeMyRequest();
let xhr = false;

function makeMyRequest()
{
	if(window.XMLHTTPRequest)
	{
		xhr = new XMLHTTPRequest();

	}

	if(xhr)
	{
		xhr.open("GET","ajaxJson.xml",true);
		xhr.send();
		xhr.onreadystatechange = showContents;
	}
	else
	{
		document.getElementById("updatemessage").innerHTML = "Data couldn't be loaded";
	}
}

function showContents()
{
	if(xhr.readyState == 4){

		if(xhr.status ==  200)
		{
			let myData = JSON.parse(xhr.responseText);
			let temp;
			for(let i in myData)
			{
				temp += "<tr><td> " + myData.counties[i].name + " </td></tr>";

			}
			document.getElementById("countylist").innerHTML = temp;
		}
		else
		{
		document.getElementById("updatemessage").innerHTML = "Data couldn't be loaded";	
		}




	}
	else
	{
		document.getElementById("updatemessage").innerHTML = "Data couldn't be loaded";
	}
}
