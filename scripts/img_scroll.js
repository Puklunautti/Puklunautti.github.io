
function NextImgPV(class_id){
    let src_path=document.getElementById(class_id).src;
    let src_text = src_path.replace(/^.*[\\\/]/, '');

    let max_id=8;

    console.log(src_text.charAt(0));

    let id = src_text.charAt(0);

    if(id==max_id){
        id=0;
        document.getElementById(class_id).src = "Img/"+class_id+"/"+id+"_PV.jpg";
    }
    else{
        var x = Number(id) + 1;
        console.log("Img/"+id+1+"_PV");
        document.getElementById(class_id).src = "Img/"+class_id+"/"+x+"_PV.jpg";
    }

}

function LastImgPV(class_id){
    let src_path=document.getElementById(class_id).src;
    let src_text = src_path.replace(/^.*[\\\/]/, '');

    let max_id=8;

    console.log(src_text.charAt(0));

    let id = src_text.charAt(0);

    if(id==0){
        id=max_id;
        document.getElementById(class_id).src = "Img/"+class_id+"/"+id+"_PV.jpg";
    }
    else{
        var x = Number(id) - 1;
        console.log("Img/"+id+1+"_PV");
        document.getElementById(class_id).src = "Img/"+class_id+"/"+x+"_PV.jpg";
    }

}

function OpenImage(source){
    window.open(source);
}