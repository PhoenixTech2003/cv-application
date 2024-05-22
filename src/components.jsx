import { useState } from "react"

function Form({inputs,nextForm,prevForm, title, sync, textarea = false,details, nextBtn = false, prevBtn = false, }){
    let multiline = textarea[0] ? 
        <div className="multiline">
            <label htmlFor="responsibilities">{textarea[1]}</label>
            <textarea onChange={sync} id="responsibilities" value={details['responsibilities']}></textarea>
        </div> :
         null;

    let nextButton = nextBtn ? <button  onClick={nextForm}>Next</button> : null;
    let previousButton = prevBtn ? <button  onClick={prevForm}>Prev</button> : null;
         
         
    return(
        <>
        <h4>{title}</h4>
        {inputs.map(input =>{
        
          return(
  
              <div key={input.name[0]} className = 'form-content'>
                  <label htmlFor={input.name[0]}>{input.name[1]}</label>
                  <input type={input.name[2]} id={input.name[0]} onChange={sync} value={details[input.name[0]]}/>
                  
  
              </div>
  
  
          )
      })}
      {multiline}
      {nextButton}
      {previousButton}

      </>
        

    )

    

}

function SideBar({children}){

    return(
        <div>


        <section className="side-bar">
            <h1>CV GENERATOR</h1>
            <div>
            <hr />

            </div>
            <form action="">
            

            {children}

            </form>
        
        </section>


        </div>
    )

}

function CvDisplay({details}){
    return (
        <section className="cv-section">
            <div>
                <section className="left-section">
                    <div>
                        <h2>
                            {details.fname} 
                            <br /> 
                            {details.lname} 
                        
                        </h2>
                        
                    </div>
                    <div>
                        <p>{details.phone}</p>
                        <p>{details.email}</p>
                    </div>
                    <div>
                        <h2>EDUCATION</h2>
                        <p>{details.title + " "} , {" " + details.school}</p>
                        <p>{details.sYear}- {details.eYear}</p>
                    </div>
                    <div>
                        <h2>
                            COMPANY NAME
                        </h2>
                        <ul>
                            <li>{details.companyName}</li>
                        </ul>
                       

                    </div>
                </section>
                <section className="right-section">
                    <div>
                        <h2>POSTITION</h2>
                        <ul>
                            <li>{details.position}</li>
                        </ul>
                    </div>
                    <div>
                        <h2>RESPONSIBILITIES</h2>
                        <p>{details.responsibilities}</p>

                    </div>
                    <div>
                        <h2>DURATION OF EMPLOYMENT</h2>
                        <p>{details.eFrom} to {details.eTo}</p>

                    </div>

                </section>
            </div>


        </section>
    )
}
function Main(){
    const [formNumber, setNumber] = useState(0);
    const [details, setDetails] = useState(
        {
        fname:'John',
        lname: 'Doe',
        email: "johndoe@gmail.com",
        phone: "0992233119",
        school: "john doe university",
        sYear: 2021,
        eYear: 2024,
        title: "Bsc. Information Technology",
        companyName: "Phoenix Tech",
        position: "CEO",
        eFrom: 2022,
        eTo: 2024,
        responsibilities:'i made miillions'
        
    });

    if(formNumber > 2 || formNumber < 0){
        setNumber(0);
    }

    function test(e){
        if(e.target.id in details){
            setDetails({
                ...details,
                [e.target.id]: e.target.value

            })
        }
        
    }

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
            <>
            <SideBar>
                <Form inputs={[
                    {name:["fname","First Name", "text"]},
                    {name:["lname","Last Name", "text"]},
                    {name:["email","Email", "email"]},
                    {name:["phone","Phone", "text"]},

                ]}
                
                nextForm={viewNextForm}
                prevForm={viewPrevForm}
                title= "GENERAL INFORMATION"
                sync={test}
                details={details}
                nextBtn = {true}
                
                />
            </SideBar>

            <CvDisplay
                details={details}
            />
            
            </>
            
                
            
        )

   

    }else if(formNumber === 1){

        return (
            <>

            <SideBar>
                <Form inputs={[
                    {name:["school","School"]},
                    {name:["title","Title Of Study"]},
                    {name:["sYear", "Start Year", "number"]},
                    {name:["eYear", "End Year", "number"]},

                    
                ]
                    
                    
                    }
                    nextForm={viewNextForm}
                    prevForm={viewPrevForm}
                    title= "EDUCATIONAL EXPERIENCE"
                    sync={test}
                    details={details}
                    nextBtn = {true}
                    prevBtn = {true}


                    />
                    
            </SideBar>
            <CvDisplay
                details={details}
            />
            
            
            </>
 
                
            
        )
    }else if(formNumber === 2){

        return (
            <>
                    <SideBar>
                    <Form inputs={[
                        {name:["companyName","Company Name", "text"]},
                        {name:["position","Position", "text"]},
                        {name:["eFrom", "Start Date", "date"]},
                        {name:["eTo", "End Date", "date"]},

                        
                    ]
                        
                        
                        }
                        prevForm={viewPrevForm}
                        title= "PRACTICAL EXPERIENCE"
                        sync={test}
                        textarea = {[true, "responsibilites"]}
                        details={details}
                        prevBtn = {true}

                        />
                </SideBar>
                <CvDisplay
                details={details}
            />
            
            </>
    
            
                
            
        )
    }
} 

export  {Main};