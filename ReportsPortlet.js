function ReportsPortlet(portlet, column)
{
portlet.setTitle('Reports')
var content = "<table border=0 cellpadding=3 cellspacing=0 width=100%>"+
"<tr align=left ><td>Client Reports</td></tr>"+
"<tr align=left ><td><a href='https://system.na1.netsuite.com/app/reporting/reportrunner.nl?cr=307&reload=t&whence='></a></td>"+
"</table>";
content = '<td><span>'+ content + '</span></td>'
portlet.setHtml( content );

}
