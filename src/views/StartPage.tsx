import { defineComponent } from 'vue';
import { Button } from '../shared/Button';
import { FloatButton } from '../shared/FloatButton';
import s from './StartPage.module.scss'
export const StartPage = defineComponent({
  setup:(props,context) => {
    const onClick=()=>{
      console.log(1);
      
    }
    return ()=> (
      <div>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>1</Button>
        </div>
        <FloatButton/>
      </div>
    )
  }
})