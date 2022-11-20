import { defineComponent } from 'vue';
import { Button } from '../shared/Button';
import { FloatButton } from '../shared/FloatButton';
import Icon from '../shared/Icon.vue'
import { Navbar } from '../shared/Narbar';
import s from './StartPage.module.scss'
export const StartPage = defineComponent({
  setup:(props,context) => {
    const onClick=()=>{
      console.log(1);
      
    }
    const slots = {
      icon:()=> <Icon icon='menu' class={s.navIcon}/>,
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
      </div>
    )
  }
})