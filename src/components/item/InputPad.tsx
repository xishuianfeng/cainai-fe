import { time } from '../../shared/time';
import { defineComponent } from 'vue';
import Icon from '../../shared/Icon.vue'
import s from './InputPad.module.scss'
export const InputPad = defineComponent({
  setup:(props,context) => {
    const buttons=[
      {text:'1',onClick:()=>{}},
      {text:'2',onClick:()=>{}},
      {text:'3',onClick:()=>{}},
      {text:'清空',onClick:()=>{}},
      {text:'4',onClick:()=>{}},
      {text:'5',onClick:()=>{}},
      {text:'6',onClick:()=>{}},
      {text:'+',onClick:()=>{}},
      {text:'7',onClick:()=>{}},
      {text:'8',onClick:()=>{}},
      {text:'9',onClick:()=>{}},
      {text:'-',onClick:()=>{}},
      {text:'.',onClick:()=>{}},
      {text:'0',onClick:()=>{}},
      {text:'删',onClick:()=>{}},
      {text:'提交',onClick:()=>{}},
    ]
    return ()=> <>
      <div class={s.dateAndAmount}>
        <span class={s.date}>
          <Icon icon='date' class={s.icon}/>
          <span>
            2022
          </span>
        </span>
        <span class={s.amount}>648</span>
      </div>
      <div class={s.buttons}>
        {buttons.map(button => 
          <button onClick={button.onClick}>{button.text}</button>
          )}
      </div>
      </>
  }
})