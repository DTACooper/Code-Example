var url = "/api?";

function LoadRules()
{
    firstvalue = [];
    if(document.getElementById('NewRule').style.display=='block')
    {
        document.getElementById('NewRule').style.display='none';
        document.getElementById('RuleVersion').style.display='none';
        document.getElementById('LoadRules').style.display='block';

    }
    else if(document.getElementById('RuleVersion').style.display=='block')
    {
        document.getElementById('RuleVersion').style.display='none';
        document.getElementById('NewRule').style.display='none';
        document.getElementById('LoadRules').style.display='block';
    }
    document.getElementById("LRules").innerHTML = "";
    var table = document.getElementById("LRules");
    table.insertRow(-1);
    for(var i=0;i<7;i++)
    {
       table.rows[0].insertCell(-1);
    }
    table.rows[0].cells[0].innerHTML = "<b>Rule Tag</b>";
    table.rows[0].cells[1].innerHTML = "<b>Description</b>"
    table.rows[0].cells[2].innerHTML = "<b>Version No.</b>";
    table.rows[0].cells[3].innerHTML = "<b>Role</b>";
    table.rows[0].cells[4].innerHTML = "<b>Live?</b>";
    table.rows[0].cells[5].innerHTML = "<b>Versions</b>";
    table.rows[0].cells[6].innerHTML = "<b>Edit</b>";
    var xmlhttp;
    var link = url+"tab=current_rules&nocache=true&order=tag:asc";
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var json = eval ("(" + xmlhttp.responseText + ")");
            for(var i=0;i<json.length;i++)
            {
                var row = document.getElementById("LRules").insertRow(-1);
                var tagcell = row.insertCell(0);
                var bcuzcell = row.insertCell(1);
                var versioncell = row.insertCell(2);
                var rolecell = row.insertCell(3);
                var livecell = row.insertCell(4);
                var togglecell = row.insertCell(5);
                var editcell = row.insertCell(6);
                tagcell.innerHTML = json[i].tag;
                versioncell.innerHTML = json[i].version;
                rolecell.innerHTML = json[i].role;
                if(json[i].live == true)
                {
                               livecell.innerHTML = "<input type='checkbox' disabled checked>";
                }
                else
                {
                livecell.innerHTML = "<input type='checkbox' disabled>";
                }
               togglecell.innerHTML = "<button onclick=RuleVersion('" + json[i].tag + "')>View</button>";
               editcell.innerHTML = "<button onclick=NewRule('" + json[i].tag + "','" + json[i].version +"')>Edit</button>";
               bcuzcell.innerHTML = json[i].description;
           }
        }
    }
    xmlhttp.open("GET",link,true);
    xmlhttp.send();
}

function RuleVersion(identity)
{
    if(document.getElementById('LoadRules').style.display=='block')
    {
        document.getElementById('LoadRules').style.display='none';
        document.getElementById('NewRule').style.display='none';
        document.getElementById('RuleVersion').style.display='block';
    }
    else if(document.getElementById('NewRule').style.display=='block')
    {
        document.getElementById('NewRule').style.display='none';
        document.getElementById('LoadRules').style.display='none';
        document.getElementById('RuleVersion').style.display='block';
    }
    document.getElementById("RVersion").innerHTML = "";
    var table = document.getElementById("RVersion");
    table.insertRow(-1);
    for(var i=0;i<7;i++)
    {
        table.rows[0].insertCell(-1);
    }
    table.rows[0].cells[0].innerHTML = "<b>Version No.</b>";
    table.rows[0].cells[1].innerHTML = "<b>Because</b>";
    table.rows[0].cells[2].innerHTML = "<b>Condition</b>";
    table.rows[0].cells[3].innerHTML = "<b>Description</b>";
    table.rows[0].cells[4].innerHTML = "<b>Rating</b>";
    table.rows[0].cells[5].innerHTML = "<b>Live?</b>";
    table.rows[0].cells[6].innerHTML = "<b>Edit</b>";
    var xmlhttp;
    var link = url+"tab=rules&tag=" +identity+ "&nocache=true&order=version:desc";
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var json = eval ("(" + xmlhttp.responseText + ")");
            for(var i=0;i<json.length;i++)
            {
                var row = document.getElementById("RVersion").insertRow(-1);
                var versioncell = row.insertCell(0);
                var bcuzcell = row.insertCell(1);
                var condcell = row.insertCell(2);
                var desccell = row.insertCell(3);
                var ratecell = row.insertCell(4);
                var livecell = row.insertCell(5);
                var editcell = row.insertCell(6);
                versioncell.innerHTML = json[i].version;
                bcuzcell.innerHTML = json[i].because;
                condcell.innerHTML = json[i].condition;
                desccell.innerHTML = json[i].description;
                ratecell.innerHTML = json[i].rating;
                if(json[i].live == true)
                {
                livecell.innerHTML = "<input type='checkbox' checked disabled>";
                }
                else
                {
                livecell.innerHTML = "<input type='checkbox' diabled>";
                }
                editcell.innerHTML = "<button onclick=NewRule('" + json[i].tag + "','" +json[i].version+ "')>Edit</button>";
            }
        }
    }
    xmlhttp.open("GET",link,true);
    xmlhttp.send();
}

function LoadLists()
{
    firstvalue = [];
    if(document.getElementById('NewList').style.display=='block')
    {
        document.getElementById('NewList').style.display='none';
        document.getElementById('ListVersion').style.display='none';
        document.getElementById('SearchList').style.display='none';
        document.getElementById('LoadList').style.display='block';
    }
    else if(document.getElementById('ListVersion').style.display=='block')
    {
        document.getElementById('ListVersion').style.display='none';
        document.getElementById('SearchList').style.display='none';
        document.getElementById('NewList').style.display='none';
        document.getElementById('LoadList').style.display='block';
    }
    else if(document.getElementById('SearchList').style.display=='block')
    {
        document.getElementById('SearchList').style.display='none';
        document.getElementById('ListVersion').style.display='none';
        document.getElementById('NewList').style.display='none';
        document.getElementById('LoadList').style.display='block';
    }
    document.getElementById("LLists").innerHTML = "";
    var table = document.getElementById("LLists");
    table.insertRow(-1);
    for(var i=0;i<6;i++)
    {
      table.rows[0].insertCell(-1);
    }
    table.rows[0].cells[0].innerHTML = "<b>List Name</b>";
    table.rows[0].cells[1].innerHTML = "<b>Version No.</b>";
    table.rows[0].cells[2].innerHTML = "<b>Role</b>";
    table.rows[0].cells[3].innerHTML = "<b>Live?</b>";
    table.rows[0].cells[4].innerHTML = "<b>Versions</b>";
    table.rows[0].cells[5].innerHTML = "<b>Edit</b>";
    var xmlhttp;
    var link = url+"tab=current_parameters&nocache=true&order=list:asc";
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var json = eval ("(" + xmlhttp.responseText + ")");
            for(var i=0;i<json.length;i++)
            {
                var row = document.getElementById("LLists").insertRow(-1);
                var listcell = row.insertCell(0);
                var vercell = row.insertCell(1);
                var rolecell = row.insertCell(2);
                var livecell = row.insertCell(3);
                var versioncell = row.insertCell(4);
                var editcell = row.insertCell(5);
                listcell.innerHTML = json[i].list;
                vercell.innerHTML = json[i].version;
                if(json[i].role == null)
                {
                rolecell.innerHTML = "";
                }
                else
                {
                rolecell.innerHTML = json[i].role;
                }
                if(json[i].live == true)
                {
                livecell.innerHTML = "<input type='checkbox' checked disabled>";
                }
                else
                {
                livecell.innerHTML = "<input type='checkbox' disabled>";
                }
                versioncell.innerHTML =  "<button onclick=ListVersion('" + json[i].list + "')>View</button>";
                editcell.innerHTML = "<button onclick=NewList('" + json[i].list + "','" +json[i].version+ "')>Edit</button>";
            }
            document.getElementById("Look").innerHTML = "";
            var srow = document.getElementById("Look").insertRow(-1);
            var searchcell = srow.insertCell(0);
            var checkcell = srow.insertCell(1);
            searchcell.innerHTML = "<input type='text' placeholder='Search by Parameter'id='meat'>";
            checkcell.innerHTML = "<button onclick=SearchList()>Search</button>";
        }
    }
    xmlhttp.open("GET",link,true);
    xmlhttp.send();
}

function ListVersion(identity)
{
    if(document.getElementById('LoadList').style.display=='block')
    {
        document.getElementById('LoadList').style.display='none';
        document.getElementById('SearchList').style.display='none';
        document.getElementById('NewList').style.display='none';
        document.getElementById('ListVersion').style.display='block';
        }
    else if(document.getElementById('NewList').style.display=='block')
    {
        document.getElementById('NewList').style.display='none';
        document.getElementById('LoadList').style.display='none';
        document.getElementById('SearchList').style.display='none';
        document.getElementById('ListVersion').style.display='block';
    }
    else if(document.getElementById('SearchList').style.display=='block')
    {
        document.getElementById('SearchList').style.display='none';
        document.getElementById('LoadList').style.display='none';
        document.getElementById('NewList').style.display='none';
        document.getElementById('ListVersion').style.display='block';
    }
    document.getElementById("LVersion").innerHTML = "";
    var table = document.getElementById("LVersion");
    table.insertRow(-1);
    for(var i=0;i<4;i++)
    {
      table.rows[0].insertCell(-1);
    }
    table.rows[0].cells[0].innerHTML = "<b>Version No.</b>";
    table.rows[0].cells[1].innerHTML = "<b>Parameters</b>";
    table.rows[0].cells[2].innerHTML = "<b>Live?</b>";
    table.rows[0].cells[3].innerHTML = "<b>Edit</b>";
    var xmlhttp;
    var link = url+"tab=parameters&list=" +identity+ "&order=version:desc&nocache=true";
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var json = eval ("(" + xmlhttp.responseText + ")");
            for(var i=0;i<json.length;i++)
            {
                var row = document.getElementById("LVersion").insertRow(-1);
                var versioncell = row.insertCell(0);
                var listcell = row.insertCell(1);
                var livecell = row.insertCell(2);
                var editcell = row.insertCell(3);
                versioncell.innerHTML = json[i].version;
                listcell.innerHTML = json[i].value;
                if(json[i].live == true)
                {
                livecell.innerHTML = "<input type='checkbox' checked disabled>";
                }
                else
                {
                livecell.innerHTML = "<input type='checkbox' disabled>";
                }
                editcell.innerHTML = "<button onclick=NewList('" + json[i].list + "','" +json[i].version+ "')>Edit</button>";
            }
        }
    }
    xmlhttp.open("GET",link,true);
    xmlhttp.send();
}

function SearchList(identity)
{
    if(document.getElementById('LoadList').style.display=='block')
    {
        document.getElementById('LoadList').style.display='none';
        document.getElementById('ListVersion').style.display='none';
        document.getElementById('NewList').style.display='none';
        document.getElementById('SearchList').style.display='block';
    }
    else if(document.getElementById('ListVersion').style.display=='block')
    {
        document.getElementById('ListVersion').style.display='none';
        document.getElementById('NewList').style.display='none';
        document.getElementById('LoadList').style.display='none';
        document.getElementById('SearchList').style.display='block';
    }
    else if(document.getElementById('NewList').style.display=='block')
    {
        document.getElementById('NewList').style.display='none';
        document.getElementById('ListVersion').style.display='none';
        document.getElementById('LoadList').style.display='none';
        document.getElementById('SearchList').style.display='block';
    }
    document.getElementById("SList").innerHTML = "";
    var table = document.getElementById("SList");
    table.insertRow(-1);
    for(var i=0;i<4;i++)
    {
        table.rows[0].insertCell(-1);
    }
    table.rows[0].cells[0].innerHTML = "<b>List Name</b>";
    table.rows[0].cells[1].innerHTML = "<b>Version No.</b>";
    table.rows[0].cells[2].innerHTML = "<b>Live?</b>";
    table.rows[0].cells[3].innerHTML = "<b>Edit</b>";
    var xmlhttp;
    var identity = document.getElementById("meat").value;
    var link = url+"tab=current_parameters&value_unnestip=" +identity+ "&nocache=true";
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var json = eval ("(" + xmlhttp.responseText + ")");
            for(var i=0;i<json.length;i++)
            {
                var row = document.getElementById("SList").insertRow(-1);
                var listcell = row.insertCell(0);
                var versioncell = row.insertCell(1);
                var livecell = row.insertCell(2);
                var editcell = row.insertCell(3);
                listcell.innerHTML = json[i].list;
                versioncell.innerHTML = json[i].version;
                if(json[i].live == true)
                {
                livecell.innerHTML = "<input type='checkbox' checked disabled>";
                }
                else
                {
               livecell.innerHTML = "<input type='checkbox' disabled>";
                }
               editcell.innerHTML = "<button onclick=NewList('" + json[i].list + "','" +json[i].version+ "')>Edit</button>";
            }
        }
    }
    xmlhttp.open("GET",link,true);
    xmlhttp.send();
}

function NewRule(identity,version)
{
    firstvalue = [];
    clonevalue = [];
    if(!(document.getElementById('NewRule').style.display=='block'))
    {
       if(document.getElementById('LoadRules').style.display=='block')
        {
        document.getElementById('LoadRules').style.display='none';
        document.getElementById('RuleVersion').style.display='none';
        document.getElementById('NewRule').style.display='block';
        }
       else if(document.getElementById('RuleVersion').style.display=='block')
        {
            document.getElementById('RuleVersion').style.display='none';
            document.getElementById('LoadRules').style.display='none';
            document.getElementById('NewRule').style.display='block';
        }
    }
    document.getElementById("NRule").innerHTML = "";
    document.getElementById("NRuleButton").innerHTML = "";
    document.getElementById("Validate").innerHTML = "";
    var table = document.getElementById("NRule");
    var table2 = document.getElementById("NRuleButton");
    for(var i=0;i<9;i++)
    {
        table.insertRow(-1);
    }
    for(var i=0;i<9;i++)
    {
        table.rows[i].insertCell(0);
        table.rows[i].insertCell(1);
    }
    table2.insertRow(-1);
    for(var i=0;i<3;i++)
    {
      table2.rows[0].insertCell(-1);
    }
    table.rows[0].cells[0].innerHTML = "<b>Description:</b>";
    table.rows[1].cells[0].innerHTML = "<b>Rating:</b>";
    table.rows[2].cells[0].innerHTML = "<b>Rule Tag:</b>";
    table.rows[3].cells[0].innerHTML = "<b>Condition:</b>";
    table.rows[4].cells[0].innerHTML = "<b>Because:</b>";
    table.rows[5].cells[0].innerHTML = "<b>Action:</b>";
    table.rows[6].cells[0].innerHTML = "<b>Role:</b>";
    table.rows[7].cells[0].innerHTML = "<b>Version:</b>";
    table.rows[8].cells[0].innerHTML = "<b>Live:</b>";
    var xmlhttp;
    var link = url + "tab=rules&tag=" +identity+ "&version=" +version+ "&nocache=true";
  if (window.XMLHttpRequest)
    {
    xmlhttp=new XMLHttpRequest();
    }
  else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            if(identity == "")
            {
            var json = eval ("(" + xmlhttp.responseText + ")");
            table.rows[0].cells[1].innerHTML = "<input type='text' id='description' placeholder='Description'>";
            table.rows[1].cells[1].innerHTML = "<select id='rating'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</optio$
            table.rows[2].cells[1].innerHTML = "<input type='text' id='tag' placeholder='Rule ID' disabled>";
            table.rows[3].cells[1].innerHTML = "<textarea rows='1' cols='50' id='condition' placeholder='Condition'></textarea>";
            table.rows[4].cells[1].innerHTML = "<textarea rows='1' cols='50' id='because' placeholder='Because'></textarea>";
            table.rows[5].cells[1].innerHTML = "<input type='text' id='action' placeholder='Action'>";
            table.rows[7].cells[1].innerHTML = "<input type='text' id='version' placeholder='0'disabled>";
            table.rows[8].cells[1].innerHTML = "<input type='checkbox' id='live' checked>";
            table2.rows[0].cells[0].innerHTML = "<button onclick=AddRule(1)>Submit</button>";
            table2.rows[0].cells[1].innerHTML = "<button onclick=AddRule(0)>Cancel</button>";
            table2.rows[0].cells[2].innerHTML = "<button onclick=CheckRule()>Validate</button>";
            NewRuleList("");
            }
            else
            {
                var json = eval ("(" + xmlhttp.responseText + ")");
                table2.rows[0].insertCell(-1);
                if(json[0].description == null)
                {
                var cell1 = table.rows[0].cells[1].innerHTML = "<input type='text' id='description' placeholder='Description'>";
                }
                else
                {
                   var cell1 = table.rows[0].cells[1].innerHTML = "<input type='text' id='description' value='" +json[0].description+ "'>";
                }
                var cell2 = table.rows[1].cells[1].innerHTML = "<select id='rating'></select>";
                var list = document.getElementById("rating");
                for(var i=1;i<6;i++)
                {
                   var option = document.createElement("option");
                   if(json[0].rating == i)
                   {
                       option.selected = true;
                   }
                   else
                   {
                       option.selected = false;
                   }
                  option.text=i;
                  option.value=i;
                  list.add(option,null);
                }
                var cell3 = table.rows[2].cells[1].innerHTML = "<input type='text' id='tag' value='" +json[0].tag+ "'disabled>";
                if(json[0].condition == null)
                {
                  var cell4 = table.rows[3].cells[1].innerHTML = "<textarea rows='1' cols='50' id='condition' placeholder='Condition'></textarea>";
                }
                else
                {
                  var cell4 = table.rows[3].cells[1].innerHTML = "<textarea rows='1' cols='50' id='condition'>" +json[0].condition+ "</textarea>";
                }
                if(json[0].because == null)
                {
                    var cell5 = table.rows[4].cells[1].innerHTML = "<textarea rows='1' cols='50' id='because' placeholder='Because'></textarea>";
                }
                else
                {
                    var cell5 = table.rows[4].cells[1].innerHTML = "<textarea rows='1' cols='50' id='because'>" +json[0].because+ "</textarea>";
                }
                if(json[0].action == null)
                {
                    var cell6 = table.rows[5].cells[1].innerHTML = "<input type='text' id='action' placeholder='Action'>";
                }
                else
                {
                    var cell6 = table.rows[5].cells[1].innerHTML = "<input type='text' id='action' value='"+json[0].action+ "'>";
                }
               var cell8 = table.rows[7].cells[1].innerHTML = "<input type='text' id='version' value='"+json[0].version+ "' disabled>";
               if(json[0].live == true)
                {
                    var cell9 = table.rows[8].cells[1].innerHTML = "<input type='checkbox' id='live' checked>";
                }
                else if (json[0].live == false)
                {
                    var cell9 = table.rows[8].cells[1].innerHTML = "<input type='checkbox' id='live'>";
                }
                table2.rows[0].cells[0].innerHTML = "<button onclick=ValidateRules(1)>Submit</button>";
                table2.rows[0].cells[1].innerHTML = "<button onclick=ValidateRules(0)>Cancel</button>";
                table2.rows[0].cells[2].innerHTML = "<button onclick=CheckRule()>Validate</button>";
                table2.rows[0].cells[3].innerHTML = "<button onclick=CloneRule(1)>Clone Rule</button>";
                firstvalue.push(json[0].because);
                firstvalue.push(json[0].role);
                firstvalue.push(json[0].condition);
                firstvalue.push(json[0].description);
                firstvalue.push(json[0].live);
                firstvalue.push(json[0].rating);
                clonevalue.push(json[0].tag);
                clonevalue.push(json[0].role);
                //firstvalue.push(json[0].action);
                NewRuleList(json[0].role);
            }
        }
    }
    xmlhttp.open("GET",link,true);
    xmlhttp.send();
}

function NewRuleList(identity)
{
  var xmlhttp;
  var link = url+"tab=roles&type=company|sector&order=role:asc";
  if (window.XMLHttpRequest)
        {
        xmlhttp=new XMLHttpRequest();
        }
  else
        {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
  xmlhttp.onreadystatechange=function()
        {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var json = eval ("(" + xmlhttp.responseText + ")");
            var table = document.getElementById("NRule");
            var cell = table.rows[6].cells[1];
            if(identity == "")
            {
            cell.innerHTML = "<select id='role'><option value=''>Choose A Role</option></select>";
            var list = document.getElementById("role");
            for(var i=0;i<json.length;i++)
          {
        var option = document.createElement("option");
          option.text=json[i].role;
                option.value=json[i].role;
          list.add(option,null);
          }
            }
            else
            {
            cell.innerHTML = "<select id='role' disabled></select>";
            var list = document.getElementById("role");
            for(var i=0;i<json.length;i++)
          {
        var option = document.createElement("option");
                if(json[i].role == identity)
                {
                option.selected = true;
                }
                else
                {
                option.selected = false;
                }
          option.text=json[i].role;
                option.value=json[i].role;
          list.add(option,null);
          }
          }
        }
    }
    xmlhttp.open("GET",link,true);
    xmlhttp.send();
}

function CloneRule(Chooseit)
{
    table = document.getElementById("NRuleButton");
    if(Chooseit == 1)
    {
      document.getElementById("tag").value = "";
      NewRuleList("");
      table.rows[0].cells[0].innerHTML = "<button onclick=AddRule(1)>Submit</button>";
      table.rows[0].cells[1].innerHTML = "<button onclick=AddRule(0)>Cancel</button>";
      table.rows[0].cells[3].innerHTML = "<button onclick=CloneRule(0)>Edit Rule</button>";
    }
    else if(Chooseit == 0)
    {
      document.getElementById("tag").value = clonevalue[0];
      NewRuleList(clonevalue[1]);
      table.rows[0].cells[0].innerHTML = "<button onclick=ValidateRules(1)>Submit</button>";
      table.rows[0].cells[1].innerHTML = "<button onclick=ValidateRules(0)>Cancel</button>";
      table.rows[0].cells[3].innerHTML = "<button onclick=CloneRule(1)>Clone Rule</button>";
    }
}

function NewList(identity,version)
{
    firstvalue = [];
    if(!(document.getElementById('NewList').style.display=='block'))
    {
        if(document.getElementById('LoadList').style.display=='block')
        {
            document.getElementById('LoadList').style.display='none';
            document.getElementById('ListVersion').style.display='none';
            document.getElementById('SearchList').style.display='none';
            document.getElementById('NewList').style.display='block';
        }
        else if(document.getElementById('ListVersion').style.display=='block')
        {
            document.getElementById('ListVersion').style.display='none';
            document.getElementById('SearchList').style.display='none';
            document.getElementById('LoadList').style.display='none';
            document.getElementById('NewList').style.display='block';
        }
        else if(document.getElementById('SearchList').style.display=='block')
        {
            document.getElementById('SearchList').style.display='none';
            document.getElementById('ListVersion').style.display='none';
            document.getElementById('LoadList').style.display='none';
            document.getElementById('NewList').style.display='block';
        }
    }
    document.getElementById("NList").innerHTML = "";
    document.getElementById("NListButton").innerHTML = "";
    document.getElementById("Validate").innerHTML = "";
    var table = document.getElementById("NList");
    var table2 = document.getElementById("NListButton");
    for(var i=0;i<5;i++)
    {
        table.insertRow(-1);
    }
    for(var i=0;i<5;i++)
    {
        table.rows[i].insertCell(0);
        table.rows[i].insertCell(1);
    }
    table2.insertRow(-1);
    for(var i=0;i<3;i++)
    {
      table2.rows[0].insertCell(-1);
    }
    table.rows[0].cells[0].innerHTML = "<b>List Name:</b>";
    table.rows[1].cells[0].innerHTML = "<b>Parameters:</b>";
    table.rows[2].cells[0].innerHTML = "<b>Role:</b>";
    table.rows[3].cells[0].innerHTML = "<b>Version:</b>";
    table.rows[4].cells[0].innerHTML = "<b>Live:</b>";
    var link = url + "tab=parameters&list=" +identity+ "&version=" +version+ "&nocache=true";
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            if(identity == "")
            {
                var json = eval ("(" + xmlhttp.responseText + ")");
                table.rows[0].cells[1].innerHTML = "<input type='text' id='list'>";
                table.rows[1].cells[1].innerHTML = "<textarea class='parameterstable' rows='5' cols='50' id='value'></textarea>";
                table.rows[3].cells[1].innerHTML = "<input type='text' id='version' disabled>";
                table.rows[4].cells[1].innerHTML = "<input type='checkbox' id='live'>";
                table2.rows[0].cells[0].innerHTML = "<button onclick=AddList(1)>Submit</button>";
                table2.rows[0].cells[1].innerHTML = "<button onclick=AddList(0)>Cancel</button>";
                table2.rows[0].cells[2].innerHTML = "<button onclick=CheckList(0)>Validate</button>";
                for(var i=0;i<json.length;i++)
                {
                    firstvalue.push(json[i].list);
                }
                NewParameterList("");

            }
            else
            {
               var json = eval ("(" + xmlhttp.responseText + ")");
               table.rows[0].cells[1].innerHTML = "<input type='text' id='list' value='" +json[0].list+ "'disabled>";
               table.rows[1].cells[1].innerHTML = "<textarea class='parameterstable' rows='1' cols='50' id='value'>" +json[0].value+ "</textarea>";
               table.rows[3].cells[1].innerHTML = "<input type='text' id='version' value='" +json[0].version+ "'disabled>";
               if(json[0].live == true)
               {
               table.rows[4].cells[1].innerHTML = "<input type='checkbox' id='live' checked>";
               }
               else
               {
               table.rows[4].cells[1].innerHTML = "<input type='checkbox' id='live'>";
               }
               table2.rows[0].cells[0].innerHTML = "<button onclick=ValidateLists(1)>Submit</button>";
               table2.rows[0].cells[1].innerHTML = "<button onclick=ValidateLists(0)>Cancel</button>";
               table2.rows[0].cells[2].innerHTML = "<button onclick=CheckList(1)>Validate</button>";
               firstvalue.push(json[0].value);
               firstvalue.push(json[0].live);
               firstvalue.push(json[0].role);
               NewParameterList(json[0].role);
            }

      $('.parameterstable').parameterstable();

        }
    }
    xmlhttp.open("GET",link,true);
    xmlhttp.send();
}

function NewParameterList(identity)
{
  var xmlhttp;
  var link = url+"tab=roles&type=company|sector&order=role:asc";
  if(window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      var json = eval ("(" +xmlhttp.responseText + ")");
      var table = document.getElementById("NList");
      var cell = table.rows[2].cells[1];
      if(identity == "")
      {
        cell.innerHTML = "<select id='role'><option value=''>Choose A Role</option></select>";
        var list = document.getElementById("role");
        for(var i=0;i<json.length;i++)
        {
          var option = document.createElement("option");
          option.text=json[i].role;
          option.value=json[i].role;
          list.add(option,null);
        }
      }
      else
      {
        var key = identity;
        cell.innerHTML = "<select id='role'></select>";
        var list = document.getElementById("role");
        for(var i=0;i<json.length;i++)
        {
            var option = document.createElement("option");
            if(json[i].role == identity)
            {
              option.selected = true;
            }
            else
            {
              option.selected = false;
            }
          option.text=json[i].role;
          option.value=json[i].role;
          list.add(option,null);
        }
        }
    }
  }
  xmlhttp.open("GET",link,true);
  xmlhttp.send();
}

function ValidateLists(Chooseit)
{
    if(Chooseit == 1)
    {
      var error = CheckList();
      if(!(error == 1))
      {
        alert("This list is invalid! Please make changes where needed, and try again.");
        return false;
      }
    }
    var active = "";
    var key = document.getElementById("list").value;
    var turnon = document.getElementById("live").checked;
    var drop = document.getElementById("role");
    var role = drop.options[drop.selectedIndex].value;
    if(turnon == true)
    {
        active = 1;
    }
    else
    {
        active = 0;
    }
    var lastvalue = [document.getElementById("value").value,active,document.getElementById("role").value];
    var calc = 0;
    for(var i=0;i<lastvalue.length;i++)
        {

            if(!(firstvalue[i] == lastvalue[i]))
            {
                calc = calc + 1;
            }
        }
    if (Chooseit == 1)
    {
        if(!(calc == 0))
        {
            var link = url+"tab=parameters";
            var dblive = lastvalue[1] == 1 ? "true" : "false";
            var stuff = JSON.stringify({"list":key,"value":lastvalue[0],"live":dblive,"version":"#INC.list="+key,"role":role,"type":"collector"});
            Saveit(link,stuff);
            LoadLists();
        }
        else
        {
            alert("You must makes changes first, before modifications can take place!");
        }
    }
    else if (Chooseit == 0)
    {
        if(!(calc == 0))
        {
            var escape = confirm("You have unsaved changes! Are you sure you wish to close this form?")
            if(escape==true)
            {
                LoadLists();
                }
        }
        else LoadLists();
    }
}

function ValidateRules(Chooseit)
{
    if(Chooseit == 1)
    {
      var error = CheckRule();
      if(!(error == 1))
      {
        alert("This rule is invalid! Please make changes where needed, and try again.");
        return false;
      }
    }
    var active = "";
    var tag = document.getElementById("tag").value;
    var check = document.getElementById("live").checked;
    var menu = document.getElementById("rating");
    var rating = menu.options[menu.selectedIndex].value;
    var drop = document.getElementById("role");
    var role = drop.options[drop.selectedIndex].value;
    var action = document.getElementById("action").value;
    if(check == true)
    {
        active = 1;
    }
    else
    {
        active = 0;
        }
    var lastvalue = [document.getElementById("because").value, document.getElementById("role").value, document.getElementById("condition").value, document.getElementById("description").value, active, rating$
    var calc = 0;
    for(var i=0;i<firstvalue.length;i++)
    {
  if(!(firstvalue[i] == lastvalue[i]))
  {
            calc = calc + 1;
  }
    }
    if (Chooseit == 1)
    {
        if(!(calc == 0))
        {
            var dblive = lastvalue[4] == 1 ? "true" : "false";
            var link = url+"tab=rules"
            var stuff = JSON.stringify({"because":lastvalue[0],"role":role,"condition":lastvalue[2],"description":lastvalue[3],"live":dblive,"rating":rating,"tag":tag,"version":"#INC.tag="+tag,"action":acti$
            Saveit(link,stuff);
            LoadRules();
        }
        else
        {
            alert("You must makes changes first, before modifications can take place!");
        }
    }
    else if (Chooseit == 0)
    {
        if(!(calc == 0))
        {
            var escape = confirm("You have unsaved changes! Are you sure you wish to close this form?")
            if(escape==true)
            {
            LoadRules();
            }
        }
        else LoadRules();
    }
}

function AddList(Chooseit)
{
    if(Chooseit == 1)
    {
      var error = CheckList();
      if(!(error == 1))
      {
        alert("This list is invalid! Please make changes where needed, and try again.");
        return false;
      }
    }
    var calc = 0;
    var check = 0;
    var active = "";
    var turnon = document.getElementById("live").checked;
    var drop = document.getElementById("role");
    var role = drop.options[drop.selectedIndex].value;
    if(turnon == true)
    {
        active = 1;
    }
    else
    {
        active = 0;
    }
    var lastvalue = [document.getElementById("list").value,document.getElementById("value").value,role];
  match = /\r|\n/.exec(lastvalue[1]);
  for(var i=0;i<lastvalue.length;i++)
    {
        if(!(lastvalue[i] == ""))
        {
            calc = calc + 1;
        }
        else
        {
            check = check + 1;
        }
    }
    for(var i=0;i<firstvalue.length;i++)
    {
        if(firstvalue[i] == lastvalue[0])
        {
            alert("That ID already exists! Please use a different one.");
            return false;
        }
    }
    if(match)
    {
        lastvalue[1] = lastvalue[1].replace(/\n|\r/g, ",");
    }
    if(Chooseit == 1)
    {
        if(check == 0)
        {
            var dblive = active == 1 ? "true" : "false";
            var stuff = JSON.stringify({"value":lastvalue[1],"list":lastvalue[0],"live":dblive,"version":"0","role":role,"type":"collector"});
            var link = url+"tab=parameters";
            Saveit(link,stuff);
            LoadLists();
        }
        else
        {
            alert("You must fill in all fields!");
        }
    }
    else if (Chooseit == 0)
    {
        if(!(calc == 0))
        {
            var escape = confirm("You have unsaved changes! Are you sure you wish to close this form?")
            if(escape==true)
            {
                LoadLists()
            }
        }
        else
        {
            LoadLists();
        }
    }
}

function AddRule(Chooseit)
{
    if(Chooseit == 1)
    {
      var error = CheckRule();
      if(!(error == 1))
      {
        alert("This rule is invalid! Please make changes where needed, and try again.");
        return false;
      }
    }
    var calc = 0;
    var check = 0;
    var active = "";
    var turnon = document.getElementById("live").checked;
    if(turnon == true)
    {
        active = 1;
    }
    else
    {
        active = 0;
    }
    var menu = document.getElementById("rating");
    var rating = menu.options[menu.selectedIndex].value;
    var drop = document.getElementById("role");
    var role = drop.options[drop.selectedIndex].value;
    var name = document.getElementById("tag").value;
    var action = document.getElementById("action").value;
    var lastvalue =[document.getElementById("because").value,document.getElementById("condition").value,document.getElementById("description").value, role /*,document.getElementById("action").value*/];
    for(var i=0;i<lastvalue.length;i++)
    {
        if(!(lastvalue[i] == ""))
        {
            calc = calc + 1;
        }
        else
        {
            check = check + 1;
        }
    }
    if(Chooseit == 1)
    {
        if(check == 0)
        {
            var link = url+"tab=rules";
            var dblive = active == 1 ? "true" : "false";
            var stuff = JSON.stringify({"because":lastvalue[0],"role":role,"condition":lastvalue[1],"description":lastvalue[2],"live":dblive,"rating":rating,"tag":"#NEXTTAG","type":"collector","version":"0"$
            Saveit(link,stuff)
            LoadRules();
        }
        else
        {
            alert("You must fill in all fields!");
        }
    }
    else if(Chooseit == 0)
    {
        if(!(calc == 0))
        {
            var escape = confirm("You have unsaved changes! Are you sure you wish to close this form?")
            if(escape==true)
            {
                LoadRules();
            }
        }
        else
        {
            LoadRules();
            }
    }
}

function Saveit(link,stuff)
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("POST",link,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");
    xmlhttp.send("json=" +encodeURIComponent(stuff));
}

function CheckRule()
{
    document.getElementById("Validate").innerHTML = "";
    var table = document.getElementById("Validate");
    var error = "";
    var version = "";
    var drop = document.getElementById("role");
    var role = drop.options[drop.selectedIndex].value;
    for(var i=0;i<2;i++)
    {
        table.insertRow(-1);
    }
    for(var i=0;i<2;i++)
    {
        table.rows[i].insertCell(0);
        table.rows[i].insertCell(1);
    }
    table.rows[0].cells[0].innerHTML = "<b>Errors:</b>";
    table.rows[1].cells[0].innerHTML = "<b>Code:</b>";
    var active = "";
    var check = document.getElementById("live").checked;
    if(check == true)
    {
      active = 1;
    }
    else
    {
      active = 0;
    }
    if(document.getElementById("version").value == "")
    {
      version = "0";
    }
    else
    {
      version = document.getElementById("version").value;
    }
    var menu = document.getElementById("rating");
    var rating = menu.options[menu.selectedIndex].value;
    var live = active == 1 ? "true" : "false";
    var lastvalue = [role, document.getElementById("because").value, document.getElementById("condition").value, document.getElementById("description").value, live, document.getElementById("rating").value ,$
    for(var i=0;i<lastvalue.length;i++)
    {
        if(lastvalue[i] == "")
        {
            alert("Please fill in all required fields before Validating")
            return false;
        }
    }
    var link = "/validate?";
    var stuff = JSON.stringify({"tag":lastvalue[0],"because":lastvalue[1],"condition":lastvalue[2],"description":lastvalue[3],"live":lastvalue[4],"rating":lastvalue[5],"version":version,"role":lastvalue[6]}$
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var json = JSON.parse(xmlhttp.responseText);
            if(json.errors == null)
            {
                error = 1;
                json.errors = "";
            }
            else
            {
                error = 0;
            }
        var cell1 = table.rows[0].cells[1].innerHTML = "<textarea rows='1' disabled cols='30' id='EText'>" +json.errors+ "</textarea>";
        var cell2 = table.rows[1].cells[1].innerHTML = "<textarea rows='1' disabled cols='30' id='AText'>" +json.code+ "</textarea>";
        }
    }
    xmlhttp.open("POST",link,false);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");
    xmlhttp.send("json=" +encodeURIComponent(stuff));
    if(document.getElementById('Validate').style.display=='none')
    {
        document.getElementById('Validate').style.display='block';
    }
    return error;
}

function CheckList()
{
    document.getElementById("Validate").innerHTML = "";
    var table = document.getElementById("Validate");
    var error = "";
    var version = "";
    var drop = document.getElementById("role");
    var role = drop.options[drop.selectedIndex].value;
    for(var i=0;i<2;i++)
    {
        table.insertRow(-1);
    }
    for(var i=0;i<2;i++)
    {
        table.rows[i].insertCell(0);
        table.rows[i].insertCell(1);
    }
    table.rows[0].cells[0].innerHTML = "<b>Errors:</b>";
    table.rows[1].cells[0].innerHTML = "<b>Code:</b>";
    var active = "";
    var check = document.getElementById("live").checked;
    if(check == true)
    {
       active = 1;
    }
    else
    {
       active = 0;
    }
    if(document.getElementById("version").value == "")
    {
        version = "0";
    }
    else
    {
        version = document.getElementById("version").value;
    }
    var live = active == 1 ? "true" : "false";
    var lastvalue = [document.getElementById("list").value, live, document.getElementById("value").value, role];
    for(var i=0;i<lastvalue.length;i++)
    {
        if(lastvalue[i] == "")
        {
              alert("Please fill in all required fields before Validating")
              return false;
        }
    }
    var link = "/validate?";
    var stuff = JSON.stringify({"value":lastvalue[2],"live":lastvalue[1],"list":lastvalue[0],"role":lastvalue[3],"version":version});
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
    xmlhttp=new XMLHttpRequest();
    }
    else
    {
         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
              var json = JSON.parse(xmlhttp.responseText);
              if(json.errors == null)
              {
                  error = 1;
                  json.errors = "";
              }
              var cell1 = table.rows[0].cells[1].innerHTML = "<textarea rows='1' disabled cols='30' id='EText'>" +json.errors+ "</textarea>";
              var cell2 = table.rows[1].cells[1].innerHTML = "<textarea rows='1' disabled cols='30' id='AText'>" +json.code+ "</textarea>";
        }
    }
      xmlhttp.open("POST",link,false);
      xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");
      xmlhttp.send("json=" +encodeURIComponent(stuff));
      if(document.getElementById('Validate').style.display=='none')
      {
          document.getElementById('Validate').style.display='block';
      }
      return error;
}
