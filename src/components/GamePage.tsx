import { Game } from './Game';
import { Link } from 'react-router-dom';

export function GamePage() {
  return (
    <div className="bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/projects"
            className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Classic Pong</h1>
          <p className="text-gray-300 text-lg">
            A modern implementation of the classic Pong game built with Phaser.js and React.
            Challenge a friend to a game of Pong!
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <Game />
        </div>
        <div className="mt-8 text-center text-gray-300">
          <h2 className="text-2xl font-semibold mb-4">How to Play</h2>
          <div className="space-y-2">
            <p>Player 1: Use W/S keys to move your paddle up/down</p>
            <p>Player 2: Use Up/Down arrow keys to move your paddle</p>
            <p>First player to reach 5 points wins!</p>
            <p className="mt-4">Press SPACE to start the game</p>
          </div>
        </div>
      </div>
    </div>
  );
} 