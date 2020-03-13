import React from 'react'
import style from './style.module.css'
import SearchGoogle from "./googlesearch.png"
import Account from "./account.png"
import Calendar from "./calendar.png"
import Contacts from "./contacts.png"
import Drive from "./drive.png"
import Gmail from "./gmail.png"
import Maps from "./map.png"
import News from "./news.png"
import PhotoGoogle from "./photo.png"
import Play from "./play.png"
import Translate from "./translate.png"
import Youtube from "./youtube.png"

const arrButton = [{
  alt: "icon",
  src: SearchGoogle,
  name: "Поиск"
},
{
  alt: "icon",
  src: Account,
  name: "Аккаунт"
},
{
  alt: "icon",
  src: Maps,
  name: "Карты"
},
{
  alt: "icon",
  src: Youtube,
  name: "Youtube"
},
{
  alt: "icon",
  src: Play,
  name: "Play"
},
{
  alt: "icon",
  src: News,
  name: "News"
},
{
  alt: "icon",
  src: Gmail,
  name: "Почта"
},
{
  alt: "icon",
  src: Contacts,
  name: "Контакты"
},
{
  alt: "icon",
  src: Drive,
  name: "Диск"
},
{
  alt: "icon",
  src: Calendar,
  name: "Календарь"
},
{
  alt: "icon",
  src: Translate,
  name: "Переводчик"
},
{
  alt: "icon",
  src: PhotoGoogle,
  name: "Фото"
}
]

const ButtonMenu: React.FC = () => {
  return <>
    {arrButton.map(item => 
    <button className={style.InstrGoogle}>
      <img alt={item.alt} src={item.src}></img>{item.name}
    </button>)}
  </>
}

export default ButtonMenu