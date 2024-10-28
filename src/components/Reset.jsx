import GameState from "./GameState";

function Reset({ gameState, onReset }) {
    // Check if the game is still in progress
    if (gameState === GameState.inProgress) {
        return null; // Render nothing if the game is in progress
    }
    
    
    return (
        <button className="reset-button" onClick={onReset}>
            Reset
        </button>
    );
}

export default Reset;