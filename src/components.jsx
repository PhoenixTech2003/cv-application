import { useState } from "react"

function Form({inputs,nextForm,prevForm, title }){
    return(
        <>
        <h4>{title}</h4>
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
            

            {children}

            </form>
        
        </section>
    )

}

function CvDisplay(){
    return (
        <section className="cv-section">
            <div>
                <section className="left-section">
                    <div>
                        <h2>Chiyembekezo <br /> Chilembwe</h2>
                        <h1>Software Engineer</h1>
                    </div>
                    <div>
                        <p>+265 993 62 61 97</p>
                        <p>Blantyre, Malawi</p>
                        <p>chiyembekezochilembwe21@gmail.com</p>
                    </div>
                    <div>
                        <h2>EDUCATION</h2>
                        <p>Bsc. Information Technology, Malawi University of Business and Applied Sciences</p>
                        <p>2021- Present</p>
                    </div>
                    <div>
                        <h2>
                            TECHNICAL SKILLS
                        </h2>
                        <li>Computer Vision: Yolov8, CVAT</li>
                        <li>UX / UI design: Figma</li>
                        <li>
                            Programming: Python, HTML, CSS,
                            Javascript, MySQL, Flask, C++, Arduino
                            Programming
                        </li>
                        <li>
                            AI Tools: Canva, ChatGPT, Runway ML
                        </li>

                    </div>
                </section>
                <section className="right-section">
                    <div>
                        <h2>SUMMARY</h2>
                        <p>
                            As a motivated and tech-savvy student with a passion for
                            learning, I am eager to leverage my skills in HTML, CSS,
                            JavaScript, Python, Flask, and C++ to contribute effectively
                            in an internship role. Seeking opportunities to gain hands-on
                            experience and further develop my proficiency in software
                            development and web technologies. 
                        </p>
                    </div>
                    <div>
                        <h2>PROJECTS</h2>
                        <div>
                            <h3>
                                CROP DISEASE DETECTION MODEL
                            </h3>
                            <p>
                                Teamed up with 6 Software engineers to implement a crop
                                disease detection model that was implemented using
                                Yolov8, HTML, CSS, Javascript, Flask, and SQLite.
                            </p>
                        </div>
                        <div>
                            <h3>
                                AUTOMATED ALARM SYSTEM 
                            </h3>
                            <p>
                                Teamed up with 5 software engineers to implement an
                                automated Alarm System using an Arduino UNO,
                                Ultrasonic Sensor, Keypad, and LCD. 
                            </p>
                        </div>

                    </div>
                    <div>
                        <h3>CERTIFICATIONS</h3>
                        <li>
                            Nvidia Fundamentals In Accelerated Computing with
                            CUDA C/C++
                            https://learn.nvidia.com/certificates?id=MDy2Fp2xTZ-3_
                            oUr6Tlbng
                        </li>
                        <li>
                            Micromek STEM Arduino Programming Certificate
                        </li>
                    </div>

                </section>
            </div>


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
            <>
            <SideBar>
                <Form inputs={[
                    {name:["name","Name", "text"]},
                    {name:["email","Email", "Email"]},
                    {name:["phone","Phone"]},

                ]}
                
                nextForm={viewNextForm}
                prevForm={viewPrevForm}
                title= "GENERAL INFORMATION"
                
                />
            </SideBar>

            <CvDisplay />
            
            </>
            
                
            
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
                    prevForm={viewPrevForm}
                    title= "EDUCATIONAL EXPERIENCE"
                    />
                    
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
                    prevForm={viewPrevForm}
                    title= "PRACTICAL EXPERIENCE"
                    
                    />
            </SideBar>
                
            
        )
    }
} 

export  {Main};