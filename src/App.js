import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";



// import MovieManagement from "./modules/MovieManagement/MovieManagement";

// import Home from "./modules/Home/Home";./modules/ShowtimestManagement/ShowtimesManagement
// import MovieDetails from "./modules/MovieDetails/MovieDetails";
// import Signin from "./modules/Auth/Signin/Signin";
// import Signup from "./modules/Auth/Signup/Signup";
// import Booking from "./modules/Booking/Booking";

const Home = lazy(() => import("./modules/Home/Home"));
const MovieDetails = lazy(() => import("./modules/MovieDetails/MovieDetails"));
const Booking = lazy(() => import("./modules/Booking/Booking"));
const Signin = lazy(() => import("./modules/Auth/Signin/Signin"));
const Signup = lazy(() => import("./modules/Auth/Signup/Signup"));
const MovieManagement = lazy(() => import("./modules/MovieManagement/MovieManagement"));
const UserManagement = lazy(() => import("./modules/UserManagement/UserManagement"));
const ShowtimesManagement = lazy(() => import("./modules/ShowtimestManagement/ShowtimesManagement"));
const EditFilm = lazy(() => import("./modules/MovieManagement/EditFilm/EditFilm"));
const UserForm = lazy(() => import("./modules/UserManagement/UserForm/UserForm"));
const MovieForm = lazy(() => import("./modules/MovieManagement/MovieForm/MovieForm"));


function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route
              path="/booking/:maLichChieu"
              element={
                <ProtectedRoute>
                  <Booking />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="/" element={<AuthLayout />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>


          
          <Route path="/admin" 
            element={ <AdminRoute> <AdminLayout/></AdminRoute>}>
               <Route path="users" element={<UserManagement/>} />
            <Route path="users/userform" element={<UserForm/>}/>
         <Route path="movies" element={<MovieManagement/>}/>
        <Route path="movies/editfilm/:id" element={<EditFilm/>}/>
        <Route path="movies/addfilm" element={<MovieForm/>}/>
            <Route path="showtimes/:id" element={<ShowtimesManagement/>}/>
          </Route>
         
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
