import { defineComponent, ref } from 'vue';
import { Button } from '../shared/Button';
import { FloatButton } from '../shared/FloatButton';
import Icon from '../shared/Icon.vue'
import { Navbar } from '../shared/Navbar';
import { Overlay, OverlayIcon } from '../shared/Overlay';
import { RouterLink } from 'vue-router';
import s from './StartPage.module.scss'
import { MainLayout } from '../layout/MainLayout';


export const StartPage = defineComponent({
  setup:(props,context) => {
    return ()=> (
      // <div>
        <MainLayout>{
          {
            title:()=>'彩乃记账',
            icon:()=> <OverlayIcon/>,
            default:()=><>
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
        </>
      
        }  
        }</MainLayout>

        /* <Navbar v-slots={slots}></Navbar>
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
        {refOverlayVisible.value && <Overlay onClose={()=>refOverlayVisible.value = false}/>}
      </div> */
    )
  }
})