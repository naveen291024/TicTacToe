import useTicTacToe from './usetictactoe.jsx';

const TicTacToe = () => {

   const {handleClick,board,getStatusMessage,resetGame} = useTicTacToe();

    return <div className='game'>
           <div className='status'>
              {getStatusMessage()}
              <button onClick={()=>resetGame()}>
                Reset
              </button>
           </div>
           <div className='board'>
               {board.map((cell,index)=>(
                  <button className='cell' key={index} onClick={()=>handleClick(index)} disabled={cell != null}>{cell}</button>))}
           </div>
           </div>

};

export default TicTacToe;