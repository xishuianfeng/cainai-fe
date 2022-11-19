import { defineComponent,PropType } from 'vue';
import Icon from './Icon.vue'
import s from './FloatButton.module.scss'
export const FloatButton = defineComponent({
  props:{
    iconName:{
      type:String as PropType<String>
    }
  },
  setup:(props,context) => {
    return ()=> (
      <div class={s.floatButton}>
        <Icon icon={props.iconName} class={s.icon} />
      </div>
    )
  }
})