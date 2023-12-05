import "./App.css";
import Body from "./Components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Components/HomePage";
import BrowsePage from "./Components/BrowsePage";
import { Provider } from "react-redux";
import appstore from "./Components/ReduxFunctions/appstore";
import GamePage from "./Components/GamePage";

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
