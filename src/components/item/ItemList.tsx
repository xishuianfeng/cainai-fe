import { defineComponent, reactive, ref } from 'vue';
import Icon from '../../shared/Icon.vue'
import { MainLayout } from '../../layout/MainLayout';
import s from './ItemList.module.scss'
import { Tabs,Tab } from '../../shared/Tabs';
import { Time } from '../../shared/time';
import { ItemSummary } from './ItemSummary';
import { Ovaerlay } from '../../shared/Overlay';
export const ItemList = defineComponent({
  setup:(props,context) => {
    const refSelected = ref('本月')

    const time = new Time()
    const customTime = reactive({
      start: new Time(),
      end: new Time()
    })
    const timeList = [
      {
        start: time.firstDayOfMonth(),
        end: time.lastDayOfMonth()
      },
      {
        start: time.add(-1, 'month').firstDayOfMonth(),
        end: time.add(-1, 'month').lastDayOfMonth()
      },
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfYear()
      }
    ]

    return ()=> (
      <MainLayout>{{
        title:()=>'彩乃记账',
        icon:()=><Icon icon='menu'/>,
        default:()=>(
          <>
            <Tabs v-model:selected = {refSelected.value}>
              <Tab name='本月'>
                <ItemSummary 
                  startDate={timeList[0].start.format()} 
                  endDate={timeList[0].end.format()}/>
              </Tab>
              <Tab name='上月'>
                <ItemSummary 
                    startDate={timeList[1].start.format()} 
                    endDate={timeList[1].end.format()}/>
              </Tab>
              <Tab name='今年'>
                <ItemSummary 
                    startDate={timeList[2].start.format()} 
                    endDate={timeList[2].end.format()}/>
              </Tab>
              <Tab name='自定义时间'>
                <ItemSummary 
                    startDate={customTime.start.format()} 
                    endDate={customTime.end.format()}/>
              </Tab>
            </Tabs>
            <Ovaerlay></Ovaerlay>
          </>
          )
      }}</MainLayout>
    )
  }
})