import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import Icon from '../../shared/Icon.vue'
import { SkipFeatures } from '../../shared/SkipFeatures';

export const Second = defineComponent({
  setup:(props,context) => {
    const slots = {
      icon:()=> <Icon icon='clock'/>,
      title:()=> <h2>每日提醒，<br/>不遗漏每一笔账单</h2>,
      buttons:()=><>
          <RouterLink class={s.fake} to={"/welcome/start"}>跳过</RouterLink>
          <RouterLink to={"/welcome/3"}>下一页</RouterLink>
          <SkipFeatures/>
          </>,
    }
    return ()=> (
      <WelcomeLayout v-slots={slots}></WelcomeLayout>
    )
  }
})