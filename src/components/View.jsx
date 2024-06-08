import React, { useState } from 'react'
import NavBar from './NavBar'

const View = () => {

    const [data, changaData]=useState(

        [
            {"name":"aju","age":24},
            {"name":"ammu","age":21},
            {"name":"riya","age":25}
        ]



    )

  return (
    <div>
<NavBar/>
<h2>patient details</h2>
<div class="container">
        <div class="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div className="row g-3">

           {
            data.map(
                (value,index)=>{
                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                    <div className="card">
                        <img src="data:image/png;base64,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" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{value.name}</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary">View details</a>
                        </div>
                    </div>
                    
                    </div>
                }

            )
           }
            
                 

                </div>
            </div>
        </div>
</div>

</div>
  )
}


export default View

