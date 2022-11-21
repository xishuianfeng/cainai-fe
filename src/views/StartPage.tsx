import { defineComponent, ref } from 'vue';
import { Button } from '../shared/Button';
import { FloatButton } from '../shared/FloatButton';
import Icon from '../shared/Icon.vue'
import { Navbar } from '../shared/Navbar';
import { Ovaerlay } from '../shared/Overlay';
import { RouterLink } from 'vue-router';
import s from './StartPage.module.scss'
import { MainLayout } from '../layout/MainLayout';


export const StartPage = defineComponent({
  setup:(props,context) => {
    const refOverlayVisible = ref(false)
    const onClickMenu = () => {
      refOverlayVisible.value = !refOverlayVisible.value      
    }
    return ()=> (
      // <div>
        <MainLayout>{
          {
            title:()=>'彩乃记账',
            icon:()=><Icon icon='menu' class={s.navIcon} onClick={onClickMenu}/>,
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
          {refOverlayVisible.value && <Ovaerlay onClose={()=>refOverlayVisible.value = false}/>}
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
        {refOverlayVisible.value && <Ovaerlay onClose={()=>refOverlayVisible.value = false}/>}
      </div> */
    )
  }
})