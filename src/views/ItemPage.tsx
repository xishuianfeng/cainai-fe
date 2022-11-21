import { defineComponent } from 'vue';
import { MainLayout } from '../layout/MainLayout';
import s from './ItemPage.module.scss'
import Icon from '../shared/Icon.vue'
import { RouterView } from 'vue-router';

export const ItemPage = defineComponent({
  setup:(props,context) => {
    return ()=> (
      <RouterView />
    )
  }
})