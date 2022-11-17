import { First } from '../components/welcome/First'
import { Welcome } from '../views/Welcome'
import { Second } from '../components/welcome/Second'
import { Third } from '../components/welcome/Third'
import { Forth } from '../components/welcome/Forth'

export const routes=[
  {path:'/',component:Welcome},
  {path:'/welcome',
    component:Welcome,
    children:[
      { path:'',redirect:'/welcome/1',},
      { path:'1', component:First,},
      { path:'2', component:Second,},
      { path:'3', component:Third,},
      { path:'4', component:Forth,},
    ]
  },
]