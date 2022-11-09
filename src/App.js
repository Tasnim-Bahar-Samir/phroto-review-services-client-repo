
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className="App max-w-7xl mx-auto px-10 xl:px-5">
      <Toaster/>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
