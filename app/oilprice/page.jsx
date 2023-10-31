'use client'
import { useState, useEffect } from 'react'
import dynamic from "next/dynamic";
import Loading from '@/component/loading';
import Script from 'next/script';

const Oilprice = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
  
    useEffect(() => {
        fetch('/api/oilprice/all')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
    }, [])
  
    var textloading;
    if(isLoading){
        textloading = <Loading/>
    } 
    else{
        textloading = "";
    }

    return(
        <>
        <div id="twitter" class="padding-top text-center parallax-section">
            <div class="parallax-content">
                <div class="container">
                    <div class="text-center wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
                    <h1><a href="/">Home</a> / Global Oil Price</h1>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Oil Price --> */}
        <div id="pricing-tables" class="padding-top padding-bottom">
        <div class="container text-center">
            <div class="section-title">
            <h3 class="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">Global Oil Price</h3>
            <hr class="title-border"/>
            <h1 class="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">Daily / Weekly Oil Price Information</h1>
            </div>
            <div class="pricing-table text-left">
            <div class="row">
                <div class="col-md-6 col-lg-6" align="center">
                <img src="images/refinery.png" width={"85%"}/>
                </div>
                <div class="col-md-6 col-lg-6">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Futures & Indexes</th><th>Last</th><th>Change</th><th>% Change</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data && data.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{Number.parseFloat(item.last_price).toFixed(2)}</td>
                                <td>{Number.parseFloat(item.change).toFixed(2)}</td>
                                <td>{Number.parseFloat(item.change_percent).toFixed(2)}</td>
                            </tr>                                         
                        )
                    })}
                    </tbody>
                </table>
                {textloading}
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default dynamic (() => Promise.resolve(Oilprice), {ssr: false})