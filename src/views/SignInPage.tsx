import axios, { AxiosResponse } from 'axios';
import { defineComponent, reactive, ref } from 'vue';
import { MainLayout } from '../layout/MainLayout';
import { useBool } from '../hooks/useBool';
import { Button } from '../shared/Button';
import { Form, FormItem } from '../shared/Form';
import Icon from '../shared/Icon.vue'
import { validate,hasError } from '../shared/validate';
import s from './SignInPage.module.scss'
import { history } from '../shared/history';
import { http } from '../shared/Http';
import { useRoute, useRouter } from 'vue-router';
import { refreshMe } from '../shared/me';

export const SignInPage = defineComponent({
  setup: (props, context) => {
    const formData = reactive({
      email: '',
      code: ''
    })
    const errors = reactive({
      email: [],
      code: []
    })
    const refValidationCode = ref<any>()
    const { ref: refDisabled, toggle, on: disabled, off: enable } = useBool(false)
    const router = useRouter()
    const route = useRoute()
    const onSubmit = async (e: Event) => {
      e.preventDefault()
      Object.assign(errors, {
        email: [], code: []
      })
      Object.assign(errors, validate(formData, [
        { key: 'email', type: 'required', message: '必填' },
        { key: 'email', type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址' },
        { key: 'code', type: 'required', message: '必填' },
      ]))
      if (!hasError(errors)) {
        const response = await http.post<{ jwt: string }>('/session', formData)
        localStorage.setItem('jwt', response.data.jwt)
        // router.push('/sign_in?return_to='+ encodeURIComponent(route.fullPath))
        const returnTo = route.query.return_to?.toString()
        refreshMe()
        router.push(returnTo || '/')
      }
    }
    const onError = (error: any) => {
      if (error.response.status === 422) {
        Object.assign(errors, error.response.data.errors)
      }
      throw error
    }
    const onClickSendValidationCode = async () => {

      disabled()
      const response = await http
        .post('/validation_codes', { email: formData.email })
        .catch(onError)
        .finally(enable)
      // 成功
      refValidationCode.value.startCount()

    }
    return () => (
      <MainLayout>{{
        title: () => '登录',
        icon: () => <Icon icon="left" />,
        default: () => (
          <div class={s.wrapper}>
            <div class={s.logo}>
              <img src="src/assets/icons/cainai.png" />
              <h1 class={s.appName}>彩乃记账</h1>
            </div>
            <Form onSubmit={onSubmit}>
              <FormItem label='邮箱地址' type="text" placeholder='请输入邮箱'
                v-model={formData.email} error={errors.email?.[0]} />
              <FormItem ref={refValidationCode} label='验证码' type="validationCode"
                placeholder='请输入验证码'
                countFrom={60}
                disabled={refDisabled.value}
                onClick={onClickSendValidationCode}
                v-model={formData.code} error={errors.code?.[0]} />
              <FormItem style={{ paddingTop: '64px' }}>
                <Button type="submit">登录</Button>
              </FormItem>
            </Form>
          </div>
        )
      }}</MainLayout>
    )
  }
}) 









// icon: () => <Icon icon="left" />,