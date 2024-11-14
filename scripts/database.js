export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts",
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed",
        }
    ],
    villains: [
    {
        id: 1,
        name: "Stupid Guy",
        power: "Stupidity"
    },
    {
        id: 2,
        name: "Smart Girl",
        power: "High IQ",
    }
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}