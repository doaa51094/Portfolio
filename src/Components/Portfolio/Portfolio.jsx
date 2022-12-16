import React, { useEffect, useState } from 'react'
import styles from './Portfolio.module.css'
import StarIcon from '../StarIcon/StarIcon'
import img1 from '../../images/login.png'
import img3 from '../../images/weather.png'
import img2 from '../../images/Qoutes.png'
import img4 from '../../images/bookmarker.png'
import img5 from '../../images/meals.png'
import img6 from '../../images/start react.png'
import Modall from '../Modall/Modall'
import TopNav from '../TopNav/TopNav'
import Loading from '../Loading/Loading'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({ duration: 1000});

export default function Portfolio({heading,image,desc,Live,GitHub,title}) {
let projects=[
  { title:'Start React' ,image:img6,item:['HTML5','CSS3','BOOTSTRAP5','JAVASCRIPT','REACT.JS'] ,liveDemo:'https://doaa51094.github.io/first-react-app/',code:'https://github.com/doaa51094/first-react-app',desc:'This project Based on React Js.'},
  { title:'Login Form' ,image:img1,item:['HTML5','CSS3','BOOTSTRAP5','JAVASCRIPT'] ,liveDemo:'https://doaa51094.github.io/Smart-Login-System/',code:'https://github.com/doaa51094/Smart-Login-System',desc:'Smart Login System created using HTML, CSS3, Bootstrap5, and JavaScript.'},
  { title:'Quotes' ,image:img2,item:['HTML5','CSS3','BOOTSTRAP5','JAVASCRIPT'] ,liveDemo:'https://doaa51094.github.io/Quotes/',code:'https://github.com/doaa51094/Quotes',desc:'random Quotes created using HTML, CSS3, Bootstrap5, and JavaScript.'},
  { title:'Weather App' ,image:img3,item:['HTML5','CSS3','BOOTSTRAP5','JAVASCRIPT','API'] ,liveDemo:'https://doaa51094.github.io/Weather-App/',code:'https://github.com/doaa51094/Weather-App',desc:'A simple HTML, CSS3, Bootstrap5, and JavaScript application to display weather of any location'},
  { title:'BookMarker' ,image:img4,item:['HTML5','CSS3','BOOTSTRAP5','JAVASCRIPT'] ,liveDemo:'https://doaa51094.github.io/BookMarker/',code:'https://github.com/doaa51094/BookMarker',desc:'This application is created to add, visit and delete your favorite sites. it was created using HTML, CSS3, Bootstrap5, JavaScript.'},
  { title:'Yummy' ,image:img5,item:['HTML5','CSS3','BOOTSTRAP5','JAVASCRIPT','API'] ,liveDemo:'https://doaa51094.github.io/Meals/',code:'https://github.com/doaa51094/Meals',desc:'This application is created to add, visit and delete your favorite sites. it was created using HTML, CSS3, Bootstrap5, JavaScript.'},
  
]
const [isLoading,setLoading]=useState(false);

useEffect(()=>{setLoading(true);
setTimeout(()=>{setLoading(false)} ,800)
} ,[])
const [tempData,settempData]=useState([]);
const display=(img,title,live,code,desc)=> {
  let tempData=[title,img,live,code,desc]
  settempData(item =>[...tempData ])
}

  return (
    <>
    {isLoading?<Loading/>:<> <section className={`${styles.portfolio} d-flex justify-content-center align-items-center`}>
    <TopNav title={'Portfolio'}/>
      <div className="container">
        <div className="row text-center gx-4 gy-4 py-4">
         <div data-aos="fade-right">
         <h3 >My Work</h3>
          <StarIcon style='justify-content-center pb-3'/>
         </div >
          {projects.map((item,i)=> 
          
          <div className="col-lg-4" key={i}>
          <Modall heading={tempData[0]} image={tempData[1]} desc={tempData[4]} Live={tempData[2]} GitHub={tempData[3]}/>
          <div className={`${styles.item} `} onClick={()=> display(item.image,item.title,item.liveDemo,item.code,item.desc)} data-bs-toggle="modal"  data-bs-target="#exampleModal">   
            <img src={item.image} className='w-100' alt="" />
            <div className={`${styles.layer} text-start`}>
            <a href={item.liveDemo} target='_blank'><i className="fa-regular fa-eye"></i></a>
            <a href={item.code} target='_blank'><i className=" fa-solid fa-link"></i></a>
            <h5 className='text-center fs-2'>{item.title}</h5>
            <div className='d-flex justify-content-center'>
             <ul className='d-flex justify-content-center flex-wrap list-unstyled '>
             {item.item.map((skill,i)=> <li key={i}>{skill}</li>) }
             </ul>
            </div>
            </div>
          </div>
        </div> 
          )
         
          }
         
        </div>
        </div>
      
    </section></>}
   </>
  )
}
