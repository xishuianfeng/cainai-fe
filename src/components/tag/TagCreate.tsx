import { defineComponent, reactive } from 'vue';
import { MainLayout } from '../../layout/MainLayout';
import { Button } from '../../shared/Button';
import { EmojiSelect } from '../../shared/EmojiSelect';
import Icon from '../../shared/Icon.vue'
import s from './TagCreate.module.scss'
export const TagCreate = defineComponent({
  setup:(props,context) => {
    const formDate = reactive({
      name:'',
      sign:'',
    })
    return ()=> (
      <MainLayout>{{
        title:()=>'新建标签',
        icon:()=><Icon icon='left' onClick={()=>{}}/>,
        default: () => (
          <form class={s.form}>

            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>标签名</span>
                <div class={s.formItem_value}>
                  <input v-model = {formDate.name} class={[s.formItem, s.input, s.error]}></input>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>必填</span>
                </div>
              </label>
            </div>
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>符号</span>
                <div class={s.formItem_value}>
                  <EmojiSelect class={[s.fromItem,s.emojiList,s.error]}/>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>必填</span>
                </div>
              </label>
            </div>
            <p class={s.tips}>记账时长按标签即可进行编辑</p>
            <div class={s.formRow}>
              <div class={s.formItem_value}>
                <Button class={[s.formItem, s.button]}>确定</Button>
              </div>
            </div>
          </form>
        )
      }}</MainLayout>
    )
  }
})