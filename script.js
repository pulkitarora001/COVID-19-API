
function get(x) {
    return document.getElementById(x);
}
get('Cname').style.background="lightblue";

document.getElementById("get").addEventListener('click', async()=>{

    var country = get('Cname').value;
    var Sdate = get('Sdate').value;
    var Edate = get('Edate').value;
    if(country ==='' || Sdate===''|| Edate=='')
    {
        return alert("Enter data");
    }
    get('Cname').style.background="";


    await fetch(`https://api.covid19api.com/country/${country}?from=${Sdate}T00:00:00Z&to=${Edate}T00:00:00Z`).then(response=> response.json()).then(data=>{
        result = data;
        appendData(data);
    });
});


function appendData(data) {
    get('data1').innerHTML='<p> Confirmed cases: '+data[0]["Confirmed"]+
    '<p> Active cases: '+data[0]["Active"]+
    '<p> Deaths cases: '+data[0]["Deaths"];
    get('data1').classList.add("div-style");

    get('data2').innerHTML='<p> Confirmed cases: '+data[0]["Confirmed"]+
    '<p> Active cases: '+data[1]["Active"]+
    '<p> Deaths cases: '+data[1]["Deaths"];
    get('data2').classList.add("div-style");

    get('data3').innerHTML='<p> Confirmed cases: '+data[0]["Confirmed"]+
    '<p> Active cases: '+data[2]["Active"]+
    '<p> Deaths cases: '+data[2]["Deaths"];
    get('data3').classList.add("div-style");

}