import { defineComponent,PropType } from 'vue';
import s from './Button.module.scss'

export const Button = defineComponent({
  props:{
    onClick:{
      type:Function
    },
    level:{
      type:String,
      default:'important'
    },
    type:{
      type:String as PropType<'submit' | 'button'>
    }
  },
  setup:(props,context) => {
    return ()=> (
      <button type={props.type} class={[s.button,s[props.level]]}>
        {context.slots.default?.()}
      </button>
    )
  }
})