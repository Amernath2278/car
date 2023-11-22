
function storeBtn(){

    
        brand=cbrand.value;
        price=cprice.value;
        key=ckey.value;
    
        // to an object
        storeRecord={

            brand,
            price,
            key
        }
        console.log(storeRecord);
        
       

            if(brand==="" || price==="" || key==="" ){

                alert("Please fill the record")
            } else  if(key in localStorage){
                alert("Record already exist")
            } else {
            localStorage.setItem(key,JSON.stringify(storeRecord));
            alert("Record stored successfully")
        }
}

function retriveBtn(){

let keys=retrive.value;

if(keys in localStorage){
    let data=JSON.parse(localStorage.getItem(keys));
    console.log(data);

    result.innerHTML= `
 
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Car brand : ${data.brand}</li>
    <li class="list-group-item">Price : ${data.price}</li>
    <li class="list-group-item">Key : ${data.key}</li>
   
  </ul>`

} else {
    alert("Key doesnot exist")
}

}

function removeBtn(){

    remkey=rem.value;

    if(remkey in localStorage){

        let conf=confirm("Are you sure you want to remove details of key " + remkey)

        if(conf==true){
            
        localStorage.removeItem(remkey);

        alert("Details removed successfully")
        }

    } else {
        alert("Key doesnot exist")
    }

}

function clearBtn(){

    let confm=confirm("Are you sure you want to clear data?")

    if(confm==true){
        localStorage.clear(storeRecord)

        alert("Data cleared successfully")
        window.location="./index.html"
    }
}