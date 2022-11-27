import { First } from '../components/welcome/First'
import { Welcome } from '../views/Welcome'
import { Second } from '../components/welcome/Second'
import { Third } from '../components/welcome/Third'
import { Forth } from '../components/welcome/Forth'
import { StartPage } from '../views/StartPage'
import { ItemPage } from '../views/ItemPage'
import { ItemList } from '../components/item/ItemList'
import { ItemCreate } from '../components/item/ItemCreate'
import { TagCreate } from '../components/tag/TagCreate'
import { TagEdit } from '../components/tag/TagEdit'
import { TagPage } from '../views/TagsPage'
import { SignInPage } from '../views/SignInPage'
import { StatisticsPage } from '../views/StatisticsPage'

export const routes=[
  {path:'/',redirect:'/welcome/1'},
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
  },
  {
    path:'/tags',component:TagPage,
    children:[
      {path:'create',component:TagCreate},
      {path:':id/edit',component:TagEdit}
    ]
  },
  {path:'/sign_in',component:SignInPage},
  {path:'/statistics',component:StatisticsPage}
]