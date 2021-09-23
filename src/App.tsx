import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";

require('dotenv').config();

const App = () => {
  return (
    <div className="container">
        <Provider store={store}>
          <AppRouter/>
        </Provider>
    </div>
  )
}

export default App;
