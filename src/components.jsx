import { useState } from "react"

function Form({inputs,nextForm,prevForm }){
    return(
        <>
        
        {inputs.map(input =>{
        
          return(
  
              <div key={input.name[0]} className = 'form-content'>
                  <label htmlFor={input.name[0]}>{input.name[1]}</label>
                  <input type={input.name[2]} id={input.name[0]} />
                  
  
              </div>
  
  
          )
      })}
      <button  onClick={nextForm}>Next</button>
      <button  onClick={prevForm}>Prev</button>

      </>
        

    )

    

}

function SideBar({children}){

    return(

        <section className="side-bar">
            <h1>CV GENERATOR</h1>
            <div>
            <hr />

            </div>
            <form action="">
            <h4>GENERAL INFORMATION</h4>

            {children}

            </form>
        
        </section>
    )

}

function cvDisplay(){
    return (
        <section className="cv-section">

        </section>
    )
}
function Main(){
    const [formNumber, setNumber] = useState(0)

    function viewNextForm(e){
        e.preventDefault();
        setNumber(formNumber + 1);
    }

    function viewPrevForm(e){
        e.preventDefault();
        setNumber(formNumber - 1);
    }

    if (formNumber === 0){
        return(
    
            <SideBar>
                <Form inputs={[
                    {name:["name","Name", "text"]},
                    {name:["email","Email", "Email"]},
                    {name:["phone","Phone"]},

                ]}
                
                nextForm={viewNextForm}
                prevForm={viewPrevForm}
                
                />
            </SideBar>
                
            
        )



    }else if(formNumber === 1){

        return (
    
            <SideBar>
                <Form inputs={[
                    {name:["schoolname","School"]},
                    {name:["title","Title Of Study"]},
                    {name:["date", "Date", "date"]}
                    
                ]
                    
                    
                    }
                    nextForm={viewNextForm}
                    prevForm={viewPrevForm}/>
            </SideBar>
                
            
        )
    }else if(formNumber === 2){

        return (
    
            <SideBar>
                <Form inputs={[
                    {name:["companyName","Company Name", "text"]},
                    {name:["postition","Position", "text"]},
                    {name:["responsibilities", "Responsiblilities", "textarea"]},
                    {name:["startDate", "Start Date", "date"]},
                    {name:["endDate", "End Date", "date"]},

                    
                ]
                    
                    
                    }
                    prevForm={viewPrevForm}/>
            </SideBar>
                
            
        )
    }
} 

export  {Main};