import React from 'react'

const Dashboard = () => {

    let [balls, setBalls,
        strikes, setStrikes,
        fouls, setFouls,outs, setOuts,
        hits, setHits  
      ] = useState(0)
    
 
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
                // setOuts(0)
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

          function outsCount(){ 
            if(outs < 2) {
                setOuts(outs+1)
                  }
            else {
                setStrikes(0);
                setBalls(0)
                setOuts(0)
                // setOuts(0)
                // setOuts(outs+1)
    
                };
                return {outCount}
            };

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
             <button className='ballsButton' onClick= {ballCount}>Balls</button> 
             
             <button className='strikeButton'onClick= {strikeCount}>AddStrike</button>
            
             <button className='foulButton' onClick= {foulCount}>Fouls</button> 
             <button className='hitButton' onClick= {hitCount}>Hits</button>     
            </div>
            <div className='displays'>
                <div>Balls: {balls}</div>  
                <div>Strikes: {strikes}</div>
                <div>Hits: {hits}</div>
                <div>Fouls: {fouls}</div>
            </div>
        
            </section>
            )
        };
  }     
       export default Dashboard
        // console.log('Dashboard.js -> %cDashboard:', 'color: cyan', Dashboard)
        
        
        













}