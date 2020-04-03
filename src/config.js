const prod = {
    API_URL: "http://ec2-3-121-86-158.eu-central-1.compute.amazonaws.com:5000/api",

    firebaseConfig: {
        apiKey: "AIzaSyCtB1YY1mgxU9M9-itFAw1GZoJ_NRuMjO0",
        authDomain: "kapamonitor-4208b.firebaseapp.com",
        databaseURL: "https://kapamonitor-4208b.firebaseio.com",
        projectId: "kapamonitor-4208b",
        storageBucket: "kapamonitor-4208b.appspot.com",
        messagingSenderId: "449276620968",
        appId: "1:449276620968:web:79d7fde8998742de89129d"
    }
};

const dev = {
    API_URL: "http://localhost:5000/api",

    firebaseConfig: {
        apiKey: "AIzaSyAnGB5dgZqw76Bt0u70lmAJn3xRbU0F280",
        authDomain: "fir-49fb4.firebaseapp.com",
        databaseURL: "https://fir-49fb4.firebaseio.com",
        projectId: "fir-49fb4",
        storageBucket: "fir-49fb4.appspot.com",
        messagingSenderId: "895430183462",
        appId: "1:895430183462:web:f1882d3347e73de0b5f4e7"
    }
};

export const config = process.env.NODE_ENV === "development" ? dev: prod;