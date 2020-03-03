/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const mineComponentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Components',
  meta: {
    title: '复用组件',
    icon: 'chart'
  },
  children: [
    {
      path: 'step',
      component: () => import('@/views/mine-components/step'),
      name: 'Step',
      meta: { title: '复用步骤条', noCache: true }
    }
  ]
}

export default mineComponentsRouter
