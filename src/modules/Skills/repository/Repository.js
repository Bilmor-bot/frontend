class Repository{
    constructor() {
        this._developingItems = [
            {
                header: "Общение с животными (1-6 курсы)",
                body: "Умение понимать язык определенных категорий животных" +
                    "<br><br><b>1 уровень</b>" +
                    "<br>- Коммуникация с насекомыми и паукообразными " +
                    "<br><b>2 уровень</b>" +
                    "<br>- Коммуникация с моллюсками, ракообразными и рыбами" +
                    "<br><b>3 уровень</b>" +
                    "<br>- Коммуникация с земноводными" +
                    "<br><b>4 уровень</b>" +
                    "<br>- Коммуникация с рептилиями" +
                    "<br><b>5 уровень</b>" +
                    "<br>- Коммуникация с птицами" +
                    "<br><b>6 уровень</b>" +
                    "<br>– Коммуникация с млекопитающими"
            },
            {
                header: "Фитокинез (1-6 курсы)",
                body: "Создание известных магу растений и управление ими" +
                    "<br><br><b>1 уровень</b>" +
                    "<br>- Выращивание растений небольших размеров (не более 20 см)" +
                    "<br>- Улучшение состояния увядающих растений " +
                    "<br><b>2 уровень</b>" +
                    "<br>- Все способности 1 уровня" +
                    "<br>- Изменение цвета растений" +
                    "<br>- Ускорение роста уже посаженных растений" +
                    "<br><b>3 уровень</b>" +
                    "<br>- Все способности 2 уровня" +
                    "<br>- Выращивание растений средних размеров (не более 1 м)" +
                    "<br>- Упрощенное выращивание особенно капризных растений" +
                    "<br><b>4 уровень</b>" +
                    "<br>- Все способности 3 уровня" +
                    "<br>- Управление формой растений" +
                    "<br>- Выращивание растений до 3 м" +
                    "<br><b>5 уровень</b>" +
                    "<br>- Все способности 4 уровня\n" +
                    "<br>- Выращивание растений до 5 м" +
                    "<br>- Оживление уже увядших растений" +
                    "<br><b>6 уровень</b>" +
                    "<br>- Все способности 5 уровня" +
                    "<br>- Выращивание растений, придание им формы, размеров, характера, повадок;" +
                    "<br>- Выращивание деревьев до 10 м"
            },
            {
                header: "Фазирование (4-6 курсы)",
                body: "Прохождение сквозь предметы, путем протаскивания своих атомов сквозь них" +
                    "<br><br><b>1 уровень</b>" +
                    "<br>– Прохождение сквозь предметы толщиной до 10 см" +
                    "<br><b>2 уровень</b>" +
                    "<br>– Прохождение сквозь предметы толщиной до 50 см" +
                    "<br><b>3 уровень</b>" +
                    "<br>– Прохождение сквозь предметы толщиной до 1 м"
            },
            {
                header: "Метаморфомагия (1-6 курсы)",
                body: "Изменение внешности по желанию мага" +
                    "<br><br><b>1 уровень</b>" +
                    "<br>– При сильных эмоциональных порывах неосознанное и неконтролируемое изменение цвета своих волос" +
                    "<br><b>2 уровень</b>" +
                    "<br>- Контроль над небольшими изменениями черт лица (уши, нос, рот, глаза, волосы). Изменения длятся в течение одного дня" +
                    "<br><b>3 уровень</b>" +
                    "<br>- Контроль над изменениями черт лица и поддержание их в течение недели" +
                    "<br><b>4 уровень</b>" +
                    "<br>- Контроль изменений кожи, формы лица и длины волос, поддержание их в течение месяца" +
                    "<br><b>5 уровень</b>" +
                    "<br>- Контроль изменений большей части своего тела, изменение пола, возраста, веса и роста. Поддержание изменений в течение двух месяцев" +
                    "<br><b>6 уровень</b>" +
                    "<br>- Полный контроль изменения своей внешности и тела, поддержание изменений на срок до полугода"
            },
            {
                header: "Невидимость (2-6 курсы)",
                body: "Возможность сливаться с внешним миром" +
                    "<br><br><b>1 уровень</b>" +
                    "<br>– Общая прозрачность тела менее 10%" +
                    "<br><b>2 уровень</b>" +
                    "<br>– Общая прозрачность тела 30%" +
                    "<br><b>3 уровень</b>" +
                    "<br>- Все способности 2 уровня" +
                    "<br>- Возможность сливаться на 100% с предметами меньше роста волшебника" +
                    "<br><b>4 уровень</b>" +
                    "<br>- Все способности 3 уровня" +
                    "<br>- Общая прозрачность тела 60%" +
                    "<br>- Возможность сливаться на 100%  с недвижимыми объектами любого размера" +
                    "<br><b>5 уровень</b>" +
                    "<br>- Все способности 4 уровня" +
                    "<br>- Возможность сливаться с любым фоном на 100%"
            },
            {
                header: "Целительство (2-6 курсы)",
                body: "Исцеление других людей от обычных заболеваний и магических болезней и повреждений." +
                    "<br><br>0 уровень - Умение видеть обычные заболевания" +
                    "<br><b>1 уровень</b>" +
                    "<br>- Все способности 0 уровня" +
                    "<br>- Передача небольшого количества своей жизненной энергии истощенному человеку" +
                    "<br><b>2 уровень</b>" +
                    "<br>- Все способности 1 уровня" +
                    "<br>- Возможность блока болевых ощущений при легких повреждениях" +
                    "<br>- Умение видеть магические повреждения и заболевания" +
                    "<br>- Лечение несложных заболеваний организма" +
                    "<br><b>3 уровень</b>" +
                    "<br>- Все способности 2 уровня" +
                    "<br>- Передача значительного количества своей жизненной энергии истощенному человеку" +
                    "<br>- Лечение легких повреждений, нанесённых магией" +
                    "<br>- Снижать влияние проклятий средней сложности" +
                    "<br><b>4 уровень</b>" +
                    "<br>- Все способности 3 уровня" +
                    "<br>- Замедлять развитие болезней средней тяжести, снимать их симптомы" +
                    "<br>- Возможность блока болевых ощущений при серьёзных повреждениях" +
                    "<br>- Лечение заболеваний средней сложности" +
                    "<br><b>5 уровень</b>" +
                    "<br>- Все способности 4 уровня" +
                    "<br>- Снимать проклятия средней сложности" +
                    "<br>- Лечение магических заболеваний средней сложности" +
                    "<br>- Восстановление отмерших тканей организма"
            },
            {
                header: "Телекинез (2-6 курсы)",
                body: "Способность человека оказывать влияние на физические объекты без материального воздействия при помощи силы мысли или взгляда" +
                    "<br><br><b>1 уровень</b>" +
                    "<br>- Непродолжительное передвижение мелких предметов весом до 1 кг засчет зрительного контакта \n" +
                    "<br><b>2 уровень</b>" +
                    "<br>- Передвижение предметов весом до 5 кг засчёт зрительного контакта" +
                    "<br><b>3 уровень</b>" +
                    "<br>- Все способности 2 уровня" +
                    "<br>- Передвижение предметов весом до 15 кг" +
                    "<br>- Передвижение предметов без зрительного контакта" +
                    "<br><b>4 уровень</b>" +
                    "<br>- Все способности 3 уровня" +
                    "<br>- Передвижение предметов весом до 45 кг" +
                    "<br>- Повреждений материй низкой прочности" +
                    "<br><b>5 уровень</b>" +
                    "<br>- Все способности 4 уровня" +
                    "<br>- Передвижение предметов весом до 90 кг" +
                    "<br>- Повреждение материй средней прочности"
            },
            {
                header: "Техномагия (3-6 курс)",
                body: "Контроль техники*, подчинение ее себе и возможность изменять заложенные и создавать свои алгоритмы в ней по своему усмотрению." +
                    "<br><br>0 уровень - произвольное взаимодействие с техникой" +
                    "<br><b>1 уровень</b>" +
                    "<br>- Диагностика состояния техники касанием. починка несложных поломок механической техники** касанием" +
                    "<br>- Одновременный Контроль* 2 приборов" +
                    "<br><b>2 уровень</b>" +
                    "<br>- Починка поломок средней серьезности техники касанием" +
                    "<br>- Взаимодействие с мелкими электрическими бытовыми приборами удаленно с расстояния до 1,5 м" +
                    "<br>- Одновременный Контроль 4 приборов" +
                    "<br><b>3 уровень</b>" +
                    "<br>- Починка поломок средней серьезности в устройствах*** касанием" +
                    "<br>- Взаимодействие с мелкой бытовой техникой удаленно с расстояния до 3 м" +
                    "<br>- Взаимодействие с крупной бытовой техникой касанием" +
                    "<br>- Одновременный контроль 8 приборов" +
                    "<br><b>4 уровень</b>" +
                    "<br>- Починка поломок любой серьезности любой техники касанием" +
                    "<br>- Взаимодействие с бытовой техникой удаленно до 10 м" +
                    "<br>- Взаимодействие с высокотехнологичными устройствами (ЖК экраны, смартфоны, домашние ПК) касанием" +
                    "<br>- Возможность общения с фиксиками****" +
                    "<br>- Одновременный Контроль 16 приборов" +
                    "<br><br>*Техника - любые сложные механизмы и системы." +
                    "<br>**Механическая техника - техника, работающая без тока" +
                    "<br>***Устройство - техника, работающая на токе"
            },
        ];

        this._undevelopingItems = [
            {
                header: "Оживление рисунков",
                body: "Способность оживлять собственные рисунки. Оживленный рисунок имеет такие же размеры, как до оживления. Рисунок остаётся двумерным, но может перемещаться по плоскостям: перейти с одной на другую, если они пересекаются. Обязательно в физических способностях указать навык рисования."
            },
            {
                header: "Эмпатия",
                body: "Способность чувствовать чужие эмоции, чувства, страхи."
            },
            {
                header: "Видение в темноте",
                body: "Без комментариев."
            },
            {
                header: "Чарующее пение",
                body: "Заставляет слушающего испытывать эмоцию, которую задумал поющий.  Обязательно указать наличие в биографии в роду вейлы и умения петь в физических способностях"
            },
            {
                header: "Глаз-открывашка",
                body: "Открывайте глазом пиво без ущерба для себя и окружающих!"
            },
            {
                header: "Предчувствие",
                body: "В случае, если в ближайшие 10 секунд маг попадёт в ситуацию, которая способна вызвать всплеск негативных эмоций, волшебник видит двухсекундное видение о предстоящих событиях. Способность реагирует только на отрицательные эмоции своего носителя. "
            },
            {
                header: "Сканирование",
                body: "С 3 курса - способность чувствовать людей вокруг себя в радиусе до 5 м. Если человек не скрыт чарами маскировки и/или навыком невидимости, маг при применении способности будет видеть его как силуэт (например, на стене, если человек находится за ней). Если человек применяет вышеупомянутые чары/навыки, маг будет ощущать его присутствие, но не сможет его увидеть"
            },
        ];
    }

    /**
     * @public
     * @method getDevelopingItems
     * @param success {Function}
     * @returns {Array}
     */
    getDevelopingItems(success) {
        return success(this._developingItems);
    }

    /**
     * @public
     * @method getUndevelopingItems
     * @param success {Function}
     * @returns {Array}
     */
    getUndevelopingItems(success) {
        return success(this._undevelopingItems);
    }
}

export default Repository;
