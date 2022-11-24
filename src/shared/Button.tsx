import { defineComponent } from 'vue';
import s from './Button.module.scss'

interface Props{
}

export const Button = defineComponent({
  props:{
    onClick:{
      type:Function
    },
    level:{
      type:String,
      default:'important'
    }
  },
  setup:(props,context) => {
    return ()=> (
      <button class={[s.button,s[props.level]]}>
        {context.slots.default?.()}
      </button>
    )
  }
})