import { time } from '../../shared/time';
import { defineComponent, ref } from 'vue';
import Icon from '../../shared/Icon.vue'
import s from './InputPad.module.scss'
import { DatetimePicker,Popup } from 'vant';

export const InputPad = defineComponent({
  setup:(props,context) => {
    const refDate = ref<Date>()

    const appendText = (n:number|string) => {
      const nString = n.toString()
      const dotIndex =refAmount.value.indexOf('.')
      if(refAmount.value.length >= 16){
        return
      }
      if(dotIndex>=0 && refAmount.value.length - dotIndex>2){
        return 
      }
      if(nString === '.'){
        if( dotIndex >= 0){  //已经有小数点了
          return
        }
      }else if(nString === '0'){
        if(dotIndex === -1){  //已经没有小数点了
          if(refAmount.value === '0' ) { //没小数点但是有 0
            return
          }
        }
      }else{
        if(refAmount.value === '0'){
          refAmount.value = ''
        }
      }
      refAmount.value += nString
    }
    const buttons=[
      {text:'1',onClick:()=>{appendText(1)}},
      {text:'2',onClick:()=>{appendText(2)}},
      {text:'3',onClick:()=>{appendText(3)}},
      {text:'4',onClick:()=>{appendText(4)}},
      {text:'5',onClick:()=>{appendText(5)}},
      {text:'6',onClick:()=>{appendText(6)}},
      {text:'7',onClick:()=>{appendText(7)}},
      {text:'8',onClick:()=>{appendText(8)}},
      {text:'9',onClick:()=>{appendText(9)}},
      {text:'.',onClick:()=>{appendText('.')}},
      {text:'0',onClick:()=>{appendText(0)}},
      {text:'清空',onClick:()=>{refAmount.value = '0'}},
      {text:'提交',onClick:()=>{}},
    ]
    const refShowPop = ref(false)
    const setDate = (date:Date)=>{refDate.value = date;refShowPop.value = false}
    const refAmount = ref('0')
    return ()=> <>
      <div class={s.dateAndAmount}>
        <span class={s.date}>
          <Icon icon='date' class={s.icon}/>
          <span>
            <span onClick={()=>refShowPop.value = true}>{time(refDate.value).format()}</span>
            <Popup position='bottom' v-model:show = {refShowPop.value}>
              <DatetimePicker value={refDate.value} type="date" title="选择年月日"
                onConfirm={setDate}
                onCancel={setDate}
                />
            </Popup>
          </span>
        </span>
        <span class={s.amount}>{refAmount.value}</span>
      </div>
      <div class={s.buttons}>
        {buttons.map(button => 
          <button onClick={button.onClick}>{button.text}</button>
          )}
      </div>
      </>
  }
})