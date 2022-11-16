import { Foo } from '../views/Foo'
import { Bar } from '../views/Bar'
import { First } from '../components/welcome/first'
import { Welcome } from '../views/Welcome'
import { Second } from '../components/welcome/second'
import { Third } from '../components/welcome/third'
import { Forth } from '../components/welcome/forth'

export const routes=[
  {path:'/',component:Foo},
  {path:'/Bar',component:Bar},
  {path:'/welcome',
    component:Welcome,
    children:[
      { path:'1', component:First,},
      { path:'2', component:Second,},
      { path:'3', component:Third,},
      { path:'4', component:Forth,},
    ]
  },
]