import { defineComponent, ref } from 'vue';
import { MainLayout } from '../../layout/MainLayout';
import s from './ItemCreate.module.scss'
import Icon from '../../shared/Icon.vue'
import { Tabs,Tab } from '../../shared/Tabs';
import { InputPad } from './InputPad';

export const ItemCreate = defineComponent({
  setup:(props,context) => {
    const refKind = ref('支出')
    return ()=> (
      <MainLayout>
        {{
          title:()=>'记一笔',
          icon:<Icon icon='left' class={s.navIcon} />,
          default:()=><>
            <Tabs selected={refKind.value} onUpdateSelected={(name:string) =>refKind.value = name}>
              <Tab name='支出'>
                icon 列表
              </Tab>
              <Tab name='收入'>
                icon 列表2
              </Tab>
            </Tabs>
            <div class={s.inputPad_wrapper}>
              <InputPad />
            </div>
          </>
        }}
      </MainLayout>
    )
  }
})