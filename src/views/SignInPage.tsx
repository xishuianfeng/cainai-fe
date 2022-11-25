import { defineComponent, reactive } from 'vue';
import { MainLayout } from '../layout/MainLayout';
import { Button } from '../shared/Button';
import { Form, FormItem } from '../shared/Form';
import Icon from '../shared/Icon.vue'
import { validate } from '../shared/validate';
import s from './SignInPage.module.scss'
export const SignInPage = defineComponent({
  setup: (props, context) => {
    const formDate = reactive({
      email: '',
      code: ''
    })
    const errors = reactive({
      email: [],
      code: []
    })
    const onSubmit = (e: Event) => {
      e.preventDefault()
      Object.assign(errors, {
        email: [], code: []
      })
      Object.assign(errors, validate(formDate, [
        { key: 'email', type: 'required', message: '必填' },
        { key: 'email', type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址' },
        { key: 'code', type: 'required', message: '必填' },
      ]))
    }
    return () => (
      <MainLayout>{{
        title: () => '登录',
        icon: () => <Icon icon="left" />,
        default: () => (
          <div class={s.wrapper}>
            <div class={s.logo}>
              <img src="src/assets/icons/cainai.png"/>
              <h1 class={s.appName}>彩乃记账</h1>
            </div>
            <Form onSubmit={onSubmit}>
              <FormItem label='邮箱地址' type="text" placeholder='请输入邮箱'
                v-model={formDate.email} error={errors.email?.[0]} />
              <FormItem label='验证码' type="validationCode" placeholder='请输入验证码'
                v-model={formDate.code} error={errors.code?.[0]} />
              <FormItem style={{paddingTop:'64px'}}>
                <Button>登录</Button>
              </FormItem>
            </Form>
          </div>
        )
      }}</MainLayout>
    )
  }
})