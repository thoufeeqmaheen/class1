function submitform(e){
    e.preventDefault()
    let formData=new FormData(e.target);
    for(data of formData.entries()){
        console.log(data);
    }
}