import React from 'react'

const Dashboard = () => {
    return (
        <>
            <VerticalHeader />

            <div className="page-content" id="content">
                <Navbar />

                <section className='sectionbg my-3 mx-4 button-r2 sectiondocument'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-3">

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Dashboard