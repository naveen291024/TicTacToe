import {useState} from 'react';

const initialBoard = Array(9).fill(null);

 const useTicTacToe = () => {

    const [board,setBoard] = useState(initialBoard);
    const [isXnext,setIsXNext] = useState(true);

    const WINNING_PATTERNS = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const calculateWinner = (currentboard) => {
       for(let i=0;i<WINNING_PATTERNS.length;i++)
       {
            const [a,b,c] = WINNING_PATTERNS[i];
              if(currentboard[a] && currentboard[a] === currentboard[b] && currentboard[a] === currentboard[c])
              {
                 return currentboard[a];
              }
       }
    };

    const handleClick = (index) => {
        const winner = calculateWinner(board);
        if(winner || board[index]) return;
        const newboard = [...board];
        newboard[index] = isXnext ? 'X' : 'O';
        setBoard(newboard);
        setIsXNext(!isXnext);
    }

    const getStatusMessage = () => {
       const winner = calculateWinner(board);
       if(winner) return `Player ${winner} wins the Game`;
       if(!board.includes(null)) return `it's a draw`;
       return `It's Player ${isXnext ? 'X' : 'O'} turn`;
    };

    const resetGame = () => {
        setBoard(initialBoard);
    }

    return {handleClick,board,getStatusMessage,resetGame}
};

export default useTicTacToe;