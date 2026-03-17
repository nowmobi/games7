import Snake from './snake.js';
import GameRenderer from './renderer.js';
import AudioManager from './audio.js';
import GameState from './state.js';
import { i18nManager } from './i18n.js';

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.setupCanvas();
        this.initSDK();
        // 初始化游戏组件
        this.snake = new Snake();
        this.audioManager = new AudioManager();
        this.gameState = new GameState(this.canvas, this.gridSize, this.snake);
        this.renderer = new GameRenderer(this.canvas, this.gridSize, this.loadImages());
        this.isFirstMove = true;  // 添加标记，记录是否是第一次移动

        // 设置控制
        this.setupControls();
        // 设置语言
        i18nManager.setLanguage('en');
        
    }

    // 在 Game 类中添加暂停和恢复方法
    pauseGame() {
        if (this.gameLoop) {
            clearInterval(this.gameLoop);
            this.gameLoop = null;
        }
        this.audioManager.pauseBGM();
        this.isPaused = true;
    }

    resumeGame() {
        if (!this.isPaused) return;
        this.startGameLoop();
        this.audioManager.resumeBGM();
        this.isPaused = false;
    }

    // 修改 initSDK 方法中的事件处理
    initSDK(){
        const self = this; // 保存 this 引用
        window.SDK_OPTIONS = {
            gameId: "s3qipzsmowz03sobcyid3h15cn3zssfv",
            onEvent: function (a) {
                switch (a.name) {
                    case "SDK_GAME_PAUSE":
                        self.pauseGame(); // 暂停游戏
                        break;
                    case "SDK_GAME_START":
                        self.resumeGame(); // 恢复游戏
                        break;
                    case "SDK_READY":
                        // when sdk is ready
                        break;
                }
            }
        };
        (function (a, b, c) {
            var d = a.getElementsByTagName(b)[0];
            a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk.js", d.parentNode.insertBefore(a, d))
        })(document, "script", "gamemonetize-sdk"); 
    }

    setupCanvas() {
        // 检测是否为移动设备
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (this.isMobile) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.setupMobileDisplay();
            this.gridSize = Math.min(this.canvas.width, this.canvas.height) / 20;
        } else {
            this.canvas.width = 800;
            this.canvas.height = 800;
            this.gridSize = 30;
        }
    }

    setupMobileDisplay() {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        document.body.style.margin = '0';
        document.body.style.padding = '0';

        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.gridSize = Math.min(this.canvas.width, this.canvas.height) / 20;
        });
    }

    loadImages() {
        const images = {
            head: new Image(),
            'head-r': new Image(),
            'head-b': new Image(),
            'head-y': new Image(),
            body: new Image(),
            tail: new Image(),
            red: new Image(),
            blue: new Image(),
            yellow: new Image(),
            body_red: new Image(),
            body_blue: new Image(),
            body_yellow: new Image(),
            logo: new Image()
        };

        // 设置图片源
        images.head.src = 'images/head1.png';
        images['head-r'].src = 'images/head-r.png';
        images['head-b'].src = 'images/head-b.png';
        images['head-y'].src = 'images/head-y.png';
        images.body.src = 'images/body1.png';
        images.tail.src = 'images/tail1.png';
        images.red.src = 'images/gem_r.png';
        images.blue.src = 'images/gem_b.png';
        images.yellow.src = 'images/gem_y.png';
        images.body_red.src = 'images/body-r.png';
        images.body_blue.src = 'images/body-b.png';
        images.body_yellow.src = 'images/body-y.png';
        images.logo.src='images/y8.png';

        // 等待所有图片加载完成
        Promise.all(Object.values(images).map(img => {
            return new Promise((resolve) => {
                img.onload = resolve;
            });
        })).then(() => {
            this.imagesLoaded = true;
        });

        return images;
    }

    setupControls() {
        // 键盘控制
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                    e.preventDefault();
                    if (this.isFirstMove) {
                        this.startMoving();
                    }
                    this.snake.nextDirection = e.key.toLowerCase().replace('arrow', '');
                    break;
            }
        });

        // 鼠标和触摸控制
        this.setupPointerControls();
    }

    // 添加 setupPointerControls 方法
    setupPointerControls() {
        this.isMouseDown = false;

        // 鼠标控制
        this.canvas.addEventListener('mousedown', (e) => {
            this.isMouseDown = true;
            this.handlePointerMove(e.clientX, e.clientY);
        });

        this.canvas.addEventListener('mousemove', (e) => {
            if (this.isMouseDown) {
                this.handlePointerMove(e.clientX, e.clientY);
            }
        });

        this.canvas.addEventListener('mouseup', () => this.isMouseDown = false);
        this.canvas.addEventListener('mouseleave', () => this.isMouseDown = false);

        // 触摸控制
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        });

        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            this.handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        });
    }

    handlePointerMove(clientX, clientY) {
        const rect = this.canvas.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const head = this.snake.segments[0];
        const deltaX = x - head.x * this.gridSize;
        const deltaY = y - head.y * this.gridSize;

        if (this.isFirstMove) {
            this.startMoving();
        }

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            this.snake.nextDirection = deltaX > 0 ? 'right' : 'left';
        } else {
            this.snake.nextDirection = deltaY > 0 ? 'down' : 'up';
        }
    }

    startMoving() {
        this.isFirstMove = false;
        this.resumeGame();
        this.snake.speed = 0.1; // 设置蛇的移动速度
    }

    start() {
        if (!this.imagesLoaded) {
            requestAnimationFrame(() => this.start());
            return;
        }

        this.audioManager.startBGM();
        this.snake.speed = 0; // 初始速度设为0
        this.startGameLoop();

        if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
            sdk.showBanner();
        }
    }

    update() {
        if (this.gameState.isGameOver || this.isPaused) return;

        this.snake.update();
        
        this.audioManager.playMove();

        // 检查宝石碰撞
        const eatenGemIndex = this.gameState.checkGemCollision(this.snake);
        
        if (eatenGemIndex !== -1) {
            this.handleGemCollision(eatenGemIndex);
        }

        // 更新游戏状态
        this.gameState.updateInvincibleTime();
        this.gameState.updateParticles();

        // 检查碰撞
        if (this.gameState.invincibleTime <= 0) {
            const hasCollision = this.gameState.checkCollision(this.snake);
            
            if (hasCollision) {
                this.audioManager.playGameOver();
                this.gameOver();
                return;
            }
        }

    }


    handleGemCollision(eatenGemIndex) {
        
        const eatenGem = this.gameState.activeGems[eatenGemIndex];
        this.audioManager.playEat();

        this.gameState.addSnakeSegment(this.snake, eatenGem);

        // 更新宝石
        this.gameState.activeGems.splice(eatenGemIndex, 1);
        this.gameState.activeGems.push(this.gameState.generateGem());

        // 添加特效
        this.gameState.invincibleTime = 1.0;
        this.gameState.particles = this.gameState.createParticles(eatenGem.x, eatenGem.y);
        
        setTimeout(() => {
            if (this.gameState.checkAndRemoveMatches()) {
                this.gameState.updateTopBarStats();
                this.audioManager.playMatch();
                
                if (this.snake.segments.length === 0) {
                    this.snake.speed = 0;
                    setTimeout(() => {
                        this.victory();
                    }, 1000);
                    return;
                }
                this.gameState.invincibleTime = 0.5;
            }
        }, 300);

    }

    createScorePopup(head) {
        const scorePopup = document.createElement('div');
        scorePopup.className = 'score-popup';
        scorePopup.textContent = '+10';
        scorePopup.style.left = `${head.x * this.gridSize}px`;
        scorePopup.style.top = `${head.y * this.gridSize}px`;
        document.getElementById('gameContainer').appendChild(scorePopup);

        setTimeout(() => scorePopup.remove(), 1000);
    }

    resetGame() {
        // 清除当前游戏循环
        clearInterval(this.gameLoop);
        cancelAnimationFrame(this.victoryAnimation);
        cancelAnimationFrame(this.gameOverAnimation);
        this.isFirstMove = true;

        // 重置游戏组件
        this.snake = new Snake();
        this.gameState = new GameState(this.canvas, this.gridSize, this.snake);
        
        // 重置音频
        this.audioManager.stopBGM();
        this.audioManager.startBGM();

        // 清除所有事件监听器
        this.canvas.removeEventListener('click', this._handleClick);
        
        // 重新开始游戏
        this.start();
    }

    // 修改 victory 和 gameOver 中的重置逻辑
    victory() {
        this.gameState.isGameOver = true;
        clearInterval(this.gameLoop);
        this.audioManager.playVictory();

        let opacity = 1;
        const fadeOut = () => {
            opacity -= 0.02;
            this.renderer.clearCanvas();
            this.renderer.ctx.fillStyle = `rgba(255, 255, 255, ${1 - opacity})`;
            this.renderer.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            if (opacity > 0) {
                requestAnimationFrame(fadeOut);
            } else {
                const victoryParticles = this.gameState.createVictoryParticles();
                const drawVictory = () => {
                    this.renderer.drawVictoryScreen(this.gameState.score, victoryParticles);
                    this.updateVictoryParticles(victoryParticles);
                    this.victoryAnimation = requestAnimationFrame(drawVictory);
                };
                drawVictory();

                // 添加按钮点击事件监听器
                const handleClick = (e) => {
                    const rect = this.canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const buttonY = this.canvas.height / 2 + 80;

                    if (y >= buttonY && y <= buttonY + 60 &&
                        x >= (this.canvas.width - 220) / 2 &&
                        x <= (this.canvas.width + 220) / 2) {
                        // 清理动画和事件监听器
                        cancelAnimationFrame(this.victoryAnimation);
                        this.canvas.removeEventListener('click', handleClick);
                        // 重置游戏
                        this.resetGame();
                    }
                };
                this.canvas.addEventListener('click', handleClick);
                if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
                    sdk.showBanner();
                }
            }
        };
        fadeOut();
        // nextAds();
    }

    gameOver() {
        this.gameState.isGameOver = true;
        clearInterval(this.gameLoop);
        this.audioManager.stopBGM(); // 停止背景音乐

        let opacity = 1;
        const fadeOut = () => {
            opacity -= 0.02;
            this.renderer.clearCanvas();
            this.renderer.ctx.fillStyle = `rgba(255, 255, 255, ${1 - opacity})`;
            this.renderer.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            if (opacity > 0) {
                requestAnimationFrame(fadeOut);
            } else {
                const gameOverParticles = this.gameState.createGameOverParticles();
                const drawGameOver = () => {
                    this.renderer.drawGameOverScreen(
                        this.gameState.score,
                        this.gameState.targetScore,
                        gameOverParticles
                    );
                    this.updateGameOverParticles(gameOverParticles);
                    this.gameOverAnimation = requestAnimationFrame(drawGameOver);
                };
                drawGameOver();

                // 添加按钮点击事件监听器
                const handleClick = (e) => {
                    const rect = this.canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const buttonY = this.canvas.height / 2 + 80;

                    if (y >= buttonY && y <= buttonY + 60 &&
                        x >= (this.canvas.width - 220) / 2 &&
                        x <= (this.canvas.width + 220) / 2) {
                        // 清理动画和事件监听器
                        cancelAnimationFrame(this.gameOverAnimation);
                        this.canvas.removeEventListener('click', handleClick);
                        // 重置游戏
                        this.resetGame();
                    }
                };
                this.canvas.addEventListener('click', handleClick);
            }
            if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
                sdk.showBanner();
            }
        };
        fadeOut();
        // nextAds();
    }

    
    updateVictoryParticles(particles) {
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotationSpeed;

            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
        });
    }

    updateGameOverParticles(particles) {
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotationSpeed;

            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
        });
    }

    draw() {
        if (!this.imagesLoaded) return;

        this.renderer.clearCanvas();
        this.renderer.drawGems(this.gameState.activeGems);
        // this.renderer.drawLogo();
        this.renderer.drawSnake(this.snake, this.gameState.snakeColors);
        this.renderer.drawParticles(this.gameState.particles);
    }


    startGameLoop() {
        this.gameLoop = setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / 60); // 60 FPS
    }
}

// 游戏初始化
window.onload = () => {
    const game = new Game();
    document.getElementById('startButton').onclick = () => {
        document.getElementById('startScreen').style.display = 'none';
        game.start();
    };
};