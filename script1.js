function whensubmit(e)
{
    e.preventDefault()
    let allData=new FormData(e.target);
    for(data of allData.entries()){
        console.log(data);
    }
}