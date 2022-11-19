import { defineComponent } from 'vue';
import Icon from './Icon.vue'
import s from './FloatButton.module.scss'
export const FloatButton = defineComponent({
  setup:(props,context) => {
    return ()=> (
      <div class={s.floatButton}>
        <Icon icon={'add'} class={s.icon} />
      </div>
    )
  }
})