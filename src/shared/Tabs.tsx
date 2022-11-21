import { defineComponent } from 'vue';
import s from './Tabs.module.scss'
export const Tabs = defineComponent({
  props:{
    selected:{
      type:String,
    },
    onUpdateSelected:{
      type:Function,
    }
  },
  setup:(props,context) => {
    return ()=> {
      const array = context.slots.default?.()
      if(!array) return () => null
      for(let i = 0;i<array.length;i++){
        if(array[i].type !== Tab){
          throw new Error('<Tabs> only accepts <Tab> as children')
        }
      }
      return( 
          <div class={s.tabs}>
            <ol class={s.tabs_nav}>
              {array.map(item=>
              <li class={item.props?.name === props.selected ? s.selected:''}
                  onClick={()=>props.onUpdateSelected?.(item.props?.name)}
              >
                {item.props?.name}
              </li>)}
            </ol>
          <div></div>
        </div>
      )
    }
  }
})

export const Tab = defineComponent({
  props:{
    name:{
      type:String,
    },
  },
  setup:(props,context) => {
    return ()=> (
      <div>{context.slots.default?.()}</div>
    )
  }
})