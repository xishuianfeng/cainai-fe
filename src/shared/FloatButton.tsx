import { defineComponent } from 'vue';
import Icon from './Icon.vue'
export const FloatButton = defineComponent({
  setup:(props,context) => {
    return ()=> (
      <div>
        <Icon icon={'add'}/>
      </div>
    )
  }
})