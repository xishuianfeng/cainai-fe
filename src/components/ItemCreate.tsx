import { defineComponent } from 'vue';
import { MainLayout } from '../layout/MainLayout';
import s from './ItemCreate.module.scss'
import Icon from '../shared/Icon.vue'
export const ItemCreate = defineComponent({
  setup:(props,context) => {
    return ()=> (
      <MainLayout>
        {{
          title:()=>'记一笔',
          icon:<Icon icon='left' class={s.navIcon} />,
          default:()=><>
          <div>main</div>
          </>
        }}
      </MainLayout>
    )
  }
})