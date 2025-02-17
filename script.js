let tg = window.Telegram.WebApp;
tg.expand();

const questions = [
    {
        question: 'Что вам больше нравится делать в свободное время?',
        answers: [
            { text: 'Решать логические задачи', score: { programmer: 2, designer: 0, manager: 1 } },
            { text: 'Рисовать или создавать что-то креативное', score: { programmer: 0, designer: 2, manager: 1 } },
            { text: 'Общаться с людьми', score: { programmer: 0, designer: 1, manager: 2 } },
            { text: 'Читать техническую литературу', score: { programmer: 2, designer: 1, manager: 1 } }
        ]
    },
    {
        question: 'Как вы предпочитаете решать проблемы?',
        answers: [
            { text: 'Систематически анализировать', score: { programmer: 2, designer: 1, manager: 1 } },
            { text: 'Искать креативные решения', score: { programmer: 1, designer: 2, manager: 1 } },
            { text: 'Обсуждать с командой', score: { programmer: 0, designer: 1, manager: 2 } },
            { text: 'Опираться на опыт', score: { programmer: 1, designer: 1, manager: 2 } }
        ]
    },
    {
        question: 'Какой проект вам было бы интереснее реализовать?',
        answers: [
            { text: 'Разработка нового приложения', score: { programmer: 2, designer: 1, manager: 1 } },
            { text: 'Создание фирменного стиля', score: { programmer: 0, designer: 2, manager: 1 } },
            { text: 'Организация команды', score: { programmer: 1, designer: 0, manager: 2 } },
            { text: 'Оптимизация процессов', score: { programmer: 1, designer: 1, manager: 2 } }
        ]
    },
    {
        question: 'Что вас больше всего мотивирует в работе?',
        answers: [
            { text: 'Создание чего-то нового', score: { programmer: 2, designer: 2, manager: 1 } },
            { text: 'Решение сложных задач', score: { programmer: 2, designer: 1, manager: 1 } },
            { text: 'Работа с людьми', score: { programmer: 0, designer: 1, manager: 2 } },
            { text: 'Достижение целей', score: { programmer: 1, designer: 1, manager: 2 } }
        ]
    },
    {
        question: 'Какие навыки вы хотели бы развивать?',
        answers: [
            { text: 'Технические и аналитические', score: { programmer: 2, designer: 1, manager: 1 } },
            { text: 'Креативные и визуальные', score: { programmer: 0, designer: 2, manager: 1 } },
            { text: 'Коммуникативные и лидерские', score: { programmer: 0, designer: 1, manager: 2 } },
            { text: 'Стратегическое мышление', score: { programmer: 1, designer: 1, manager: 2 } }
        ]
    },
    {
        question: 'Что вас больше всего интересует в современных технологиях?',
        answers: [
            { text: 'Искусственный интеллект и машинное обучение', score: { ai_specialist: 2, data_scientist: 2, developer: 1 } },
            { text: 'Дизайн и пользовательский опыт', score: { ux_designer: 2, game_designer: 2, digital_artist: 2 } },
            { text: 'Анализ данных и статистика', score: { data_scientist: 2, analyst: 2, researcher: 1 } },
            { text: 'Кибербезопасность и защита данных', score: { security_expert: 2, developer: 1, system_architect: 1 } }
        ]
    },
    {
        question: 'Какая область науки вас больше всего привлекает?',
        answers: [
            { text: 'Биология и генетика', score: { geneticist: 2, bioengineer: 2, biotech: 1, synthetic_bio: 2 } },
            { text: 'Компьютерные науки и ИИ', score: { ai_developer: 2, ml_specialist: 2, neural_specialist: 2 } },
            { text: 'Квантовая физика', score: { quantum_specialist: 2, quantum_security: 2 } },
            { text: 'Экология и энергетика', score: { eco_engineer: 2, renewable_engineer: 2, ecosystem_engineer: 2 } }
        ]
    },
    {
        question: 'Какой тип задач вам наиболее интересен?',
        answers: [
            { text: 'Анализ данных и поиск закономерностей', score: { data_scientist: 2, big_data_analyst: 2, crypto_analyst: 1 } },
            { text: 'Разработка и внедрение систем', score: { devops: 2, cloud_architect: 2, fullstack: 2 } },
            { text: 'Проектирование интерфейсов', score: { ux_designer: 2, game_designer: 1, vr_developer: 2 } },
            { text: 'Обеспечение безопасности', score: { security_analyst: 2, iot_security: 2, quantum_security: 1 } }
        ]
    },
    {
        question: 'Что вас больше всего интересует в медицине и здравоохранении?',
        answers: [
            { text: 'Цифровые технологии в медицине', score: { telemedicine: 2, digital_health: 2, health_tech: 2 } },
            { text: 'Нейронауки и психология', score: { neuropsychologist: 2, ai_ethics: 1, emotion_designer: 2 } },
            { text: 'Генетические исследования', score: { genetic_engineer: 2, bioinformatics: 2, synthetic_bio: 2 } },
            { text: 'Телемедицина и удаленная диагностика', score: { telemedicine: 2, digital_health: 2 } }
        ]
    },
    {
        question: 'Какой аспект городского развития вас интересует?',
        answers: [
            { text: 'Умные города и их инфраструктура', score: { smart_city: 2, iot_engineer: 2, cyber_physical: 2 } },
            { text: 'Экологичные технологии', score: { eco_engineer: 2, renewable_engineer: 2, ecosystem_engineer: 2 } },
            { text: '3D-моделирование и визуализация', score: { '3d_modeler': 2, bim_manager: 2, vr_developer: 1 } },
            { text: 'Автоматизация городских систем', score: { automation_engineer: 2, iot_engineer: 2 } }
        ]
    },
    {
        question: 'Какой подход к управлению проектами вам ближе?',
        answers: [
            { text: 'Гибкие методологии и коучинг', score: { agile_coach: 2, product_manager: 1, digital_transformation: 1 } },
            { text: 'Продуктовый подход', score: { product_manager: 2, growth_hacker: 2, digital_marketer: 1 } },
            { text: 'Технический менеджмент', score: { devops: 1, cloud_architect: 1, bim_manager: 2 } },
            { text: 'Инновационное развитие', score: { digital_transformation: 2, growth_hacker: 2 } }
        ]
    },
    {
        question: 'Что вас привлекает в финансовых технологиях?',
        answers: [
            { text: 'Блокчейн и криптовалюты', score: { blockchain: 2, fintech: 2, crypto_analyst: 2 } },
            { text: 'Финансовые экосистемы', score: { financial_architect: 2, fintech: 2 } },
            { text: 'Безопасность транзакций', score: { security_analyst: 2, blockchain: 1, quantum_security: 1 } },
            { text: 'Анализ финансовых данных', score: { data_scientist: 2, fintech: 1, big_data_analyst: 2 } }
        ]
    },
    {
        question: 'Какая сфера виртуальной реальности вас интересует?',
        answers: [
            { text: 'Разработка VR/AR приложений', score: { vr_developer: 2, game_designer: 1, virtual_designer: 2 } },
            { text: 'Создание виртуальных миров', score: { virtual_designer: 2, '3d_modeler': 2, game_designer: 2 } },
            { text: 'Образовательные VR проекты', score: { digital_learning: 2, vr_developer: 1, education_tech: 2 } },
            { text: 'Проектирование интерфейсов VR', score: { ux_designer: 2, vr_developer: 2 } }
        ]
    },
    {
        question: 'Какие технологические тренды вас больше всего вдохновляют?',
        answers: [
            { text: 'Квантовые вычисления и криптография', score: { quantum_specialist: 2, quantum_security: 2, crypto_analyst: 1 } },
            { text: 'Биотехнологии и генная инженерия', score: { bioengineer: 2, genetic_engineer: 2, synthetic_bio: 2 } },
            { text: 'Метавселенные и виртуальные миры', score: { virtual_designer: 2, vr_developer: 2, game_designer: 1 } },
            { text: 'Этика и безопасность технологий', score: { ai_ethics: 2, digital_ethics: 2, security_analyst: 1 } }
        ]
    },
    {
        question: 'Какой аспект здравоохранения вас интересует больше всего?',
        answers: [
            { text: 'Цифровая медицина и телемедицина', score: { digital_health: 2, telemedicine: 2, health_tech: 2 } },
            { text: 'Биоинформатика и анализ данных', score: { bioinformatics: 2, data_scientist: 1, biotech: 1 } },
            { text: 'Нейротехнологии и психология', score: { neuropsychologist: 2, emotion_designer: 2, ai_ethics: 1 } },
            { text: 'Генетические исследования', score: { geneticist: 2, genetic_engineer: 2, synthetic_bio: 1 } }
        ]
    },
    {
        question: 'Какой подход к экологии вам ближе?',
        answers: [
            { text: 'Разработка "зеленых" технологий', score: { eco_engineer: 2, renewable_engineer: 2, ecosystem_engineer: 2 } },
            { text: 'Умные города и устойчивое развитие', score: { smart_city: 2, iot_engineer: 1, cyber_physical: 2 } },
            { text: 'Биоинженерия и экосистемы', score: { bioengineer: 2, ecosystem_engineer: 2, synthetic_bio: 1 } },
            { text: 'Энергоэффективность и автоматизация', score: { automation_engineer: 2, renewable_engineer: 2, iot_engineer: 1 } }
        ]
    },
    {
        question: 'Что вас привлекает в образовании будущего?',
        answers: [
            { text: 'Цифровые платформы обучения', score: { digital_learning: 2, digital_transformation: 1, ux_designer: 1 } },
            { text: 'VR/AR в образовании', score: { vr_developer: 2, digital_learning: 1, game_designer: 1 } },
            { text: 'Персонализированное обучение с ИИ', score: { ai_developer: 2, ml_specialist: 2, digital_learning: 2 } },
            { text: 'Геймификация образования', score: { game_designer: 2, digital_learning: 1, emotion_designer: 1 } }
        ]
    },
    {
        question: 'Какой аспект цифровой трансформации вас интересует?',
        answers: [
            { text: 'Автоматизация бизнес-процессов', score: { automation_engineer: 2, digital_transformation: 2, devops: 1 } },
            { text: 'Цифровые экосистемы', score: { system_architect: 2, digital_transformation: 2, cloud_architect: 2 } },
            { text: 'Инновации в пользовательском опыте', score: { ux_designer: 2, digital_transformation: 1, emotion_designer: 2 } },
            { text: 'Безопасность цифровых систем', score: { security_analyst: 2, iot_security: 2, quantum_security: 1 } }
        ]
    },
    {
        question: 'Какой аспект искусственного интеллекта вас больше интересует?',
        answers: [
            { text: 'Этические вопросы и регулирование ИИ', score: { ai_ethics: 2, digital_ethics: 2, digital_transformation: 1 } },
            { text: 'Нейронные сети и глубокое обучение', score: { neural_specialist: 2, ml_specialist: 2, ai_developer: 2 } },
            { text: 'Компьютерное зрение и распознавание', score: { ai_developer: 2, ml_specialist: 2, computer_vision: 2 } },
            { text: 'Обработка естественного языка', score: { ai_developer: 2, ml_specialist: 2, nlp_specialist: 2 } }
        ]
    },
    {
        question: 'Что вас привлекает в биотехнологиях?',
        answers: [
            { text: 'Генная инженерия и редактирование', score: { genetic_engineer: 2, bioengineer: 2, synthetic_bio: 2 } },
            { text: 'Биоинформатика и анализ данных', score: { bioinformatics: 2, data_scientist: 1, biotech: 2 } },
            { text: 'Разработка новых лекарств', score: { biotech: 2, health_tech: 2, bioengineer: 1 } },
            { text: 'Синтетическая биология', score: { synthetic_bio: 2, bioengineer: 2, genetic_engineer: 1 } }
        ]
    },
    {
        question: 'Какой аспект кибербезопасности вас интересует больше всего?',
        answers: [
            { text: 'Квантовая криптография', score: { quantum_security: 2, quantum_specialist: 1, security_analyst: 1 } },
            { text: 'Безопасность IoT устройств', score: { iot_security: 2, security_analyst: 2, iot_engineer: 1 } },
            { text: 'Блокчейн и криптовалюты', score: { blockchain: 2, crypto_analyst: 2, security_analyst: 1 } },
            { text: 'Этичный хакинг', score: { security_analyst: 2, security_expert: 2, digital_ethics: 1 } }
        ]
    },
    {
        question: 'Что вас интересует в цифровой медицине?',
        answers: [
            { text: 'Телемедицина и удаленная диагностика', score: { telemedicine: 2, digital_health: 2, health_tech: 2 } },
            { text: 'Анализ медицинских данных', score: { health_tech: 2, data_scientist: 2, bioinformatics: 1 } },
            { text: 'Разработка медицинских приложений', score: { health_tech: 2, developer: 1, ux_designer: 1 } },
            { text: 'ИИ в диагностике заболеваний', score: { ai_developer: 2, health_tech: 2, ml_specialist: 1 } }
        ]
    },
    {
        question: 'Какой аспект "умных городов" вас больше привлекает?',
        answers: [
            { text: 'Экологичная инфраструктура', score: { smart_city: 2, eco_engineer: 2, renewable_engineer: 2 } },
            { text: 'Автоматизация городских систем', score: { automation_engineer: 2, iot_engineer: 2, smart_city: 1 } },
            { text: 'Умные транспортные системы', score: { smart_city: 2, iot_engineer: 2, cyber_physical: 2 } },
            { text: '3D-моделирование городской среды', score: { '3d_modeler': 2, bim_manager: 2, smart_city: 1 } }
        ]
    }
];

// Выберем фиксированное количество вопросов (например, 10)
const QUESTIONS_COUNT = 10;

// Выберем конкретные вопросы в нужном порядке
const selectedQuestions = [
    // Базовые вопросы для определения общего направления
    questions[0],  // "Что вам больше нравится делать в свободное время?"
    questions[1],  // "Как вы предпочитаете решать проблемы?"
    questions[4],  // "Какие навыки вы хотели бы развивать?"
    
    // Технологические предпочтения
    questions[5],  // "Что вас больше всего интересует в современных технологиях?"
    questions[6],  // "Какая область науки вас больше всего привлекает?"
    
    // Специализированные вопросы
    questions[7],  // "Какой тип задач вам наиболее интересен?"
    questions[11], // "Какой подход к управлению проектами вам ближе?"
    questions[13], // "Какая сфера виртуальной реальности вас интересует?"
    
    // Этические и социальные аспекты
    questions[14], // "Какие технологические тренды вас больше всего вдохновляют?"
    questions[17]  // "Какой аспект цифровой трансформации вас интересует?"
];

let currentQuestionIndex = 0;
let userAnswers = [];
let scores = {
    programmer: 0,
    designer: 0,
    manager: 0,
    ai_specialist: 0,
    data_scientist: 0,
    ux_designer: 0,
    security_expert: 0,
    game_designer: 0,
    developer: 0,
    digital_artist: 0,
    analyst: 0,
    system_architect: 0,
    researcher: 0,
    ai_developer: 0,
    blockchain: 0,
    security_analyst: 0,
    fullstack: 0,
    cloud_architect: 0,
    product_manager: 0,
    digital_marketer: 0,
    bioengineer: 0,
    vr_developer: 0,
    robotics: 0,
    big_data_analyst: 0,
    ml_specialist: 0,
    agile_coach: 0,
    fintech: 0,
    geneticist: 0,
    iot_engineer: 0,
    neuropsychologist: 0,
    eco_engineer: 0,
    quantum_specialist: 0,
    '3d_modeler': 0,
    smart_city: 0,
    renewable_engineer: 0,
    telemedicine: 0,
    crypto_analyst: 0,
    growth_hacker: 0,
    cyber_physical: 0,
    bim_manager: 0,
    neural_specialist: 0,
    automation_engineer: 0,
    bioinformatics: 0,
    digital_transformation: 0,
    virtual_designer: 0,
    ai_ethics: 0,
    quantum_security: 0,
    biotech: 0,
    digital_health: 0,
    iot_security: 0,
    genetic_engineer: 0,
    digital_learning: 0,
    emotion_designer: 0,
    ecosystem_engineer: 0,
    health_tech: 0,
    financial_architect: 0,
    digital_ethics: 0,
    synthetic_bio: 0
};

let selectedAnswers = new Array(QUESTIONS_COUNT).fill(null); // Изменяем размер массива

const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultElement = document.getElementById('result');
const professionResult = document.getElementById('profession-result');
const shareButton = document.getElementById('share-btn');

startButton.addEventListener('click', startQuiz);
shareButton.addEventListener('click', shareResult);

function startQuiz() {
    startButton.classList.add('hide');
    selectedAnswers = new Array(QUESTIONS_COUNT).fill(null); // Изменяем размер массива
    scores = { programmer: 0, designer: 0, manager: 0, ai_specialist: 0, data_scientist: 0, ux_designer: 0, security_expert: 0, game_designer: 0, developer: 0, digital_artist: 0, analyst: 0, system_architect: 0, researcher: 0, ai_developer: 0, blockchain: 0, security_analyst: 0, fullstack: 0, cloud_architect: 0, product_manager: 0, digital_marketer: 0, bioengineer: 0, vr_developer: 0, robotics: 0, big_data_analyst: 0, ml_specialist: 0, agile_coach: 0, fintech: 0, geneticist: 0, iot_engineer: 0, neuropsychologist: 0, eco_engineer: 0, quantum_specialist: 0, '3d_modeler': 0, smart_city: 0, renewable_engineer: 0, telemedicine: 0, crypto_analyst: 0, growth_hacker: 0, cyber_physical: 0, bim_manager: 0, neural_specialist: 0, automation_engineer: 0, bioinformatics: 0, digital_transformation: 0, virtual_designer: 0, ai_ethics: 0, quantum_security: 0, biotech: 0, digital_health: 0, iot_security: 0, genetic_engineer: 0, digital_learning: 0, emotion_designer: 0, ecosystem_engineer: 0, health_tech: 0, financial_architect: 0, digital_ethics: 0, synthetic_bio: 0 };
    questionContainer.classList.remove('hide');
    currentQuestionIndex = 0;
    setNextQuestion();
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / QUESTIONS_COUNT) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = 
        `Вопрос ${currentQuestionIndex + 1} из ${QUESTIONS_COUNT}`;
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex > 0) {
        document.getElementById('back-btn').classList.remove('hide');
    }
    showQuestion(selectedQuestions[currentQuestionIndex]); // Используем selectedQuestions вместо questions
}

let selectedButton = null;

function showQuestion(question) {
    questionElement.innerText = question.question;
    updateProgressBar();
    questionElement.style.opacity = '0';
    questionElement.style.transform = 'translateY(-20px)';
    
    // Анимация появления вопроса
    setTimeout(() => {
        questionElement.style.transition = 'all 0.5s ease';
        questionElement.style.opacity = '1';
        questionElement.style.transform = 'translateY(0)';
    }, 50);

    // Добавляем ответы с задержкой
    question.answers.forEach((answer, index) => {
        setTimeout(() => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn', 'answer-btn');
            button.style.opacity = '0';
            button.style.transform = 'translateX(-20px)';
            button.addEventListener('click', () => selectOption(button, answer));
            answerButtonsElement.appendChild(button);

            // Анимация появления кнопки
            setTimeout(() => {
                button.style.transition = 'all 0.5s ease';
                button.style.opacity = '1';
                button.style.transform = 'translateX(0)';
            }, 50);
        }, index * 100); // Задержка для каждого следующего ответа
    });
}

function selectOption(button, answer) {
    if (selectedButton) {
        selectedButton.classList.remove('selected');
    }
    selectedButton = button;
    button.classList.add('selected');
    selectedAnswers[currentQuestionIndex] = { button: button, answer: answer };
    document.getElementById('confirm-btn').classList.remove('hide');
}

function resetState() {
    document.getElementById('confirm-btn').classList.add('hide');
    selectedButton = null;
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

document.getElementById('confirm-btn').addEventListener('click', () => {
    if (selectedButton) {
        const answer = selectedQuestions[currentQuestionIndex].answers[
            Array.from(answerButtonsElement.children).indexOf(selectedButton)
        ];
        confirmAnswer(answer);
    }
});

function confirmAnswer(answer) {
    Object.keys(answer.score).forEach(profession => {
        scores[profession] += answer.score[profession];
    });

    selectedButton.classList.add('confirmed');
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button !== selectedButton) {
            button.classList.add('fade-out');
        }
    });
    document.getElementById('confirm-btn').classList.add('hide');

    selectedAnswers[currentQuestionIndex].confirmed = true;

    if (currentQuestionIndex < QUESTIONS_COUNT - 1) {
        setTimeout(() => {
            currentQuestionIndex++;
            setNextQuestion();
        }, 800);
    } else {
        setTimeout(showResult, 1000);
    }
}

function showResult() {
    questionContainer.classList.add('hide');
    resultElement.classList.remove('hide');
    
    const maxScore = Math.max(...Object.values(scores));
    const profession = Object.keys(scores).find(key => scores[key] === maxScore);
    
    const results = {
        ai_specialist: 'Вам подходит профессия AI-специалиста! Вы можете создавать будущее с помощью искусственного интеллекта.',
        data_scientist: 'Data Scientist - ваше призвание! Вы умеете находить ценные инсайты в данных.',
        ux_designer: 'UX/UI дизайнер - ваш путь! Вы понимаете пользователей и создаете удобные интерфейсы.',
        security_expert: 'Специалист по кибербезопасности - ваша профессия! Вы защищаете цифровой мир.',
        game_designer: 'Игровой дизайнер - ваше призвание! Вы создаете увлекательные виртуальные миры.',
        developer: 'Full-stack разработчик - ваш путь! Вы создаете сложные технологические решения.',
        digital_artist: 'Цифровой художник - ваша профессия! Вы создаете визуальное будущее.',
        analyst: 'Бизнес-аналитик - ваше призвание! Вы помогаете принимать правильные решения.',
        system_architect: 'Системный архитектор - ваш путь! Вы проектируете сложные системы.',
        researcher: 'Исследователь технологий - ваша профессия! Вы изучаете и создаете новое.',
        ai_developer: 'AI-разработчик - ваше призвание! Вы создаете интеллектуальные системы будущего.',
        blockchain: 'Blockchain-специалист - ваш путь! Вы работаете с технологиями распределенного реестра.',
        security_analyst: 'Специалист по кибербезопасности - ваша профессия! Вы защищаете цифровой мир.',
        devops: 'DevOps-инженер - ваш путь! Вы объединяете разработку и операционные процессы.',
        cloud_architect: 'Cloud Architect - ваш путь! Вы проектируете и управляете облачными системами.',
        product_manager: 'Product Manager - ваше призвание! Вы управляете продуктом и командой разработки.',
        digital_marketer: 'Digital Marketer - ваше призвание! Вы управляете маркетингом в цифровой среде.',
        bioengineer: 'Bioengineer - ваше призвание! Вы создаете биотехнологические решения.',
        vr_developer: 'VR Developer - ваше призвание! Вы создаете виртуальные и дополненные реальности.',
        robotics: 'Robotics Engineer - ваше призвание! Вы создаете роботов и автоматизируете процессы.',
        big_data_analyst: 'Big Data Analyst - ваше призвание! Вы анализируете большие объемы данных.',
        ml_specialist: 'Machine Learning Specialist - ваше призвание! Вы создаете модели машинного обучения.',
        agile_coach: 'Agile Coach - ваше призвание! Вы помогаете командам эффективно работать в Agile.',
        fintech: 'Fintech Specialist - ваше призвание! Вы работаете с финансовыми технологиями.',
        geneticist: 'Geneticist - ваше призвание! Вы изучаете генетику и ее применение.',
        iot_engineer: 'IoT Engineer - ваше призвание! Вы создаете и интегрируете Интернет вещей.',
        neuropsychologist: 'Neuropsychologist - ваше призвание! Вы изучаете нервно-психологические процессы.',
        eco_engineer: 'Eco Engineer - ваше призвание! Вы создаете экологические решения.',
        quantum_specialist: 'Quantum Specialist - ваше призвание! Вы работаете с квантовыми технологиями.',
        '3d_modeler': '3D Modeler - ваше призвание! Вы создаете трехмерные модели.',
        smart_city: 'Smart City Specialist - ваше призвание! Вы создаете умные города.',
        renewable_engineer: 'Renewable Engineer - ваше призвание! Вы создаете экологические решения.',
        telemedicine: 'Telemedicine Specialist - ваше призвание! Вы создаете телемедицинские решения.',
        crypto_analyst: 'Crypto Analyst - ваше призвание! Вы анализируете криптовалюты.',
        growth_hacker: 'Growth Hacker - ваше призвание! Вы создаете рост и развитие.',
        cyber_physical: 'Cyber-Physical Systems Specialist - ваше призвание! Вы создаете и интегрируете цифровые и физические системы.',
        bim_manager: 'BIM Manager - ваше призвание! Вы управляете моделями строительства.',
        neural_specialist: 'Neural Specialist - ваше призвание! Вы создаете искусственные нейронные сети.',
        automation_engineer: 'Automation Engineer - ваше призвание! Вы создаете и интегрируете автоматизированные системы.',
        bioinformatics: 'Bioinformatics Specialist - ваше призвание! Вы создаете и анализируете биоинформацию.',
        digital_transformation: 'Digital Transformation Specialist - ваше призвание! Вы создаете и внедряете цифровые решения.',
        virtual_designer: 'Virtual Designer - ваше призвание! Вы создаете виртуальные дизайнерские решения.',
        ai_ethics: 'AI Ethics Specialist - ваше призвание! Вы создаете и анализируете этические аспекты искусственного интеллекта.',
        quantum_security: 'Quantum Security Specialist - ваше призвание! Вы создаете и анализируете квантовые системы безопасности.',
        biotech: 'Bio Tech Specialist - ваше призвание! Вы создаете биотехнологические решения.',
        digital_health: 'Digital Health Specialist - ваше призвание! Вы создаете цифровые решения в медицине.',
        iot_security: 'IoT Security Specialist - ваше призвание! Вы создаете и анализируете системы безопасности Интернета вещей.',
        genetic_engineer: 'Genetic Engineer - ваше призвание! Вы создаете и анализируете генетические решения.',
        digital_learning: 'Digital Learning Specialist - ваше призвание! Вы создаете и внедряете цифровые решения в обучении.',
        emotion_designer: 'Emotion Designer - ваше призвание! Вы создаете и анализируете эмоциональные решения.',
        ecosystem_engineer: 'Ecosystem Engineer - ваше призвание! Вы создаете экологические решения.',
        health_tech: 'Health Tech Specialist - ваше призвание! Вы создаете и внедряете цифровые решения в медицине.',
        financial_architect: 'Financial Architect - ваше призвание! Вы создаете и анализируете финансовые решения.',
        digital_ethics: 'Digital Ethics Specialist - ваше призвание! Вы создаете и анализируете этические аспекты цифровой жизни.',
        synthetic_bio: 'Synthetic Bio Specialist - ваше призвание! Вы создаете синтетические биологические решения.'
    };
    
    professionResult.innerText = results[profession];
}

function shareResult() {
    tg.sendData(professionResult.innerText);
}

function goBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        resetState();
        
        // Восстанавливаем вопрос
        const question = selectedQuestions[currentQuestionIndex];
        questionElement.innerText = question.question;
        updateProgressBar();
        
        // Восстанавливаем все варианты ответов сразу
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn', 'answer-btn');
            answerButtonsElement.appendChild(button);
            button.addEventListener('click', () => selectOption(button, answer));
        });

        // Восстанавливаем предыдущий выбор
        const previousSelection = selectedAnswers[currentQuestionIndex];
        if (previousSelection) {
            const buttons = answerButtonsElement.children;
            for (let button of buttons) {
                if (button.textContent === previousSelection.answer.text) {
                    selectedButton = button;
                    button.classList.add('selected');
                    if (previousSelection.confirmed) {
                        button.classList.add('confirmed');
                        button.disabled = true;
                        Array.from(buttons).forEach(b => {
                            if (b !== button) {
                                b.classList.add('fade-out');
                                b.disabled = true;
                            }
                        });
                    } else {
                        document.getElementById('confirm-btn').classList.remove('hide');
                    }
                    break;
                }
            }
        }
    }
    
    if (currentQuestionIndex === 0) {
        document.getElementById('back-btn').classList.add('hide');
    }
}

// Добавляем обработчик для кнопки "Назад"
document.getElementById('back-btn').addEventListener('click', goBack);