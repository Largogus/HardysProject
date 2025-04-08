dlg = document.getElementById('choice_dlg');

btn = document.querySelectorAll('button');

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        type = this.id;

        let img1 = '';
        let img2 = '';
        let text1 = '';
        let text2 = '';

        if (type == 'gen-img') {
            img1 = 'icon/plus-img.png';
            img2 = 'icon/minus-img.png';
            text1 = `Расширение творческих возможностей – ИИ может генерировать идеи, вдохновляя художников на эксперименты или проявление фантазии

                    Ускорение творческого процесса – Художники могут использовать ИИ для генерации эскизов, фонов, экономя время на рутинных этапах работы

                    Взгляд с другой стороны – ИИ помогает взглянуть на работу сделанную человеком под другим углом, из разных стилей и разной палитры, пусть и с ошибками присущими ИИ

                    Сохранение и переосмысление культурного наследия – Генеративный ИИ помогает реставрировать поврежденные произведения, воссоздавать утраченные элементы и даже «оживлять» стили великих мастеров прошлого в новых работах.`;

            text2 = `Угроза авторскому праву и плагиат – ИИ обучается на миллионах работ реальных художников без их согласия, что приводит к нарушению прав оригинальных авторов.

                    Обесценивание человеческого труда – Массовое использование ИИ-арта снижает ценность ручного творчества, обесценивая труд художников и сокращая их доходы.

                    Однообразие и отсутствие глубины – Генеративный ИИ часто создает поверхностно-эстетичные, но шаблонные работы, лишенные смысла, эмоций и культурного контекста, присущих живому искусству.

                    Этические проблемы – ИИ воспроизводит стереотипы, предвзятость и даже вредоносный контент из своих обучающих данных`;
        } else if (type == 'gen-mus') {
            img1 = 'icon/plus-mus.png';
            img2 = 'icon/minus-mus.png';
            text1 = `Бесконечный источник вдохновения  
                        ИИ может генерировать уникальные мелодии, аранжировки, тексты и даже целые композиции в разных стилях, помогая музыкантам преодолевать творческий кризис и находить свежие идеи.

                        Доступность музыкального творчества  
                        С помощью ИИ даже люди без профессионального музыкального образования могут создавать качественные треки, что делает музыку более доступной для всех.

                        Экономия времени и ресурсов  
                        Автоматизация аранжировки, подбора аккордов и звуков ускоряет процесс создания музыки, позволяя артистам и продюсерам сосредоточиться на творчестве и креативе

                        Эксперименты с новыми жанрами и звучанием  
                        ИИ способен комбинировать неочевидные стили, создавать необычные звуковые текстуры и даже имитировать голоса известных исполнителей, расширяя границы музыкального искусства.`;
            text2 = `Угроза авторскому праву и плагиат – ИИ обучается на миллионах работ реальных художников без их согласия, что приводит к нарушению прав оригинальных авторов.

                        Обесценивание человеческого труда – Массовое использование ИИ-арта снижает ценность ручного творчества, обесценивая труд художников и сокращая их доходы.

                        Однообразие и отсутствие глубины – Генеративный ИИ часто создает поверхностно-эстетичные, но шаблонные работы, лишенные смысла, эмоций и культурного контекста, присущих живому искусству.

                        Этические проблемы – ИИ воспроизводит стереотипы, предвзятость и даже вредоносный контент из своих обучающих данных`;
        } else if (type == 'gen-kino') {
            img1 = 'icon/plus-art.png';
            img2 = 'icon/minus-art.png';
            text1 = `Расширение творческих возможностей  
                    Режиссеры и сценаристы могут использовать ИИ для генерации идей, альтернативных сюжетных линий или даже диалогов, значительно ускоряя процесс создания.

                    Персонализация контента и восстановление классики  
                    ИИ позволяет адаптировать контент под разные аудитории — например, автоматически создавать локализованные версии фильмов или даже менять отдельные элементы сцен под предпочтения зрителей. Кроме того, нейросети помогают реставрировать старые фильмы: улучшать качество изображения, дорисовывать утраченные фрагменты и даже "оживлять" исторические кадры с высокой детализацией (однако не стоит забывать об огрехах ИИ и авторском праве)

                    Автоматизация трудоемких процессов
                    ИИ ускоряет рутинные задачи аниматоров:
                    <br>- Раскрашивание и заливка – нейросети могут автоматически применять цвета к ключевым кадрам, экономя время аниматоров.  
                    <br>- Промежуточные кадры (твининг) – алгоритмы генерируют плавные переходы между основными позами, сокращая объем ручной работы.  
                    <br>- Фоновую анимацию – ИИ создает динамичные фоны (например, движущиеся облака или толпу), что особенно полезно в сериальной анимации.`;
            text2 = `- Сокращение рабочих мест – автоматизация сценариев, анимации, визуальных эффектов и даже актерской игры (с помощью дипфейков) может оставить без работы многих специалистов.
                    <br>- Девальвация авторского стиля – массовое использование шаблонных решений ИИ может привести к однообразию в кино, где оригинальность подменяется сгенерированным алгаритмами контентом   
                    <br>- Проблема плагиата – нейросети обучаются на существующих фильмах, что повышает риски непреднамеренного копирования идей или визуальных элементов.  

                    <br>- Снижение востребованности аниматоров – автоматизация заливки, твининга и раскадровки может сократить количество рабочих мест, особенно для начинающих художников.  
                    <br>- Однообразие стилей – ИИ часто воспроизводит усредненные, шаблонные решения, что приводит к потере авторского почерка и визуальной индивидуальности.  
                    <br>- Плагиат и этические споры – нейросети обучаются на чужих работах, и их использование может нарушать права оригинальных авторов (например, копирование дизайна персонажей без согласия).`;
        } else if (type == 'gen-art') {
            img1 = 'icon/plus-art.png';
            img2 = 'icon/minus-art.png';
            text1 = `1. Ускорение творческого процесса  
                    ГИИ может быстро генерировать множество вариантов дизайна — от логотипов и интерьеров до упаковки и веб-страниц. Это экономит время дизайнеров, позволяя сосредоточиться на доработке идей, а не на их рутинной проработке.  

                    <br>2. Расширение креативных возможностей  
                    С помощью ИИ можно экспериментировать с неожиданными стилями, комбинациями цветов и форм, которые человек мог бы упустить. Например, нейросети предлагают нестандартные визуальные решения, вдохновляя дизайнеров на инновации.  

                    <br>3. Доступность и персонализация  
                    Генеративный ИИ делает профессиональный дизайн доступнее для малого бизнеса и частных лиц. Сервисы на основе ИИ (например, для создания логотипов или интерьерных визуализаций) позволяют получать персонализированные решения быстро и с минимальными затратами.  `;
            text2 = `1. Отсутствие подлинной креативности и эмоциональной глубины  
                    ИИ создаёт дизайн на основе существующих данных, но не понимает контекста, культурных нюансов или человеческих эмоций. Его работы могут казаться шаблонными, лишёнными уникальной авторской идеи, что снижает ценность дизайна в глазах клиентов.  
                            
                    <br>2. Риск нарушения авторских прав и плагиата  
                    Нейросети обучаются на чужих работах, и иногда выдают результаты, слишком близкие к оригиналам. Это может привести к судебным искам и этическим конфликтам, особенно если ИИ скопирует элементы защищённых авторским правом произведений.  
                            
                    <br>3. Снижение ценности труда дизайнеров  
                    Автоматизация создания дизайна обесценивает работу профессионалов, особенно в массовых сегментах (например, шаблонные логотипы или баннеры). Заказчики могут выбирать дешёвые ИИ-решения, игнорируя экспертизу и опыт живых специалистов.  `;
        } else if (type == 'gen-window') {
            img1 = 'icon/plus-window.png';
            img2 = 'icon/minus-window.png';
            text1 = `1. Автоматизация и ускорение разработки  
                    Генеративный ИИ помогает автоматизировать рутинные задачи, такие как написание кода, создание тестов или генерация документации. Например, инструменты вроде GitHub Copilot предлагают разработчикам готовые фрагменты кода, экономя время и снижая количество ошибок.  

                    <br>2. Улучшение креативных процессов  
                    ИИ способен генерировать дизайн-макеты, логотипы, анимации и даже музыку, что особенно полезно в веб-разработке и геймдеве. Это позволяет быстрее прототипировать идеи и сокращать время вывода продукта на рынок.  

                    <br>3. Персонализация и улучшение пользовательского опыта  
                    С помощью генеративного ИИ можно создавать адаптивные интерфейсы, чат-ботов с естественной речью и даже динамический контент (например, рекомендательные системы). Это повышает вовлечённость пользователей и делает digital-продукты более удобными.  `;
            text2 = `1. Риск снижения качества кода и слепого доверия  
                    Генеративный ИИ часто выдает правдоподобный, но ошибочный или неоптимальный код. Новички могут слепо копировать его предложения без понимания, что приводит к накоплению технического долга, уязвимостей или неэффективных решений.  

                    <br>2. Девальвация профессиональных навыков и рынка труда  
                    Автоматизация рутинного программирования может снизить спрос на junior-разработчиков, тестировщиков или технических писателей. Компании, полагаясь на ИИ, могут сокращать команды, что ставит под угрозу позиции людей как "более дорогой альтернативы" алгоритмам.  

                    <br>3. Проблемы безопасности и юридические риски  
                    - Утечки данных: Инструменты вроде ChatGPT могут невольно сохранять введённый код, включая конфиденциальные части проекта.  
                    - Нарушение лицензий: ИИ часто генерирует код, похожий на защищённый авторским правом (например, из открытых репозиториев), что может привести к судебным искам.  
                    - Уязвимости: Алгоритмы иногда предлагают код с известными дырами в безопасности (например, SQL-инъекции), которые разработчики не всегда замечают.  `;
        } else if (type == 'gen-sotset') {
            img1 = 'icon/plus-sotset.png';
            img2 = 'icon/minus-sotet.png';
            text1 = `1. Персонализация контента  
                    Генеративный ИИ анализирует интересы и поведение пользователей, создавая персонализированные рекомендации — от постов и новостей до рекламы. Это улучшает пользовательский опыт и удерживает аудиторию. 

                    <br>2. Улучшение модерации  
                    С помощью ИИ соцсети быстрее выявляют токсичные комментарии, фейки и запрещённый контент, делая платформы безопаснее. Алгоритмы распознают не только текст, но и изображения, видео и даже контекст сообщений.  

                    <br>3. Доступность и инклюзивность  
                    Генеративный ИИ помогает адаптировать контент для людей с ограниченными возможностями: автоматически генерирует субтитры, озвучивает тексты или создаёт описания изображений для слабовидящих.  

                    <br>4. Креативные инструменты для пользователей  
                    Фильтры, стикеры, AR-маски и даже генерация музыки — многие популярные функции соцсетей работают на основе ИИ. Это раскрывает творческий потенциал пользователей и делает платформы более engaging.  
                    <br>4. Креативные инструменты для пользователей  
                    Фильтры, стикеры, AR-маски и даже генерация музыки — многие популярные функции соцсетей работают на основе ИИ. Это раскрывает творческий потенциал пользователей и делает платформы более engaging.  `;
            text2 = `1. Распространение дезинформации и фейков  
                    Генеративный ИИ может создавать убедительные deepfake-видео, поддельные новости и фотореалистичные изображения, что усложняет борьбу с misinformation. Это подрывает доверие к контенту в соцсетях и усиливает поляризацию общества.  

                    <br>2. Нарушение авторских прав и плагиат  
                    ИИ часто обучается на чужих данных без согласия авторов, а затем генерирует контент, похожий на работы художников, писателей или музыкантов. Это приводит к судебным искам и обесценивает оригинальное творчество.  

                    <br>3. Потеря аутентичности и «оцифровка» общения  
                    Чат-боты, автоматические комментарии и AI-генерация постов делают взаимодействие в соцсетях менее человечным. Пользователи могут даже не понимать, общаются ли они с реальным человеком или с алгоритмом.  

                    <br>4. Риски для конфиденциальности  
                    Для обучения ИИ часто используются данные пользователей (фото, тексты, поведенческие паттерны), что raises вопросы о приватности. Кроме того, нейросети могут случайно генерировать контент, раскрывающий личную информацию (например, на основе утечек данных).  
                    `;
        }

        Check(img1, img2, text1, text2);
        disableScroll();
        dlg.showModal();
    })
}

function Check(img1, img2, text1, text2) {
    dlg.innerHTML = `
        <div class='gen'>
            <div class='gen-cont'>
                <img src='${img1}' class='img-size';>
                <span>${text1}</span>
                <img src='${img2}' class='img-size';>
                <span>${text2}</span>
                <button class='close-size'>
                    <img src='icon/close.png' class='img-size';>
                </button>
            </div>
        </div>
    `

    const closeBtn = dlg.querySelector('.close-size');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            dlg.close();
            enableScroll();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && dlg.open) {
                dlg.close();
                enableScroll();
            }
        });
    }
}

let savedScrollY = 0;

function disableScroll() {
    savedScrollY = window.scrollY || document.documentElement.scrollTop;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
}

function enableScroll() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    window.scrollTo(0, savedScrollY);
}
