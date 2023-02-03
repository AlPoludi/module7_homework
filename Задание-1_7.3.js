const a = {
    name: "Piter",
    city: "Moscow"
};

function func(human) {
    for (let key in human) {
        if (human.hasOwnProperty(key)) {
            console.log(key+ ': ' + human[key]);
        };
    };
};

func(a)