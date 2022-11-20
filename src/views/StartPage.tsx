import { defineComponent, ref } from 'vue';
import { Button } from '../shared/Button';
import { FloatButton } from '../shared/FloatButton';
import Icon from '../shared/Icon.vue'
import { Navbar } from '../shared/Narbar';
import { Ovaerlay } from '../shared/Overlay';
import { RouterLink } from 'vue-router';
import s from './StartPage.module.scss'


export const StartPage = defineComponent({
  setup:(props,context) => {
    const refOverlayVisible = ref(false)
    const onClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value      
    }
    const slots = {
      icon:()=> <Icon icon='menu' class={s.navIcon} onClick={onClickMenu}/>,
      default:() => <span>彩乃记账</span>
    }
    return ()=> (
      <div>
        <Navbar v-slots={slots}></Navbar>
        <div class={s.pig_wrapper}>
          <Icon icon='pig' class={s.pig}/>
        </div>
        <div class={s.button_wrapper}>
          <RouterLink to="/items/create">
            <Button class={s.button} >开始记账</Button>
          </RouterLink>
        </div>
        <RouterLink to="/items/create">
          <FloatButton iconName='add' class={s.floatbutton}/>
        </RouterLink>
        {refOverlayVisible.value && <Ovaerlay onClose={()=>refOverlayVisible.value = false}/>}
      </div>
    )
  }
})