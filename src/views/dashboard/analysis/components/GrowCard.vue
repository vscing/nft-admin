<template>
  <div class="md:flex">
    <template v-for="(item, index) in growCardList" :key="item.title">
      <Card size="small" :loading="loading" :title="item.title" class="md:w-1/4 w-full !md:mt-0"
        :class="{ '!md:mr-4': index + 1 < 4, '!mt-4': index > 0 }">
        <template #extra>
          <Tag :color="item.color">{{ item.action }}</Tag>
        </template>

        <div class="py-4 px-4 flex justify-between items-center">
          <CountTo :prefix="item.prefix" :startVal="1" :endVal="Number(data[item.value])" class="text-2xl" />
          <Icon :icon="item.icon" :size="40" />
        </div>

        <!-- <div class="p-2 px-4 flex justify-between">
          <span>总{{ item.title }}</span>
          <CountTo prefix="$" :startVal="1" :endVal="item.total" />
        </div> -->
      </Card>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { CountTo } from '/@/components/CountTo/index';
import { Icon } from '/@/components/Icon';
import { Tag, Card } from 'ant-design-vue';
import { getIndex } from '/@/api/sys/index';
import { growCardList } from '../data';

defineProps({
  loading: {
    type: Boolean,
  },
});

const data = ref({
  userNum: 0,
  orderPrice: 0.00,
  putPrice: 0.00,
  toPrice: 0.00
})

const init = async() => {
  const res = await getIndex({});
  data.value = res;
}

init();
</script>
