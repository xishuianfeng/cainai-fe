import { Value } from 'sass';
import { DatetimePicker, Popup } from 'vant';
import { computed, defineComponent, PropType, ref, VNode } from 'vue';
import { Button } from './Button';
import { EmojiSelect } from './EmojiSelect';
import s from './Form.module.scss';
import { getFriendlyError } from './getFriendlyError';
import { Time } from './time';

export const Form = defineComponent({
  props: {
    onSubmit: {
      type: Function as PropType<(e: Event) => void>,
    }
  },
  setup: (props, context) => {
    return () => (
      <form class={s.form} onSubmit={props.onSubmit}>
        {context.slots.default?.()}
      </form>
    )
  }
})

export const FormItem = defineComponent({
  props: {
    label: {
      type: String
    },
    modelValue: {
      type: [String, Number]
    },
    type: {
      type: String as PropType<'text' | 'emojiSelect' | 'date' | 'validationCode' | 'select'>,
    },
    error: {
      type: String
    },
    placeholder:String,
    options:Array as PropType<Array<{value:string,text:string}>>,
    onClick:Function as PropType<()=>void>,
    countFrom:{
      type:Number,
      default:60
    },
    disabled:Boolean,
  },
  emits:['update:modelValue'],
  setup: (props, context) => {
    const refDateVisible = ref(false)
    const timer = ref<number>()
    const count = ref<number>(props.countFrom)
    const isCounting = computed(() => !!timer.value)

    //@ts-ignore
    const startCount = () => timer.value = setInterval(() => {
      count.value -= 1
      if(count.value === 0){
        clearInterval(timer.value)
        timer.value = undefined
        count.value = props.countFrom
      }
    },1000)

    context.expose({ startCount })
    //传给父组件startCount

    const content = computed(() => {
      switch (props.type) {
        case 'text':
          return <input
            value={props.modelValue}
            placeholder={props.placeholder}
            onInput={(e: any) => context.emit('update:modelValue', e.target.value)}
            class={[s.formItem, s.input]} />
        case 'emojiSelect':
          return <EmojiSelect
            modelValue={props.modelValue?.toString()}
            onUpdateModelValue={(value: any) => context.emit('update:modelValue', value)}
            class={[s.formItem, s.emojiList, s.error]} />
        case 'select':
          return <select class={[s.formItem, s.select]} value={props.modelValue}
              onChange={(e: any) => context.emit('update:modelValue', e.target.value)}>
            {props.options?.map(option => 
              <option value={option.value}>{option.text}</option>  
            )}
          </select>
        case 'validationCode':
          return <>
            <input class={[s.formItem, s.input, s.validationCodeInput]} 
                value={props.modelValue}
                onInput={(e: any) => context.emit('update:modelValue', e.target.value)}
                placeholder={props.placeholder}
              />
            <Button disabled={isCounting.value || props.disabled} 
                onClick={props.onClick} 
                class={[s.formItem,s.button,s.validationCodeButton]}>
              {isCounting.value ? `${count.value}秒后重置` : '发送验证码'}
            </Button>
          </>
        case 'date':
          return <>
          <input readonly={true} value={props.modelValue}
            placeholder={props.placeholder}
            onClick={()=>{refDateVisible.value = true}}
            class={[s.formItem, s.input, s.error]} />
            <Popup position='bottom' v-model:show={refDateVisible.value}>
              <DatetimePicker value={props.modelValue} type='date' title='选择年月日'
                onConfirm={(date:Date)=>{
                  context.emit('update:modelValue',new Time(date).format())
                  refDateVisible.value = false
                }}
                onCancel={()=>refDateVisible.value = false}/>
            </Popup>
            </>
        case undefined:
          return context.slots.default?.()
      }
    })
    return () => {
      return <div class={s.formRow}>
        <label class={s.formLabel}>
          {props.label &&
            <span class={s.formItem_name}>{props.label}</span>
          }
          <div class={s.formItem_value}>
            {content.value}
          </div>
          {props.error &&
            <div class={s.formItem_errorHint}>
              <span>{props.error ? getFriendlyError(props.error) : '　'}</span>
            </div>
          }
        </label>
      </div>
    }
  }
})