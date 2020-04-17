import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';
import configureStore from './store/index';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const { store, persistor } = configureStore();

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "DashboardTitle": "Here you can find an overview of the reported resources.",
                    "BottomNavigationBar": {
                        "Dashboard": "Dashboard",
                        "Map": "Map",
                        "Add": "Add Resource"
                    },
                    "Languages": {
                        "German": "German",
                        "English": "English"
                    }
                }
            },
            de: {
                translation: {
                    "DashboardTitle": "Hier finden Sie eine Übersicht über die gemeldeten Ressourcen.",
                    "BottomNavigationBar": {
                        "Dashboard": "Übersicht",
                        "Map": "Karte",
                        "Add": "Hinzufügen"
                    },
                    "Languages": {
                        "German": "Deutsch",
                        "English": "Englisch"
                    }
                }
            }
        },
        lng: "de",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        // debug: true
    });

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    ,
    document.getElementById('root')
);

registerServiceWorker();
