
document.querySelector("body").addEventListener("click",function(){
  fetch("http://localhost:3001/setdata")
  .then((res)=>res.text())
  .then((data)=>{
    var userdata = JSON.parse(data);
    document.querySelector("#nn").innerHTML=`${userdata.name}`;
    localStorage.setItem("name",`${userdata.name}`);
    localStorage.setItem("penname",`${userdata.penname}`);
  });
});
document.querySelector("#submit").addEventListener("click",function(){
  fetch("http://localhost:3001/display")
  .then((res)=>res.text())
  .then((data)=>{
    var display = JSON.parse(data)

    var local = localStorage.getItem("name");
    let input;

    var hed = document.querySelector("#heading").value=" ";
    var txt = document.querySelector("#textt").value=" ";
    input +=`<section>
      <h3>${display.Heading}</h3>
      <h5>${display.text}</h5>
    </section>`;
    document.querySelector('.mains').insertAdjacentHTML("afterbegin",input);
  });
});
