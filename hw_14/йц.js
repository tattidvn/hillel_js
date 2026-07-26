const events = [
    { type: "click", user: "A" },
    { type: "view", user: "B" },
    { type: "click", user: "B" },
    { type: "click", user: "A" },
];

const field = "type";

const result = events.reduce((acc, curr, i) => {
    if (!acc[curr.field]) {
        acc[curr[field]] = 1;
    } else {
        acc[curr.field] += 1;
    }

    acc["log" + i] = curr.field;

    return acc;
}, {});

console.log(result);