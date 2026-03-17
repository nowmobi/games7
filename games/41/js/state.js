class GameState {
    constructor(canvas, gridSize, snake) {
        this.canvas = canvas;
        this.gridSize = gridSize;
        this.snake = snake;
        this.isGameOver = false;
        this.invincibleTime = 0;
        this.score = 0;
        this.autoGrowthTimer = 0;
        this.autoGrowthInterval = 8; // 每10秒自动增长一次

        // 初始化宝石系统
        this.initialGemCount = 30;
        this.activeGems = [];
        for (let i = 0; i < this.initialGemCount; i++) {
            this.activeGems.push(this.generateGem());
        }

        // 初始化蛇身颜色数组
        this.snakeColors = ['yellow']; // 蛇头初始颜色
        const colors = ['red', 'blue', 'yellow'];

        // 生成不会形成三消的初始蛇身颜色
        for (let i = 0; i < this.snake.startSegmentsLength; i++) {
            let validColor;
            do {
                validColor = colors[Math.floor(Math.random() * colors.length)];
                // 检查是否会形成三消
            } while (
                this.snakeColors.length >= 2 &&
                validColor === this.snakeColors[this.snakeColors.length - 1] &&
                validColor === this.snakeColors[this.snakeColors.length - 2]
            );
            this.snakeColors.push(validColor);
        }

        // 粒子效果
        this.particles = null;
    }



    generateGem() {
        const gem = {
            x: Math.floor(Math.random() * (this.canvas.width / this.gridSize)),
            y: Math.floor(Math.random() * (this.canvas.height / this.gridSize)),
            type: ['red', 'blue', 'yellow'][Math.floor(Math.random() * 3)]
        };

        // 确保宝石不会出现在蛇身上或其他宝石上
        const isOverlapping = this.snake.segments.some(segment =>
            segment.x === gem.x && segment.y === gem.y
        ) || this.activeGems.some(existingGem =>
            existingGem.x === gem.x && existingGem.y === gem.y
        );

        return isOverlapping ? this.generateGem() : gem;
    }

    checkCollision(snake) {
        const head = snake.segments[0];
        if (!head) return;
        // 检查是否撞墙
        if (head.x < 0 || head.x >= (this.canvas.width / this.gridSize) ||
            head.y < 0 || head.y >= (this.canvas.height / this.gridSize)) {
            return true;
        }

        // 检查是否撞到自己
        for (let i = 1; i < snake.segments.length; i++) {
            const segment = snake.segments[i];
            const collisionTolerance = 0.2;
            if (Math.abs(head.x - segment.x) < collisionTolerance &&
                Math.abs(head.y - segment.y) < collisionTolerance) {
                return true;
            }
        }

        return false;
    }

    /**
     * 检查并移除匹配的节点
     * @returns 
     */
    checkAndRemoveMatches() {
        const colors = this.snakeColors;
        let matches = [];

        // 从蛇头开始检查三个相同颜色的相邻节点
        if (colors.length >= 4 && colors[0] === colors[1] && colors[0] === colors[2]) {
            // 将蛇头颜色更换为第四节的颜色
            const newHeadColor = colors[3];
            // 标记第2、3、4节为待消除
            matches.push(0);

            // 确保蛇身长度为4时正确处理
            if (colors.length === 4) {
                this.snakeColors = [newHeadColor];
                this.snake.segments = [this.snake.segments[0]];
                return true;
            }

            // 更新蛇头颜色
            this.snakeColors[0] = newHeadColor;
        } else if (colors.length === 3 && colors[0] === colors[1] && colors[0] === colors[2]) {
            const segments = this.snake.segments.slice(0, 3);

            // 在蛇头位置创建消除特效
            const head = this.snake.segments[0];
            const matchParticles = this.createMatchParticles(head.x, head.y, this.snakeColors[0]);
            if (!this.particles) {
                this.particles = [];
            }
            this.particles.push(...matchParticles);

            // 删除第2、3、4节，保留蛇头
            this.snake.segments.splice(0, 3);
            this.snakeColors.splice(0, 3);
            this.score += 10; // 每次三消增加10分


            // 创建得分特效
            const scorePopup = document.createElement('div');
            scorePopup.className = 'score-popup';
            scorePopup.textContent = '+10';
            scorePopup.style.left = `${segments[0].x * this.gridSize}px`;
            scorePopup.style.top = `${segments[0].y * this.gridSize}px`;
            document.getElementById('gameContainer').appendChild(scorePopup);

            // 移除得分特效
            setTimeout(() => scorePopup.remove(), 1000);
            return true;
        }
        if (matches.length > 0) {
            // 从蛇身和颜色数组中移除匹配的节点
            matches.forEach(startIndex => {
                const segments = this.snake.segments.slice(startIndex, startIndex + 3);

                // 在蛇头位置创建消除特效
                const head = this.snake.segments[0];
                const matchParticles = this.createMatchParticles(head.x, head.y, this.snakeColors[0]);
                if (!this.particles) {
                    this.particles = [];
                }
                this.particles.push(...matchParticles);

                // 删除第2、3、4节，保留蛇头
                this.snake.segments.splice(startIndex + 1, 3);
                this.snakeColors.splice(startIndex + 1, 3);
                this.score += 10; // 每次三消增加10分

                // 创建得分特效
                const scorePopup = document.createElement('div');
                scorePopup.className = 'score-popup';
                scorePopup.textContent = '+10';
                scorePopup.style.left = `${segments[0].x * this.gridSize}px`;
                scorePopup.style.top = `${segments[0].y * this.gridSize}px`;
                document.getElementById('gameContainer').appendChild(scorePopup);

                // 检查是否只剩下蛇头
                if (this.snake.segments.length === 0) {
                    return true;
                }

                // 移除得分特效
                setTimeout(() => scorePopup.remove(), 1000);
            });

            return true;
        }

        return false;
    }

    /**
     * 创建匹配特效
     * @param {*} x 
     * @param {*} y 
     * @param {*} color 
     * @returns 
     */
    createMatchParticles(x, y, color) {
        const particles = [];
        const particleCount = 20; // 增加粒子数量
        const colorMap = {
            'red': '#FF4444',
            'blue': '#4444FF',
            'yellow': '#44FF44'
        };

        // 创建爆炸效果的粒子
        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 * i) / particleCount;
            const speed = 3 + Math.random() * 4; // 增加粒子速度
            const size = Math.random() * 4 + 3; // 增加粒子大小
            particles.push({
                x: x * this.gridSize + this.gridSize / 2,
                y: y * this.gridSize + this.gridSize / 2,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1.0,
                color: colorMap[color] || '#FFFFFF',
                size: size,
                alpha: 1.0,
                decay: 0.02 + Math.random() * 0.02 // 添加衰减速率
            });
        }

        // 添加一些较小的闪光粒子
        for (let i = 0; i < particleCount / 2; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 1 + Math.random() * 2;
            particles.push({
                x: x * this.gridSize + this.gridSize / 2,
                y: y * this.gridSize + this.gridSize / 2,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 0.8,
                color: '#FFFFFF',
                size: Math.random() * 2 + 1,
                alpha: 0.8,
                decay: 0.04 + Math.random() * 0.02
            });
        }

        return particles;
    }

    createParticles(x, y) {
        const particles = [];
        for (let i = 0; i < 5; i++) {
            particles.push({
                x: x * this.gridSize + this.gridSize / 2,
                y: y * this.gridSize + this.gridSize / 2,
                vx: (Math.random() - 0.5) * 5,
                vy: (Math.random() - 0.5) * 5,
                life: 0.8
            });
        }
        return particles;
    }

    updateParticles() {
        if (this.particles) {
            this.particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= p.decay || 0.05;
                if (p.alpha) {
                    p.alpha = Math.max(0, p.alpha - (p.decay || 0.05));
                }
            });
            this.particles = this.particles.filter(p => p.life > 0);
        }
    }

    updateInvincibleTime() {
        if (this.invincibleTime > 0) {
            this.invincibleTime -= 1 / 60; // 60 FPS下每帧减少的时间
        }

        // 更新自动生长计时器
        this.autoGrowthTimer += 1 / 60;
        if (this.autoGrowthTimer >= this.autoGrowthInterval) {
            this.autoGrowthTimer = 0;
            this.addAutoGrowthSegment();
        }
    }

    addAutoGrowthSegment() {
        const colors = ['red', 'blue', 'yellow'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const lastColor = this.snakeColors[this.snakeColors.length - 1];
        const secondLastColor = this.snakeColors[this.snakeColors.length - 2];
        if (randomColor === lastColor && randomColor === secondLastColor) {
            // 生成一个不同的颜色继续尝试
            const remainingColors = colors.filter(c => c !== lastColor || c !== secondLastColor);
            const newColor = remainingColors[Math.floor(Math.random() * remainingColors.length)];
            this.snakeColors.push(newColor);
            return;
        }

        // 获取蛇尾节点
        const lastSegment = this.snake.segments[this.snake.segments.length - 1];
        const secondLastSegment = this.snake.segments[this.snake.segments.length - 2];

        // 计算新节点位置（在蛇尾后面）
        let newSegment;
        if (secondLastSegment) {
            // 根据最后两个节点的位置计算新节点位置
            const dx = lastSegment.x - secondLastSegment.x;
            const dy = lastSegment.y - secondLastSegment.y;
            newSegment = {
                x: lastSegment.x + dx,
                y: lastSegment.y + dy
            };
        } else {
            // 如果只有一个节点，根据当前方向添加
            newSegment = {
                x: lastSegment.x - (this.snake.direction === 'right' ? -1 : this.snake.direction === 'left' ? 1 : 0),
                y: lastSegment.y - (this.snake.direction === 'down' ? -1 : this.snake.direction === 'up' ? 1 : 0)
            };
        }

        // 添加新节点和颜色
        this.snake.segments.push(newSegment);
        this.snakeColors.push(randomColor);

        // 在新增节点位置创建粒子特效
        const growthParticles = this.createGrowthParticles(newSegment.x, newSegment.y, randomColor);
        if (!this.particles) {
            this.particles = [];
        }
        this.particles.push(...growthParticles);

        this.updateTopBarStats();
    }

    createGrowthParticles(x, y, color) {
        const particles = [];
        const particleCount = 15;
        const colorMap = {
            'red': '#FF4444',
            'blue': '#4444FF',
            'yellow': '#44FF44'
        };

        // 创建扩散效果的粒子
        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 * i) / particleCount;
            const speed = 2 + Math.random() * 3;
            const size = Math.random() * 3 + 2;
            particles.push({
                x: x * this.gridSize + this.gridSize / 2,
                y: y * this.gridSize + this.gridSize / 2,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1.0,
                color: colorMap[color] || '#FFFFFF',
                size: size,
                alpha: 0.8,
                decay: 0.03 + Math.random() * 0.02
            });
        }

        return particles;
    }

    checkGemCollision(snake) {
        const head = snake.segments[0];
        const eatenGemIndex = this.activeGems.findIndex(gem =>
            head && Math.abs(head.x - gem.x) < 0.8 && Math.abs(head.y - gem.y) < 0.8
        );

        return eatenGemIndex;
    }

    addSnakeSegment(snake, eatenGem) {
        const head = snake.segments[0];

        let newSegment;
        if (snake.segments.length === 1) {
            // 如果只有蛇头，根据当前移动方向添加新节点
            newSegment = {
                x: head.x - (snake.direction === 'right' ? 1 : snake.direction === 'left' ? -1 : 0),
                y: head.y - (snake.direction === 'down' ? 1 : snake.direction === 'up' ? -1 : 0)
            };
        } else {
            // 有第二个节点时，在蛇头和第二个节点之间添加新节点
            const secondSegment = snake.segments[1];
            newSegment = {
                x: secondSegment.x + (head.x - secondSegment.x) * 0.5,
                y: secondSegment.y + (head.y - secondSegment.y) * 0.5
            };
        }

        // 更新蛇头颜色为吃到的宝石颜色，其他颜色后移
        this.snakeColors.unshift(eatenGem.type);

        // 将新节点插入到蛇头后面（索引1的位置）
        snake.segments.splice(1, 0, newSegment);
        this.updateTopBarStats();
    }

    createVictoryParticles() {
        const particles = [];
        const imageTypes = ["head", "body", "tail", "red", "blue", "yellow", "body_red", "body_blue", "body_yellow"];
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 5,
                vy: (Math.random() - 0.5) * 5,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 4,
                imageType: imageTypes[Math.floor(Math.random() * imageTypes.length)],
                scale: Math.random() + 0.5
            });
        }
        return particles;
    }

    createGameOverParticles() {
        const particles = [];
        const imageTypes = ["head", "body", "tail", "red", "blue", "yellow", "body_red", "body_blue", "body_yellow"];
        for (let i = 0; i < 30; i++) {
            particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 2,
                imageType: imageTypes[Math.floor(Math.random() * imageTypes.length)],
                scale: Math.random() + 0.5,
                opacity: 1
            });
        }
        return particles;
    }

    updateTopBarStats() {
        // 确保snakeColors数组长度与蛇身节点数量一致
        while (this.snakeColors.length > this.snake.segments.length) {
            this.snakeColors.pop();
        }

        // 统计各颜色节点数量（跳过蛇头）
        const redCount = this.snakeColors.slice(1).filter(color => color === 'red').length;
        const blueCount = this.snakeColors.slice(1).filter(color => color === 'blue').length;
        const yellowCount = this.snakeColors.slice(1).filter(color => color === 'yellow').length;

        // 更新顶部栏的数据
        document.getElementById('totalScore').textContent = this.score;
        document.getElementById('redCount').textContent = redCount;
        document.getElementById('blueCount').textContent = blueCount;
        document.getElementById('yellowCount').textContent = yellowCount;
    }
}

export default GameState;