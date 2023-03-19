
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Courses } from './pages/Courses';
import { Lesson } from './pages/Lesson';
import { Navigate } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Courses/> }/>
    <Route path="course/:courseId" element={<Lesson/>}/>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
