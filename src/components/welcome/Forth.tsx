import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import Icon from '../../shared/Icon.vue'
import { SkipFeatures } from '../../shared/SkipFeatures';

export const Forth = defineComponent({
  setup:(props,context) => {
    const onClick = () => {
      localStorage.setItem('skipFeatures','yes')
    }
    const slots = {
      icon:()=> <Icon icon='cloud'/>,
      title:()=> <h2>云备份，<br/>不怕数据丢失</h2>,
      buttons:()=><>
          <RouterLink class={s.fake} to={"/welcome/start"}>跳过</RouterLink>
          <span onClick={onClick}>
            <RouterLink to={"/start"}>完成</RouterLink>
          </span>
          <SkipFeatures/>
          </>,
    }
    return ()=> (
      <WelcomeLayout v-slots={slots}></WelcomeLayout>
    )
  }
})