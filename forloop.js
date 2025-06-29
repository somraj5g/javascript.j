// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

const states = [
    "Andaman",
    "Nagaland",
    "Tripura",
    "Meghalaya",
    2025,
    "Puducherry",
    "Ladakh",
    "Arunachal",
];

for (let i = 0; i < states.length; i++) {
    if (typeof states[i] !== "string") continue;
    console.log(states[i]);
}

for (let i = 0; i < states.length; i++) {
    if (typeof states[i] !== "string") break;
    console.log(states[i]);
}
