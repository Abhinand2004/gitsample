
let allproducts=[]
async function fetchData() {

    const  resposnse= await fetch('https://dummyjson.com/products')
    const data=await resposnse.json()
    allproducts=data.products
  
displayproducts(allproducts)
}

function displayproducts(data){
    let str=``

    data.map((data,index)=>{
        console.log(data);
        
    
            str+=
            `
             <div class="box">
                <img src="${data.thumbnail}" alt="" class="images">
                <h3>Title:${data.title}</h3>
                <p>Category:${data.category}</p>
                <h3>Price:${data.price}</h3>
            </div>
            
            `
    })

  document.getElementById("container").innerHTML=str
}




function serchsubmit(){
const data=  document.getElementById("input").value.toLowerCase()

const filter=allproducts.filter((item)=>{
 return  item.title.toLowerCase().includes(data)
})

displayproducts(filter)

}


fetchData()