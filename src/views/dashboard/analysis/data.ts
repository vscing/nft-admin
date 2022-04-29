export interface GrowCardItem {
  icon: string;
  title: string;
  value: string;
  total: number;
  color: string;
  action: string;
  prefix: string;
}

export const growCardList: GrowCardItem[] = [
  {
    title: '当日新增',
    icon: 'visit-count|svg',
    value: 'userNum',
    total: 120000,
    color: 'green',
    prefix: '#',
    action: '天',
  },
  {
    title: '市场交易额',
    icon: 'total-sales|svg',
    value: 'orderPrice',
    total: 500000,
    color: 'blue',
    prefix: '$',
    action: '总',
  },
  {
    title: '充值金额',
    icon: 'total-sales|svg',
    value: 'putPrice',
    total: 120000,
    color: 'orange',
    prefix: '$',
    action: '总',
  },
  {
    title: '提现金额',
    icon: 'total-sales|svg',
    value: 'toPrice',
    total: 50000,
    color: 'purple',
    prefix: '$',
    action: '总',
  },
];
