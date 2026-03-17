const i18n = {
    zh: {
        title: '消消蛇',
        score: '分数',
        targetScore: '目标分数',
        gameOver: '游戏结束',
        victory: '胜利！',
        restart: '重试',
        playAgain: '再来一局',
        instructions: {
            title: '游戏说明',
            line1: '1. 控制蛇移动收集宝石，每收集一颗宝石会增加一节蛇身。',
            line2: '2. 三个相同颜色的蛇身相连时会自动消除，获得额外分数。',
            line3: '3. 消除完所有蛇身即可获胜，撞到墙壁或自身则游戏结束。',
            controls: '控制方式：',
            arrows: '方向键',
            or: '或',
            touch: '触摸/鼠标',
            movement: '控制移动方向'
        },
        stats: {
            red: '红色',
            blue: '蓝色',
            yellow: '黄色'
        },
        language: '语言'
    },
    en: {
        title: 'Combo Snake',
        score: 'Score',
        targetScore: 'Target Score',
        gameOver: 'Game Over',
        victory: 'Victory!',
        restart: 'Retry',
        playAgain: 'Play Again',
        instructions: {
            title: 'Instructions',
            line1: '1. Control the snake to collect gems. Each gem adds a new segment.',
            line2: '2. Three connected segments of the same color will be eliminated for bonus points.',
            line3: '3. Reach the target score to win. Game over if you hit walls or yourself.',
            controls: 'Controls:',
            arrows: 'Arrow Keys',
            or: 'or',
            touch: 'Touch/Mouse',
            movement: 'to control direction'
        },
        stats: {
            red: 'Red',
            blue: 'Blue',
            yellow: 'Yellow'
        },
        language: 'Language'
    }
};

class I18nManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('gameLanguage') || 'zh';
    }

    setLanguage(lang) {
        if (i18n[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('gameLanguage', lang);
            this.updateUI();
        }
    }

    get(key) {
        const keys = key.split('.');
        let value = i18n[this.currentLanguage];
        for (const k of keys) {
            value = value[k];
            if (value === undefined) return key;
        }
        return value;
    }

    updateUI() {
        // 更新所有带有 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.get(key);
        });

        // 触发自定义事件通知语言变更
        const event = new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        });
        document.dispatchEvent(event);
    }
}

export const i18nManager = new I18nManager();
export default i18n;