import { First } from '../components/welcome/First'
import { Welcome } from '../views/Welcome'
import { Second } from '../components/welcome/Second'
import { Third } from '../components/welcome/Third'
import { Forth } from '../components/welcome/Forth'
import { StartPage } from '../views/StartPage'
import { ItemPage } from '../views/ItemPage'
import { ItemList } from '../components/ItemList'
import { ItemCreate } from '../components/ItemCreate'

export const routes=[
  {path:'/',component:Welcome},
  {
    path:'/welcome',
    component:Welcome,
    children:[
      { path:'',redirect:'/welcome/1',},
      { path:'1', component:First,},
      { path:'2', component:Second,},
      { path:'3', component:Third,},
      { path:'4', component:Forth,},
    ]
  },
  {path:'/start',component:StartPage},
  {
    path:'/items', component:ItemPage,
    children:[
      {path:'',component:ItemList},
      {path:'create',component:ItemCreate},
    ]
  }
]