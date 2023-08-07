import i18n from "i18next"

import{eng} from "./eng";
import{esp} from "./esp";
import { initReactI18next } from "react-i18next";


const resources = {
  esp:{
    translation:esp
  },
eng:{
  translation: eng
}
}

i18n.use(initReactI18next).init({
  resources,
  lng: "esp"
})

export default i18n