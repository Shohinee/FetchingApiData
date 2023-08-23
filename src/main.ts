import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="main">
    <table class="result">
        
    </table>
</div>
`
const tabledata = document.querySelector<HTMLTableElement>(".result")!; 

type methodes={
  method:string
}
let url:string="https://fakestoreapi.com/products?limit=5";
function fetchData(url:string,resolve:any,reject:any){
  console.log("fetchData");
        const methodes:methodes={
          method:'GET'
        }
        fetch(url,methodes)
        .then((result)=>result.text())
        .then((success)=>resolve(success))
        .catch((error)=>reject(error));
}
function resolve(success:any){
    let data=JSON.parse(success);
    show(data);
    console.log("sadasd: ", tabledata)
    function show(data:any):void{
      console.log("hi");
      let heading=`
      <tr>
          <th>id</th>
          <th>title</th>
          <th>price</th>
          <th>description</th>
          <th>category</th>
          <th>image</th>
          <th>rating</th>
      </tr>
      `; 
      data.forEach((i:any) => {
        heading+=`<tr>
        <td>${i.id}</td>
        <td>${i.title}</td>
        <td>${i.price}</td>
        <td>${i.description}</td>
        <td>${i.category}</td>
        <td>${i.image}</td>
        <td>${i.rating}</td>
        
        </tr>`
      });
      tabledata.innerHTML = heading;
  }
}
function reject(error:any){
  console.log("The Error is ",error);
}
fetchData(url,resolve,reject);



