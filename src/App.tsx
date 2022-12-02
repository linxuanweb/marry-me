import "./App.less";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";

import Test from "./modules/test/test";
import SignIn from "./modules/sign-in/SignIn";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <Test></Test> */}
                <SignIn></SignIn>
            </header>
        </div>
    );
}

export default App;
