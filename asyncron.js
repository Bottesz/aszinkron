getKeres(vegpont,callback){
    fetch(vegpont)
    .then(response => response.json())
    .then((data) => {console.log(data) })
    .catch((error)=>{console.log(error) });
}