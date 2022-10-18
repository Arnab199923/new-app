import React, { useEffect,useState } from 'react'
import './covid.css'

const Covid = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] =useState([])

    
    const  getCovidData = async ()=>{
        try {
            // eslint-disable-next-line no-unused-vars
            const res = await  fetch ('https://data.covid19india.org/data.json')
         // eslint-disable-next-line no-unused-vars
         const realData=   await res.json();
         setData(realData.statewise[0])
          console.log(realData.statewise[0]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCovidData();
    },[]);
 
  return (
    <>
        <h2>
            live covid tracker
        </h2>
        <p>
            a live covid tracker website
        </p>

        <ul>
            <li className='cards'>
                <div className='main'>
                    <div className='inner'>
                        <p className='names'>
                            <span>OUR</span>
                            country
                        </p>
                        <p className='para new_para'>
                            India
                        </p>

                    </div>
                </div>

            </li>


            <li className='cards'>
                <div className='main'>
                    <div className='inner'>
                        <p className='names'>
                            <span>Live cases =</span>
                          {data.recovered}
                        </p>
                        <p className='para new_para'>
                            India
                        </p>

                    </div>
                </div>

            </li>
        </ul>
    </>
  )
}

export default Covid