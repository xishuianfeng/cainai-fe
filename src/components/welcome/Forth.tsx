import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import Icon from '../../shared/Icon.vue'


export const Forth = defineComponent({
  setup:(props,context) => {
    const slots = {
      icon:()=> <Icon icon='cloud'/>,
      title:()=> <h2>云备份，<br/>不怕数据丢失</h2>,
      buttons:()=><>
          <RouterLink class={s.fake} to={"/welcome/start"}>跳过</RouterLink>
          <RouterLink to={"/start"}>完成</RouterLink>
          <RouterLink to={"/start"}>跳过</RouterLink>
          </>,
    }
    return ()=> (
      <WelcomeLayout v-slots={slots}></WelcomeLayout>
    )
  }
})