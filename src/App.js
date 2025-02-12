import { Routes, Route } from 'react-router-dom'
import { HistoryRouter, history } from './utils/history'


// 导入必要组件
import { lazy, Suspense } from 'react'
// 按需导入路由组件
const Login = lazy(() => import('./pages/Login'))
const Layout = lazy(() => import('./pages/Layout'))
function App () {
  return (
    <HistoryRouter history={history}>
      <Suspense
        fallback={
          <div
            style={{
              textAlign: 'center',
              marginTop: 200
            }}
          >
            loading...
          </div>
        }
      >
		 <Routes>
            <Route path="/" element={<Layout/>}>
           		{/* 配置嵌套路由*/}
				{/* 二级路由默认页面 */}
			    {/*<Route index element={<组件1/>} /> */}
			    {/*<Route path="article" element={<Article />} /> */}
			</Route>
            <Route path="/login" element={<Login/>}/>
        </Routes>
      </Suspense>
    </HistoryRouter>
  )
}

export default App
