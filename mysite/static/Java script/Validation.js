
function check_exist(id,e,phone)
{
    clear_span();
    xhttp = new XMLHttpRequest();
    xhttp.open("POST","http://127.0.0.1:8000/app/check/");
     
    xhttp.onload = function(){
         data = JSON.parse(this.responseText);
        w=document.getElementById("id");

        if(data['r1']=="True")
        {
            w.nextElementSibling.textContent="*This Id already exist please enter another value";
            return;
        }
        w.nextElementSibling.textContent="";
        w=document.getElementById("email");
        if(data['r2']=="True")
        {
            w.nextElementSibling.textContent="*This email is assigned to another employee please provide another email";
            return;
        }
        w.nextElementSibling.textContent="";
        w=document.getElementById("phone");
        if(data['r3']=="True")
        {
            w.nextElementSibling.textContent="*This phone is already in use";
            return;
        }
        w.nextElementSibling.textContent="";

         save_data();
         
    }


    if(document.cookie.indexOf('csrftoken')>-1)
    {
        value = document.cookie.split('csrftoken')[1].split('=')[1]
        xhttp.setRequestHeader('X-CSRFToken',value);
    }
    

    object = {
      id:id,
      email:e,
      number:phone,
    }
    xhttp.send(JSON.stringify(object));
}

function  validate_id(id)
{
    w=document.getElementById(id);
    if(w.value.length==0)
        {
            w.nextElementSibling.textContent="*This Field Can't be empty";
            return false;
        }
    x=parseInt(w.value);
        
    if(x<=0)
    {
        w.nextElementSibling.textContent="*Id cannont accept negative numbers";
        return false;
    }
    else if(x>99999)
    {
        w.nextElementSibling.textContent="*Id cannot exceed 5 digits";
        return false;
    } 
  
    w.nextElementSibling.textContent="";
    return true;
}

function validate_address()
{
    w=document.getElementById("eaddress");
    if(w.value.length==0)
        {
            w.nextElementSibling.textContent="*This Field Can't be empty";
            return false;
        }
        w.nextElementSibling.textContent="";

        return true;
}

function validate_date()
{
    w=document.getElementById("date");
    if(w.value.length==0)
        {
            w.nextElementSibling.textContent="*This Field Can't be empty";
            return false;
        }
        w.nextElementSibling.textContent="";
        return true; 
}
function validate_phone()
{
    w=document.getElementById("phone");
    if(w.value.length==0)
        {
            w.nextElementSibling.textContent="*This Field Can't be empty";
        }
    y=w.value;
    
        if(y.length>11)
        {
            w.nextElementSibling.textContent="*number mustn't exceed 11 digit";
            return false;
        }
        if(y.length<11)
        {
            w.nextElementSibling.textContent="*phone numbermust be 11 digit";
            return false;
        }
        w.nextElementSibling.textContent="";
        
    
        return true
        
    
}


function validate_name()
{
    w=document.getElementById("ename");
    if(w.value.length==0)
        {
            w.nextElementSibling.textContent="*This Field Can't be empty";
            return false;
        }
    z=w.value;

    for(i in z)
    {
        if(z[i]==" ")
        {
            w.nextElementSibling.textContent="*Name cannot have spaces";
            
            return false;
        }

        if(!isNaN( z[i]))
        { 
            w.nextElementSibling.textContent="*Name cannot have numbers";
            return false;
        }
        
    }
    w.nextElementSibling.textContent=""; 
    return true;
    

}

function validate_email()
{
    w=document.getElementById("email");
    if(w.value.length==0)
        {
            w.nextElementSibling.textContent="*This Field Can't be empty";
            return false;
        }
    z=w.value;
    
    var num_of=0;
    for(i in z)
    {
        if(z[i]==" ")
        {
            w.nextElementSibling.textContent="*email cannot have spaces";
            
            return false;
        }

        
        if(z[i]=="@")
        {
            num_of= num_of+1;
        }
            
        
    }
    if(num_of>1)
    {
        w.nextElementSibling.textContent="*email cannot contain multiple@";
            return false;
    }
    if(num_of<1)
    {
        w.nextElementSibling.textContent="*email Must contain @";
        return false;
    }
    if(z[z.length-1]=="@")
    {
        w.nextElementSibling.textContent="*email Must contain data after @";
        return false;
    }

    
    w.nextElementSibling.textContent="";
    return true;
    

}

function validate_number()
{
    w=document.getElementsByName("num");
    var result = 0;
    var ok=0;
    for(i of w)
    {
        ok=0;
        if(i.value.length==0)
        {
            i.nextElementSibling.textContent="*This Field Can't be empty";
            result=1;
            ok=1;
        }
        x=parseInt(i.value);
        
            if(x<0)
            {
                i.nextElementSibling.textContent="*This Field Can't accept negative numbers";
                result=1;
                ok=1;
            }
        
        if(ok==0)
            i.nextElementSibling.textContent="";
        
    }
    if(result==1)
        return false;
    return true;
}

function validate()
{
    clear_span();
    if(!validate_name())
    {
        return false;
    }
   if(!validate_id("id"))
   {
       return false;
   }
   if(!validate_email())
   {
       return false;
   }
   if(!validate_address())
   {
       return false;
   }
   
   if(!validate_phone())
   {return false;}

   if(!validate_number())
   {
        return false;
   }
   if(!validate_date())
   {
       return false;
   }

    return true;
}












