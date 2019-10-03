import React, {useState} from 'react';

   function Dashboard() {
    let [balls, setBalls] = useState(0);
    let [strikes, setStrikes] = useState(0);
    let [fouls, setFouls] = useState(0);
       let [hits, setHits] = useState(0);
//    let [outs, setOuts] = useState(0);

    
    function ballCount() {
       
    if(balls < 3) {
        setBalls(balls+1)
    }
    else {
        setBalls(0);
        setStrikes(0);
        // setWalks(walks+1)
    };
    return(ballCount)
};


    function strikeCount(){ 
        if(strikes < 2) {
            setStrikes(strikes+1)
              }
        else {
            setStrikes(0);
            setBalls(0)
            // setOuts(+1)
            // setOuts(outs+1)

            };
            return(strikeCount)
        };
            
     function foulCount(){
        if(strikes<2){
        setFouls(fouls+1) 
        strikeCount(strikes+1)  
        }
        else {
            setFouls(fouls+1)
              } 
        return {foulCount};
      };

    //   function outCount(){ 
    //     if(outs < 2) {
    //         setOuts(outs+1)
    //           }
    //     else {
    //         setStrikes(0);
    //         setBalls(0)
    //         setOuts(0)
    //         };
    //         return {outCount}
    //     };
   
     function hitCount(){
         setHits(hits+1)
        setFouls(0)
        setBalls(0) 
        setStrikes(0)  
            
        return {hitCount};    
     };


return (
    <section>
    <div> 
        <h2>Here in the Dashboard return</h2>
     <button className='ballsButton' onClick= {ballCount}>Balls</button> 
     
     <button className='strikeButton'onClick= {strikeCount}>Strikes</button>
    
     <button className='foulButton' onClick= {foulCount}>Fouls</button>
     {/* <button className='outButton' onClick= {outCount}>Outs</button>   */}
     <button className='hitButton' onClick= {hitCount}>Hits</button>     
    </div>
    <div className='displays'>
        <p>Balls: {balls}</p>  
        <p>Strikes: {strikes}</p>
        {/* <p>Outs: {outs}</p> */}
        <p>Hits: {hits}</p>
        <p>Fouls: {fouls}</p>
    </div>

    </section>
    )



};

export default Dashboard
// console.log('Dashboard.js -> %cDashboard:', 'color: cyan', Dashboard)