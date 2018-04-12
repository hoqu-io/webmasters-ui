import { metamask } from 'resources/images'

export default () => ({
  metamask: {
    background: `url(${metamask}) no-repeat center center;`,
    backgroundSize: 'contain'
  },
  root: {
    margin: '16px 0',
    transition: `all 300ms`
  },
  editable: {
    margin: '24px 0 !important'
  },
  actions: {
    justifyContent: 'flex-end'
  }
})
