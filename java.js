const model = {
    currentTea: null,
    teas: [
        {
            clickCount: 0,
            name: 'Latte Táo Lê Quế Đá',
            imgSrc: 'images/lattetaolequeda.jpg',
        },
        {
            clickCount: 0,
            name: 'Trà Đào Cam Sả Nóng',
            imgSrc: 'images/tdcsnong.jpg',
        },
        {
            clickCount: 0,
            name: 'Trà Đen Machiato',
            imgSrc: 'images/tradenmachiato.jpg',
        },
        {
            clickCount: 0,
            name: 'Trà Sen Nóng',
            imgSrc: 'images/trasennong.jpg',
        },
        {
            clickCount: 0,
            name: 'Trà Sen',
            imgSrc: 'images/trasen.jpg',
        },
        {
            clickCount: 0,
            name: 'Trà Sữa Masala Chai Trân Châu Đá',
            imgSrc: 'images/trasuamasala.jpg',
        },
    ],
};

// Controller
const controller = {
    init() {
        model.currentTea = model.teas[0];

        teaListView.init();
        teaView.init();
    },

    getCurrentTea() {
        return model.currentTea;
    },

    getTeas() {
        return model.teas;
    },

    setCurrentTea(tea) {
        model.currentTea = tea;
    },

    incrementCounter() {
        teaView.render();
    },
};

// Views
const teaView = {
    init() {
        this.teaElem = document.getElementById('tea');
        this.teaNameElem = document.getElementById('tea-name');
        this.teaImageElem = document.getElementById('tea-img');
        this.countElem = document.getElementById('tea-count');
        this.teaImageElem.addEventListener('click', this.clickHandler);
        this.render();
    },

    clickHandler() {
        return controller.incrementCounter();
    },

    render() {
        const currentTea = controller.getCurrentTea();
        this.countElem.textContent = currentTea.clickCount;
        this.teaNameElem.textContent = currentTea.name;
        this.teaImageElem.src = currentTea.imgSrc;
        this.teaImageElem.style.cursor = 'pointer';
    },
};

const teaListView = {
    init() {
        this.teaListElem = document.getElementById('tea-list');

        this.render();
    },

    render() {
        let tea;
        let elem;
        let i;
        const teas = controller.getTeas();
        this.teaListElem.innerHTML = '';
        for(let i = 0; i < teas.length; i++) {
            tea = teas[i];
            elem = document.createElement('li');
            elem.className = 'list-group-item d-flex justify-content-between lh-condensed';
            elem.style.cursor = 'pointer';
            elem.textContent = tea.name;
            elem.addEventListener(
                'click',
                (function(teaCopy) {
                    return function() {
                        controller.setCurrentTea(teaCopy);
                        teaView.render();
                    };
                })(tea)
            );
            this.teaListElem.appendChild(elem);
        }
    },
};

controller.init();