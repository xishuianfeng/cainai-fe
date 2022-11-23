import { defineComponent, ref } from 'vue';
import { MainLayout } from '../../layout/MainLayout';
import s from './ItemCreate.module.scss'
import Icon from '../../shared/Icon.vue'
import { Tabs,Tab } from '../../shared/Tabs';
import { InputPad } from './InputPad';
import { spawn } from 'child_process';

export const ItemCreate = defineComponent({
  setup:(props,context) => {
    const refKind = ref('支出')
    const refExpensesTags = ref([
      { id:1,name:'餐费',sign:'$',category:'expenses'},
      { id:2,name:'打车',sign:'$',category:'expenses'},
      { id:3,name:'聚餐',sign:'$',category:'expenses'},
    ])
    const refIncomeTags = ref([
      { id:4,name:'餐费',sign:'$',category:'income'},
      { id:5,name:'餐费',sign:'$',category:'income'},
      { id:6,name:'餐费',sign:'$',category:'income'},
    ])
    return ()=> (
      <MainLayout class={s.layout}>
        {{
          title:()=>'记一笔',
          icon:<Icon icon='left' class={s.navIcon} />,
          default:()=><>
            <div class={s.wrapper}>
              <Tabs class={s.tabs} 
                  selected={refKind.value} 
                  onUpdateSelected={(name:string) =>refKind.value = name}>
              {/* <Tabs v-model:selected={refKind.value} class={s.tabs}> */}
                <Tab name="支出" class={s.tags_wrapper}>
                  <div class={s.tag}>
                    <div class={s.sign}>
                      <Icon icon="add" class={s.createTag} />
                    </div>
                    <div class={s.name}>
                      新增
                    </div>
                  </div>
                  {refExpensesTags.value.map(tag =>
                    <div class={[s.tag, s.selected]}>
                      <div class={s.sign}>
                        {tag.sign}
                      </div>
                      <div class={s.name}>
                        {tag.name}
                      </div>
                    </div>
                  )}
                </Tab>
                <Tab name="收入" class={s.tags_wrapper}>
                  <div class={s.tag}>
                    <div class={s.sign}>
                      <Icon icon="add" class={s.createTag} />
                    </div>
                    <div class={s.name}>
                      新增
                    </div>
                  </div>
                  {refIncomeTags.value.map(tag =>
                    <div class={[s.tag, s.selected]}>
                      <div class={s.sign}>
                        {tag.sign}
                      </div>
                      <div class={s.name}>
                        {tag.name}
                      </div>
                    </div>
                  )}
                </Tab>
              </Tabs>
              <div class={s.inputPad_wrapper}>
                <InputPad />
              </div>
            </div>
          </>
        }}
      </MainLayout>
    )
  }
})