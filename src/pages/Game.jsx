import React, { useState, useEffect } from 'react';
import '../styles/Game.css';

function Game() {
    // Initialisation de l'état pour le plateau de jeu, joueur actuel, état de la partie, scores et niveau de difficulté
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [level, setLevel] = useState('easy');
    const [gameStarted, setGameStarted] = useState(false);

    // Gestion du clic joueur
    const handleClick = (index) => {
        if (!gameStarted || board[index] || calculateWinner(board) || isGameOver || !isXNext) return;
        const newBoard = board.slice();
        newBoard[index] = 'X';
        setBoard(newBoard);
        setIsXNext(false);

        // Vérifie le gagnant ou s'il reste des cases vides
        const winner = calculateWinner(newBoard);
        if (winner || !newBoard.includes(null)) {
            setIsGameOver(true);
            if (winner) {
                setPlayerScore((score) => score + 1);
            }
        }
    };

    // Déplacement de l'ordinateur en fonction du niveau de difficulté sélectionné
    const computerMove = () => {
        const emptySquares = board
            .map((value, index) => (value === null ? index : null))
            .filter(index => index !== null);

        if (emptySquares.length === 0 || isGameOver) return;

        let move;
        if (level === 'easy') {
            // Déplacement aléatoire
            move = emptySquares[Math.floor(Math.random() * emptySquares.length)];
        } else if (level === 'medium') {
            move = mediumLevelMove(emptySquares);
        } else {
            move = hardLevelMove();
        }

        const newBoard = board.slice();
        newBoard[move] = 'O';
        setBoard(newBoard);
        setIsXNext(true);

        // Vérifie si l'ordinateur gagne après son mouvement
        const winner = calculateWinner(newBoard);
        if (winner || !newBoard.includes(null)) {
            setIsGameOver(true);
            if (winner) {
                setComputerScore((score) => score + 1);
            }
        }
    };

    // Effet déclenché pour le déplacement de l'ordinateur après le tour du joueur
    useEffect(() => {
        if (!isXNext && !isGameOver) {
            const timer = setTimeout(computerMove, 1000);
            return () => clearTimeout(timer);
        }
    }, [isXNext, isGameOver, board]);

    // Niveau moyen: Vérifie s'il peut gagner, sinon joue au hasard
    const mediumLevelMove = (emptySquares) => {
        const winningMove = emptySquares.find(index => {
            const testBoard = board.slice();
            testBoard[index] = 'O';
            return calculateWinner(testBoard) === 'O';
        });
        return winningMove !== undefined ? winningMove : emptySquares[Math.floor(Math.random() * emptySquares.length)];
    };

    // Niveau difficile: Utilise l'algorithme Minimax pour déterminer le meilleur mouvement
    const hardLevelMove = () => {
        const bestMove = minimax(board, 'O').index;
        return bestMove;
    };

    // Algorithme Minimax pour le niveau difficile
    const minimax = (newBoard, player) => {
        const availSpots = newBoard
            .map((value, index) => (value === null ? index : null))
            .filter(index => index !== null);

        if (calculateWinner(newBoard) === 'X') return { score: -10 };
        if (calculateWinner(newBoard) === 'O') return { score: 10 };
        if (availSpots.length === 0) return { score: 0 };

        const moves = [];
        for (let i = 0; i < availSpots.length; i++) {
            const move = {};
            move.index = availSpots[i];
            newBoard[availSpots[i]] = player;

            if (player === 'O') {
                const result = minimax(newBoard, 'X');
                move.score = result.score;
            } else {
                const result = minimax(newBoard, 'O');
                move.score = result.score;
            }

            newBoard[availSpots[i]] = null;
            moves.push(move);
        }

        let bestMove;
        if (player === 'O') {
            let bestScore = -Infinity;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }

        return moves[bestMove];
    };

    // Calcul du gagnant
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    // Détermine l'état de la partie (gagnant, match nul, ou prochain joueur)
    const winner = calculateWinner(board);
    const isDraw = !board.includes(null) && !winner;
    const status = winner
        ? `Gagnant: ${winner}`
        : isDraw
            ? 'Match nul !'
            : `Prochain joueur: ${isXNext ? 'X' : 'Ordinateur (O)'}`;

    // Réinitialisation du plateau de jeu et de l'état de la partie
    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setIsGameOver(false);
    };

    // Démarre une nouvelle partie
    const startGame = () => {
        setGameStarted(true);
        handleReset();
    };

    // Structure de l'interface utilisateur du jeu
    return (
        <div className="game_cont">
            <div className="game">
                <h1>Morpion</h1>
                <div className="controls">
                    <button className="reset-btn" onClick={startGame}>Jouer</button>
                    <select className="reset-btn" onChange={(e) => setLevel(e.target.value)} value={level}>
                        <option value="easy">Facile</option>
                        <option value="medium">Moyen</option>
                        <option value="hard">Difficile</option>
                    </select>
                    <button className="reset-btn" onClick={handleReset}>Rejouer</button>
                </div>
                <div className="status">{status}</div>
                <div className="score">
                    <p>Score Joueur: {playerScore}</p>
                    <p>Score Ordinateur: {computerScore}</p>
                </div>
                <div className="board">
                    {board.map((value, index) => (
                        <button
                            key={index}
                            className={`square ${value ? 'filled' : ''}`}
                            onClick={() => handleClick(index)}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Game;
