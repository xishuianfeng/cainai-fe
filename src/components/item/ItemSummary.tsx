import { defineComponent } from 'vue';
export const ItemSummary = defineComponent({
  props:{
    startDate:{
      type:String,
      require:true,
    },
    endDate:{
      type:String,
      require:true,
    }
  },
  setup:(props,context) => {
    return ()=> (
      <div>Summary</div>
    )
  }
})