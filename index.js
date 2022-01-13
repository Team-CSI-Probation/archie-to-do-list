var list=document.getElementsByTagName('li');
var i;
for(i=0;i<list.length;i++)
{
   var span=document.createElement("SPAN");
   var text=document.createTextNode("txt");
   span.className="close";
   span.appendChild(text);
   list[i].appendChild(span);
}

}