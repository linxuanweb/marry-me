import './App.less'
import { Outlet, useLoaderData } from 'react-router-dom'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/nunito/300.css'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/500.css'
import '@fontsource/nunito/700.css'

function App() {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="App">
            <Outlet />
        </div>
    )
}

export default App
