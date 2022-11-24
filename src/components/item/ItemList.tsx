import { defineComponent, ref } from 'vue';
import Icon from '../../shared/Icon.vue'
import { MainLayout } from '../../layout/MainLayout';
import s from './ItemList.module.scss'
import { Tabs,Tab } from '../../shared/Tabs';
export const ItemList = defineComponent({
  setup:(props,context) => {
    const refSelected = ref('本月')
    return ()=> (
      <MainLayout>{{
        title:()=>'彩乃记账',
        icon:()=><Icon icon='menu'/>,
        default:()=>(
          <Tabs v-model:selected = {refSelected.value}>
            <Tab name='本月'>
              list1
            </Tab>
            <Tab name='上月'>
              list2
            </Tab>
            <Tab name='今年'>
              list3
            </Tab>
            <Tab name='自定义时间'>
              list4
            </Tab>
          </Tabs>
        )
      }}</MainLayout>
    )
  }
})