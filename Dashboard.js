import React from 'react'
import Card from './Card'
import Overview from './Overview'
import {Link} from "react-router-dom"

function Dashboard() {
  return (
    <div class="container-fluid">
           <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">"Dashboard"</h1>
                        <a class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div class="row">

                    <Card/>
                    <Card/>
                    <Card/>

                    </div>
                    <Overview/>
                    
</div>
  )
}

export default Dashboard