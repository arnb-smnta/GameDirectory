import "./App.css";
import Body from "./Components/Body";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import HomePage from "./Components/HomePage";
import BrowsePage from "./Components/BrowsePage";
import { Provider } from "react-redux";
import appstore from "./Components/ReduxFunctions/appstore";
import GamePage from "./Components/GamePage";
import GenrePage from "./Components/GenrePage";
import Cart from "./Components/Cart";
import BuyPage from "./Components/BuyPage";

function App() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/browse",
          element: <BrowsePage />,
        },
        { path: "/game", element: <GamePage /> },
        { path: "/genre", element: <GenrePage /> },
        { path: "/cart", element: <Cart /> },
        { path: "/buy", element: <BuyPage /> },
      ],
    },
  ]);

  return (
    <Provider store={appstore}>
      <>
        <RouterProvider router={approuter} />
      </>
    </Provider>
  );
}

export default App;
