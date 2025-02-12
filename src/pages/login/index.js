import { Button } from 'antd'
import { useStore } from '@/store'
const Login = () => {
  //解构出useStore模块
  const { useStore} = useStore()
  //调用useStore模块的addUse方法
  useStore.addUse ()
  return (...)
}
export default Login