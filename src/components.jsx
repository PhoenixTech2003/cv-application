function SideBar({children}){

    return(

        <section className="side-bar">
            <h1>CV GENERATOR</h1>
            <div>
            <hr />

            </div>
            <form action="">
            <h4>GENERAL INFORMATION</h4>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone"/>


            </form>
            {children}
        </section>
    )

}

function MainDisplay(){
    return (
        <section className="cv-section">

        </section>
    )
}


export  {SideBar, MainDisplay};