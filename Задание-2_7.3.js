const a = {
    name: "Piter",
    city: "Moscow",
    time: 12,
};

function func(str, obj) {
    console.log(str in obj);
};

func("name", a);
func("discription", a);