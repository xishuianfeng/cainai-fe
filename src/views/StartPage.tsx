import { defineComponent, ref } from 'vue';
import { Button } from '../shared/Button';
import { FloatButton } from '../shared/FloatButton';
import Icon from '../shared/Icon.vue'
import { Navbar } from '../shared/Narbar';
import { Ovaerlay } from '../shared/Overlay';
import s from './StartPage.module.scss'
export const StartPage = defineComponent({
  setup:(props,context) => {
    const onClick=()=>{
      console.log(1);
    }

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
          <Button class={s.button} onClick={onClick}>开始记账</Button>
        </div>
        <FloatButton iconName='add'/>
        {refOverlayVisible.value && <Ovaerlay onClose={()=>refOverlayVisible.value = false}/>}
      </div>
    )
  }
})