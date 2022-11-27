import { defineComponent, reactive, ref } from 'vue';
import { Charts } from '../components/siatistics/Charts';
import { TimeTabsLayout } from '../layout/TimeTabsLayout';
export const StatisticsPage = defineComponent({
  setup:(props,context) => {
    return ()=> (
      <TimeTabsLayout component={Charts}/>
    )
  }
})