const mockEntry = {
    id: "1",
    type: "Hotel",
    name: "Hotel Adlon Kempinski",
    street: "Unter den Linden",
    streetNr: "77",
    zipCode: "10117",
    city: "Berlin",
    numberOfBeds: 250,
    freeBeds: 180
};
const mockEntry2 = {
    id: "2",
    type: "Hotel",
    name: "Hotel NH",
    street: "Alexanderplatz",
    streetNr: "12",
    zipCode: "10120",
    city: "Berlin",
    numberOfBeds: 80,
    freeBeds: 3
};
const mockEntry3 = {
    id: "2",
    type: "Hospital",
    name: "Hotel Bayrischer Hof",
    street: "Münchnerstr.12",
    streetNr: "20",
    zipCode: "80333",
    city: "München",
    numberOfBeds: 180,
    freeBeds: 20
};
const mockEntries = [mockEntry, mockEntry2, mockEntry3];

const pickRandomEntry = versions => Math.floor(Math.random() * 10) % versions;

const rows = (new Array(30)).fill(null).map(entry => mockEntries[pickRandomEntry(3)]);

export const getAllLocations = () => rows;
