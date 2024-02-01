import React from 'react'
import User1 from "../../assets/user-1.png"
import User2 from "../../assets/user-2.png"
import User3 from "../../assets/user-3.png"
import style from "../../style/home.module.css"
import { ImQuotesLeft } from "react-icons/im";

const Testinomial = () => {
  return (
    <div className={style.testinomial}>
    <div className={style.TestinomialContent}>
        <div className={style.TestinomialWrapper}>
            <div className={style.TestinomialPic}>
            <ImQuotesLeft size={30} />
              <p>Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit.Sint nostrum consequuntur nihil ducimus nam
                 corporis nemo possimus harum cumque fuga quod</p> 
               <img src={User1} alt="User"></img>
              <h3>Sean Parker</h3>
       </div> 
       <div className={style.TestinomialPic}>
       <ImQuotesLeft size={30} />
               <p>Lorem, ipsum dolor sit amet consectetur 
               adipisicing elit.Sint nostrum consequuntur nihil ducimus nam
               corporis nemo possimus harum cumque fuga quod</p> 
              <img src={User2} alt="User"></img>
              <h3>Mike Smith</h3>
     </div>
     <div className={style.TestinomialPic}>
     <ImQuotesLeft size={30} />
              <p>Lorem, ipsum dolor sit amet consectetur 
               adipisicing elit.Sint nostrum consequuntur nihil ducimus nam
               corporis nemo possimus harum cumque fuga quod</p> 
               <img src={User3} alt="User"></img>
               <h3>Mabel Joe</h3>
    </div>
</div>
</div>
</div>

  )
}

export default Testinomial