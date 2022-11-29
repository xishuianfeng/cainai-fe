import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
import Icon from '../../shared/Icon.vue'
import { SkipFeatures } from '../../shared/SkipFeatures';

export const Third = defineComponent({
  setup:(props,context) => {
    const slots = {
      icon:()=> <Icon icon='chart'/>,
      title:()=> <h2>数据可视化，<br/>收支一目了然</h2>,
      buttons:()=><>
          <RouterLink class={s.fake} to={"/welcome/start"}>跳过</RouterLink>
          <RouterLink to={"/welcome/4"}>下一页</RouterLink>
          <SkipFeatures/>
          </>,
    }
    return ()=> (
      <WelcomeLayout v-slots={slots}></WelcomeLayout>
    )
  }
})