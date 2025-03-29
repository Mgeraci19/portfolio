import { useEffect, useRef } from 'react';
import Phaser from 'phaser';

class PongScene extends Phaser.Scene {
  private ball!: Phaser.Physics.Arcade.Sprite;
  private paddle1!: Phaser.GameObjects.Rectangle;
  private paddle2!: Phaser.GameObjects.Rectangle;
  private score1: number = 0;
  private score2: number = 0;
  private scoreText1!: Phaser.GameObjects.Text;
  private scoreText2!: Phaser.GameObjects.Text;
  private startText!: Phaser.GameObjects.Text;
  private titleText!: Phaser.GameObjects.Text;
  private gameStarted: boolean = false;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private readonly BASE_BALL_SPEED = 300;
  private readonly MAX_BALL_SPEED = 450;
  private readonly SPEED_INCREMENT = 5;
  private currentBallSpeed: number = 300;
  private readonly WIN_SCORE = 5;
  private readonly GAME_WIDTH = 800;
  private readonly GAME_HEIGHT = 600;
  private readonly PADDLE_WIDTH = 40;
  private readonly PADDLE_HEIGHT = 100;

  constructor() {
    super({ key: 'PongScene' });
  }

  preload() {
    // Create a white circle texture for the ball
    const graphics = this.add.graphics();
    graphics.fillStyle(0xffffff);
    graphics.fillCircle(8, 8, 8);
    graphics.generateTexture('ball', 16, 16);
    graphics.destroy();
  }

  create() {
    this.resetGame();
  }

  private resetGame() {
    // Reset scores
    this.score1 = 0;
    this.score2 = 0;
    this.currentBallSpeed = this.BASE_BALL_SPEED;
    this.gameStarted = false;

    // Clear existing objects if they exist
    if (this.ball) this.ball.destroy();
    if (this.paddle1) this.paddle1.destroy();
    if (this.paddle2) this.paddle2.destroy();
    if (this.scoreText1) this.scoreText1.destroy();
    if (this.scoreText2) this.scoreText2.destroy();
    if (this.startText) this.startText.destroy();
    if (this.titleText) this.titleText.destroy();

    // Add center line
    this.add.line(this.GAME_WIDTH / 2, 0, this.GAME_WIDTH / 2, this.GAME_HEIGHT, 0xffffff, 0.2);

    // Add paddles
    this.paddle1 = this.add.rectangle(this.PADDLE_WIDTH / 2, this.GAME_HEIGHT / 2, this.PADDLE_WIDTH, this.PADDLE_HEIGHT, 0xffffff);
    this.paddle2 = this.add.rectangle(this.GAME_WIDTH - this.PADDLE_WIDTH / 2, this.GAME_HEIGHT / 2, this.PADDLE_WIDTH, this.PADDLE_HEIGHT, 0xffffff);

    // Add ball with physics
    this.ball = this.add.sprite(this.GAME_WIDTH / 2, this.GAME_HEIGHT / 2, 'ball') as Phaser.Physics.Arcade.Sprite;
    this.ball.setDisplaySize(16, 16);
    this.physics.add.existing(this.ball, false);
    if (this.ball.body instanceof Phaser.Physics.Arcade.Body) {
      this.ball.body.setBounce(1, 1);
      this.ball.body.setCollideWorldBounds(true);
      this.ball.body.setVelocity(0, 0);
    }

    // Add score text with improved styling
    this.scoreText1 = this.add.text(this.GAME_WIDTH / 4, 80, '0', {
      fontSize: '32px',
      color: '#ffffff',
      fontFamily: 'Arial',
      fontStyle: 'bold'
    });
    this.scoreText2 = this.add.text(3 * this.GAME_WIDTH / 4, 80, '0', {
      fontSize: '32px',
      color: '#ffffff',
      fontFamily: 'Arial',
      fontStyle: 'bold'
    });

    // Add start text with improved styling
    this.startText = this.add.text(this.GAME_WIDTH / 2, this.GAME_HEIGHT / 2, 'Press SPACE to Start\nPlayer 1: W/S\nPlayer 2: Up/Down\nFirst to 5 wins!', {
      fontSize: '24px',
      color: '#ffffff',
      fontFamily: 'Arial',
      align: 'center',
      lineSpacing: 10
    }).setOrigin(0.5);

    // Setup keyboard controls
    if (this.input.keyboard) {
      this.cursors = this.input.keyboard.createCursorKeys();
      this.input.keyboard.on('keydown-SPACE', () => {
        if (!this.gameStarted) {
          this.gameStarted = true;
          this.startText.setVisible(false);
          this.startBall();
        }
      });
    }
  }

  update() {
    if (!this.gameStarted) return;

    // Move paddles
    if (this.input.keyboard) {
      const wKey = this.input.keyboard.addKey('W');
      const sKey = this.input.keyboard.addKey('S');
      
      if (wKey.isDown && this.paddle1.y > this.PADDLE_HEIGHT / 2) {
        this.paddle1.y -= 10;
      }
      if (sKey.isDown && this.paddle1.y < this.GAME_HEIGHT - this.PADDLE_HEIGHT / 2) {
        this.paddle1.y += 10;
      }
      if (this.cursors.up.isDown && this.paddle2.y > this.PADDLE_HEIGHT / 2) {
        this.paddle2.y -= 10;
      }
      if (this.cursors.down.isDown && this.paddle2.y < this.GAME_HEIGHT - this.PADDLE_HEIGHT / 2) {
        this.paddle2.y += 10;
      }
    }

    // Ball collision with paddles
    if (this.ball.x <= this.PADDLE_WIDTH && 
        this.ball.y >= this.paddle1.y - this.PADDLE_HEIGHT / 2 && 
        this.ball.y <= this.paddle1.y + this.PADDLE_HEIGHT / 2) {
      const relativeIntersectY = (this.ball.y - this.paddle1.y) / (this.PADDLE_HEIGHT / 2);
      const angle = relativeIntersectY * 60 - 30; // Reduced angle range for more predictable bounces
      const rad = (angle * Math.PI) / 180;
      if (this.ball.body instanceof Phaser.Physics.Arcade.Body) {
        this.ball.body.setVelocity(
          this.currentBallSpeed,
          this.currentBallSpeed * Math.sin(rad)
        );
      }
    }

    if (this.ball.x >= this.GAME_WIDTH - this.PADDLE_WIDTH && 
        this.ball.y >= this.paddle2.y - this.PADDLE_HEIGHT / 2 && 
        this.ball.y <= this.paddle2.y + this.PADDLE_HEIGHT / 2) {
      const relativeIntersectY = (this.ball.y - this.paddle2.y) / (this.PADDLE_HEIGHT / 2);
      const angle = relativeIntersectY * 60 - 30; // Reduced angle range for more predictable bounces
      const rad = (angle * Math.PI) / 180;
      if (this.ball.body instanceof Phaser.Physics.Arcade.Body) {
        this.ball.body.setVelocity(
          -this.currentBallSpeed,
          this.currentBallSpeed * Math.sin(rad)
        );
      }
    }

    // Check for scoring (left and right walls)
    if (this.ball.x <= this.PADDLE_WIDTH / 2) {
      // Ball hit left wall - Player 2 scores
      this.score2++;
      this.scoreText2.setText(this.score2.toString());
      this.resetBall();
      this.checkWinCondition();
    } else if (this.ball.x >= this.GAME_WIDTH - this.PADDLE_WIDTH / 2) {
      // Ball hit right wall - Player 1 scores
      this.score1++;
      this.scoreText1.setText(this.score1.toString());
      this.resetBall();
      this.checkWinCondition();
    }

    // Increase ball speed gradually
    if (this.ball.body instanceof Phaser.Physics.Arcade.Body) {
      const currentVelocity = this.ball.body.velocity;
      const speed = Math.sqrt(currentVelocity.x * currentVelocity.x + currentVelocity.y * currentVelocity.y);
      if (speed > 0) {
        const directionX = currentVelocity.x / speed;
        const directionY = currentVelocity.y / speed;
        this.currentBallSpeed = Math.min(this.currentBallSpeed + this.SPEED_INCREMENT, this.MAX_BALL_SPEED);
        this.ball.body.setVelocity(
          this.currentBallSpeed * directionX,
          this.currentBallSpeed * directionY
        );
      }
    }
  }

  private startBall() {
    if (this.ball.body instanceof Phaser.Physics.Arcade.Body) {
      const direction = Math.random() > 0.5 ? 1 : -1;
      this.ball.body.setVelocity(this.currentBallSpeed * direction, this.currentBallSpeed * (Math.random() > 0.5 ? 1 : -1));
    }
  }

  private resetBall() {
    this.ball.setPosition(this.GAME_WIDTH / 2, this.GAME_HEIGHT / 2);
    if (this.ball.body instanceof Phaser.Physics.Arcade.Body) {
      this.ball.body.setVelocity(0, 0);
    }
    this.currentBallSpeed = this.BASE_BALL_SPEED;
    // Add a small delay before starting the ball
    this.time.delayedCall(500, () => {
      this.startBall();
    });
  }

  private checkWinCondition() {
    if (this.score1 >= this.WIN_SCORE) {
      this.gameStarted = false;
      this.startText.setText('Player 1 Wins!\nPress SPACE to Play Again');
      this.startText.setVisible(true);
      if (this.input.keyboard) {
        this.input.keyboard.once('keydown-SPACE', () => {
          this.resetGame();
        });
      }
    } else if (this.score2 >= this.WIN_SCORE) {
      this.gameStarted = false;
      this.startText.setText('Player 2 Wins!\nPress SPACE to Play Again');
      this.startText.setVisible(true);
      if (this.input.keyboard) {
        this.input.keyboard.once('keydown-SPACE', () => {
          this.resetGame();
        });
      }
    }
  }
}

export function PhaserGame() {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'game-container',
      scale: {
        mode: Phaser.Scale.NONE,
        width: 800,
        height: 600,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: false
        }
      },
      scene: PongScene
    };

    gameRef.current = new Phaser.Game(config);

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900">
      <div className="max-w-[800px] w-full mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Classic Pong</h1>
          <p className="text-gray-300 text-lg">
            A two-player classic game where you control paddles to hit the ball back and forth.
            First player to reach 5 points wins!
          </p>
        </div>
        <div className="relative w-full aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          <div id="game-container" className="absolute inset-0" />
        </div>
      </div>
    </div>
  );
} 