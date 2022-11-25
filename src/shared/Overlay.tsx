import { defineComponent, PropType} from 'vue';
import Icon from '../shared/Icon.vue'
import s from './Overlay.module.scss'
import { RouterLink } from 'vue-router';

export const Overlay = defineComponent({
  props:{
    onClose: {
      type:Function,
    },
    show:{
      type:Boolean,
    }
  },
  setup:(props,context) => {
    const onClickSignIn = () => { }

    const close =() => {
      props.onClose?.()
    }

    return ()=> (
      <>
      <div class={s.mask} onClick={close}>
        <div class={s.overlay}>
           <section class={s.currentUser} onClick={onClickSignIn}>
            <h2>用户</h2>
            <p>点击登录</p>
          </section>
          <nav>
            <ul class={s.action_list}>
              <li class={s.flex}>
                <RouterLink to="/statistics" class={s.action}>
                  <Icon icon="chart" class={s.icon} />
                  <span>统计图表</span>
                </RouterLink>
              </li>
              <li class={s.flex}>
                <RouterLink to="/export" class={s.action}>
                  <Icon icon="export" class={s.icon}/>
                  <span>导出数据</span>
                </RouterLink>
              </li>
              <li class={s.flex}>
                <RouterLink to="/notify" class={s.action}>
                  <Icon icon="notify" class={s.icon}/>
                  <span>记账提醒</span>
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
    )
  }
})