var pic = new Array();

pic[0] = new Image();
pic[0].src = "img-1.jpg";

pic[1] = new Image();
pic[1].src = "img-2.jpg";

pic[2] = new Image();
pic[2].src = "img-3.jpeg";

pic[3] = new Image();
pic[3].src = "img-4.jpg";

var a = 0;    
function next()
        {
        a = a+ 1;      
        if(a>3)
            {
                a = 0;  
            }
    document.pic.src = pic[a].src;
    }
function pre()
        {
        a = a- 1;             
        if(a<0)
            {
                a = 3;   
            }
    document.pic.src = pic[a].src;
    }