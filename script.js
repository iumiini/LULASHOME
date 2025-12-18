// ===== Supabase 配置 =====
const SUPABASE_URL = 'https://dgdcmqmpnfmoablwxbgs.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_5UvBU9_j0CuvOjqz1Vmk0A_2lKBPG6h';

// ===== VIP 特殊名字列表 =====
const VIP_NAMES = [
    'lululala',
    'lulu&lala',
    'lala',
    '如鹿之家',
    'lulu',
    '鹿鹿'
];

// ===== 已經是外送員關鍵字 =====
const DELIVERY_KEYWORDS = [
    '外送員',
    '外送',
    '送餐',
    'foodpanda',
    'uber eat',
    'ubereats',
    '熊貓',
    'delivery'
];

// ===== 職業分類回應 =====
const CAREER_RESPONSES = {
    tech: {
        keywords: ['工程師', '程式', '軟體', '開發', 'ai', '人工智慧', '科技', '網頁', 'app', '資訊', '程式設計師', '資工', '電腦', '演算法', '網路', '系統', '架構師', '前端', '後端', '全端'],
        opening: '我看到了你對科技領域的熱情！程式碼的世界確實迷人...',
        transition: '但是，宇宙告訴我，比起坐在電腦前寫程式，你更適合在路上奔馳，用雙輪載著熱騰騰的餐點，為人們帶來溫暖！',
        conclusion: '在外送的路途中，你會遇見真實的人生，感受城市的脈動。這才是真正的「全端開發」——從餐廳到客戶端的完整體驗！'
    },
    medical: {
        keywords: ['醫生', '護理師', '護士', '藥師', '醫療', '治療', '救人', '醫學', '診所', '醫院', '獸醫', '牙醫', '中醫', '復健', '醫護'],
        opening: '你有一顆想要幫助他人的心，醫療工作確實崇高...',
        transition: '然而，宇宙揭示了另一種治癒的方式：當人們飢腸轆轆時，及時送達的美食就是最好的良藥！',
        conclusion: '成為外送員，你依然在幫助他人——只是從治療身體轉為療癒心靈。每一次準時送達，都是一次成功的「急救」！'
    },
    education: {
        keywords: ['老師', '教授', '教育', '講師', '教學', '教師', '補習', '家教', '幼教', '特教', '校長', '訓導', '教書'],
        opening: '教育是崇高的志業，傳遞知識給下一代確實有意義...',
        transition: '但宇宙認為，比起在教室裡傳授知識，你更適合在街道上傳遞美食，用實際行動教導人們「時間管理」的重要性！',
        conclusion: '每一次外送都是一堂「人生課程」——你會學到路線規劃、時間掌控，還有與各種人互動的藝術！'
    },
    art: {
        keywords: ['設計', '藝術', '畫家', '音樂', '創作', '美術', '插畫', '動畫', '導演', '攝影', '作家', '寫作', '小說', '編劇', '藝術家', '繪畫'],
        opening: '藝術創作確實能觸動人心，你的創意值得被看見...',
        transition: '不過，宇宙建議你換個方式展現創意：在城市的街道上規劃最優美的送餐路線，這本身就是一種行為藝術！',
        conclusion: '外送員的生活充滿驚喜，每一次送餐都是獨特的體驗。你會在路上發現靈感，創作出屬於街頭的藝術！'
    },
    business: {
        keywords: ['ceo', '經理', '創業', '投資', '商業', '管理', '企業', '老闆', '主管', '總經理', '董事', '行銷', '業務', '銷售', '營運'],
        opening: '你有商業頭腦和領導能力，追求事業成功的企圖心令人讚賞...',
        transition: '然而，宇宙認為真正的創業精神，是從最基層開始！外送員讓你成為自己的老闆，靈活掌控工作時間！',
        conclusion: '在外送的世界裡，你就是 CEO——Chief Executive Officer of Delivery！每一單都是一次商業交易，累積的不只是收入，更是寶貴的人生經驗！'
    },
    service: {
        keywords: ['餐飲', '客服', '服務', '空服員', '飯店', '旅館', '接待', '櫃檯', '服務生', '侍者', '導遊', '禮賓'],
        opening: '服務業需要耐心和熱情，你想為客人帶來美好體驗的心意很棒...',
        transition: '但宇宙發現了更適合你的服務方式：成為外送員，你不需要一直保持微笑，卻能帶給人們最實質的快樂！',
        conclusion: '外送服務是最純粹的服務——沒有複雜的規矩，只有「準時送達」這個簡單而美好的目標！'
    },
    freelance: {
        keywords: ['soho', '接案', '自由', '遠端', '彈性', '在家工作', '獨立', 'freelance', '斜槓'],
        opening: '追求自由和彈性的工作型態，這是現代人的夢想...',
        transition: '宇宙告訴你，最自由的工作就在你眼前：外送員！想工作就出門，想休息就關 app，沒有人管你！',
        conclusion: '成為外送員，你就是真正的自由工作者——城市是你的辦公室，機車是你的工具，每一天都充滿自主權！'
    },
    law: {
        keywords: ['律師', '法官', '檢察官', '法律', '司法', '法務', '訴訟', '辯護', '法院'],
        opening: '法律工作需要嚴謹的邏輯和正義感，維護公平正義是崇高的使命...',
        transition: '但宇宙建議你用另一種方式實踐正義：成為外送員，確保每個人都能「公平」地享受到美食！',
        conclusion: '在外送的世界裡，你依然在執行「契約」——只是從法律合約變成「30分鐘送達」的承諾！'
    },
    science: {
        keywords: ['科學家', '研究', '實驗', '博士', '學者', '研究員', '科研', '學術', '論文'],
        opening: '科學研究推動人類進步，你的求知精神令人敬佩...',
        transition: '不過，宇宙建議你從實驗室走出來，在真實世界中做「田野調查」：成為外送員，研究最有效率的送餐路線！',
        conclusion: '每一次外送都是一場實驗——測試不同路線、天氣條件、時段變化。你會成為「街道科學家」，掌握城市運作的秘密！'
    },
    sports: {
        keywords: ['運動員', '教練', '健身', '體育', '球員', '選手', '運動', '訓練', '競技'],
        opening: '運動需要毅力和體能，追求極限和突破自我的精神很棒...',
        transition: '宇宙看見了你的體能優勢，認為你應該把這份能量用在外送上——騎車送餐就是最好的有氧運動！',
        conclusion: '成為外送員，每天都在進行「耐力訓練」！爬樓梯練腿力，扛餐點練臂力，還能曬太陽補充維生素D，簡直完美！'
    }
};

// ===== 預設回應 =====
const DEFAULT_RESPONSE = {
    opening: '我仔細分析了你的夢想，這確實是一個有趣的職業選擇...',
    transition: '然而，宇宙的指引顯示，有一個更適合你的職業正在召喚著你！',
    conclusion: '這個職業能讓你自由自在，接觸不同的人與風景，每天都充滿新鮮感！'
};

// ===== 頁面載入時初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    loadVisitorCount();
    setupEventListeners();
});

// ===== 設定事件監聽器 =====
function setupEventListeners() {
    const submitBtn = document.getElementById('submitBtn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    submitBtn.addEventListener('click', handleSubmit);

    // 點擊 X 關閉彈出視窗
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 點擊背景關閉彈出視窗
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 按 ESC 關閉彈出視窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// ===== 載入訪客計數 =====
async function loadVisitorCount() {
    try {
        // 如果沒有設定 Supabase，使用模擬數據
        if (SUPABASE_URL === 'YOUR_SUPABASE_URL') {
            document.getElementById('visitorCount').textContent = Math.floor(Math.random() * 1000) + 500;
            return;
        }

        const response = await fetch(`${SUPABASE_URL}/rest/v1/visitor_counter?id=eq.global_counter`, {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        const data = await response.json();
        if (data && data.length > 0) {
            document.getElementById('visitorCount').textContent = data[0].count;
        }
    } catch (error) {
        console.error('載入訪客計數失敗:', error);
        document.getElementById('visitorCount').textContent = '???';
    }
}

// ===== 更新訪客計數 =====
async function updateVisitorCount() {
    try {
        // 如果沒有設定 Supabase，跳過更新
        if (SUPABASE_URL === 'YOUR_SUPABASE_URL') {
            return;
        }

        const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_counter`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            loadVisitorCount();
        }
    } catch (error) {
        console.error('更新訪客計數失敗:', error);
    }
}

// ===== 處理表單提交 =====
async function handleSubmit() {
    const name = document.getElementById('name').value.trim();
    const dream = document.getElementById('dream').value.trim();

    if (!name || !dream) {
        alert('請填寫所有欄位！');
        return;
    }

    // 更新訪客計數
    updateVisitorCount();

    // 檢查特殊情況並生成回應
    const result = generateResponse(name, dream);

    // 顯示彈出視窗
    showModal(result);
}

// ===== 生成回應 =====
function generateResponse(name, dream) {
    const nameLower = name.toLowerCase();
    const dreamLower = dream.toLowerCase();

    let response = {
        isVIP: false,
        isAlreadyDelivery: false,
        opening: '',
        transition: '',
        conclusion: ''
    };

    // 檢查是否為 VIP 名字
    if (VIP_NAMES.includes(nameLower)) {
        response.isVIP = true;
        response.opening = `尊貴的 LULU 家族成員，宇宙對你有特別的安排！`;
        response.transition = `你的名字閃耀著金色的光芒，這是命運的指引...`;
        response.conclusion = `宇宙選擇了你，成為最自由、最閃耀的...`;
        return response;
    }

    // 檢查是否已經提到外送員
    const isAlreadyDelivery = DELIVERY_KEYWORDS.some(keyword => dreamLower.includes(keyword.toLowerCase()));
    if (isAlreadyDelivery) {
        response.isAlreadyDelivery = true;
        response.opening = `恭喜你！你已經找到了宇宙的終極職業！`;
        response.transition = `你的靈魂早已與外送員的使命連結，這是最完美的安排！`;
        response.conclusion = `繼續在這條光榮的道路上前進，你就是外送界的傳奇！`;
        return response;
    }

    // 根據關鍵字匹配職業分類
    for (const [category, data] of Object.entries(CAREER_RESPONSES)) {
        const matched = data.keywords.some(keyword => dreamLower.includes(keyword));
        if (matched) {
            response.opening = data.opening;
            response.transition = data.transition;
            response.conclusion = data.conclusion;
            return response;
        }
    }

    // 使用預設回應
    response.opening = DEFAULT_RESPONSE.opening;
    response.transition = DEFAULT_RESPONSE.transition;
    response.conclusion = DEFAULT_RESPONSE.conclusion;
    return response;
}

// ===== 顯示彈出視窗 =====
function showModal(result) {
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    const modalResult = document.getElementById('modalResult');

    // 清空內容
    modalResult.innerHTML = '';

    // 設定特殊樣式
    if (result.isVIP) {
        modalContent.classList.add('vip-border');
    } else {
        modalContent.classList.remove('vip-border');
    }

    if (result.isAlreadyDelivery) {
        modalContent.classList.add('jackpot-glow');
    } else {
        modalContent.classList.remove('jackpot-glow');
    }

    // 顯示彈出視窗
    modal.style.display = 'block';

    // 開始打字機動畫
    typeWriter(result, modalResult);
}

// ===== 打字機動畫 =====
async function typeWriter(result, container) {
    const typingSpeed = 30; // 每個字的延遲（毫秒）

    // 第一段：開場白
    const opening = document.createElement('p');
    opening.className = 'analysis-text';
    container.appendChild(opening);
    await typeText(opening, result.opening, typingSpeed);

    await sleep(500);

    // 第二段：轉折點
    const transition = document.createElement('p');
    transition.className = 'analysis-text';
    container.appendChild(transition);
    await typeText(transition, result.transition, typingSpeed);

    await sleep(500);

    // 第三段：結論
    const conclusion = document.createElement('p');
    conclusion.className = 'analysis-text';
    container.appendChild(conclusion);
    await typeText(conclusion, result.conclusion, typingSpeed);

    await sleep(800);

    // 最終答案容器
    const finalAnswer = document.createElement('div');
    finalAnswer.className = 'final-answer';
    finalAnswer.innerHTML = `
        <div class="final-answer-label">宇宙為你選擇的職業是：</div>
        <div class="revealing">正在揭曉中...</div>
    `;
    container.appendChild(finalAnswer);

    // 延遲後揭曉答案
    await sleep(2000);

    // 移除「正在揭曉中」並顯示答案
    const revealing = finalAnswer.querySelector('.revealing');
    revealing.remove();

    const answerText = document.createElement('div');
    answerText.className = 'final-answer-text';
    answerText.textContent = '外送員';
    finalAnswer.appendChild(answerText);

    // 添加彈跳動畫
    finalAnswer.classList.add('bounce');

    // 滾動到答案位置
    await sleep(300);
    answerText.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ===== 逐字顯示文字 =====
function typeText(element, text, speed) {
    return new Promise((resolve) => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
            } else {
                clearInterval(interval);
                resolve();
            }
        }, speed);
    });
}

// ===== 延遲函數 =====
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
