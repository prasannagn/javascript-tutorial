//Run on Chrome
class Random {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }

    getRandomArbitrary() {
        return Math.trunc(Math.random() * (this.max - this.min) + this.min);
    }
}

const random = new Random(100,1000);

function sleep() {
    return new Promise(resolve => setTimeout(resolve, random.getRandomArbitrary()));
}

//-------------Start------------------//

const login = async(name) => {
    return true;
};


const getBooks = async(name) => {
    console.log("In getBooks", name);
    await sleep();
    console.log("Out getBooks", name);
    return name;
};

const render = (book) => {
    console.log(book);
};

//TEST

const test = async()=> {
    const isLoggedIn = await login('user');
    if (isLoggedIn) {
        const [js, css, java, spring, es6, jQuery, html] = await Promise.all([
            getBooks('JS'),
            getBooks('CSS'),
            getBooks('Java'),
            getBooks('Spring'),
            getBooks('ES6'),
            getBooks('jQuery'),
            getBooks('HTML')
        ]);

        render(js);
        render(css);
        render(java);
        render(spring);
        render(es6);
        render(jQuery);
        render(html);
    }
};

const test1 = async()=> {
    const isLoggedIn = await login('user');
    if (isLoggedIn) {
        const a = await Promise.all([
            getBooks('JS'),
            getBooks('CSS'),
            getBooks('Java'),
            getBooks('Spring'),
            getBooks('ES6'),
            getBooks('jQuery'),
            getBooks('HTML')
        ]);

        render(a[0]);
        render(a[1]);
        render(a[2]);
        render(a[3]);
        render(a[4]);
        render(a[5]);
        render(a[6]);

    }
};

test();