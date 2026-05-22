import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom"; // Tambahkan Navigate

// Asset imports
import "./assets/tailwind.css";

// Component & Page imports
import Loading from "./components/Loading";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Employee = React.lazy(() => import("./pages/Employee"));
const Products = React.lazy(() => import("./pages/Products"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const NotFound = React.lazy(() => import("./pages/ErrorPage"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

// --- 1. KOMPONEN PROTEKSI ROUTE ---
// Komponen ini mengecek apakah ada status "isLoggedIn" di localStorage
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  if (!isLoggedIn) {
    // Jika belum login, paksa ke halaman login
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* --- 2. ROUTE TERPROTEKSI (Main Routes) --- */}
        {/* Dibungkus dengan ProtectedRoute agar tidak bisa ditembus tanpa login */}
        <Route 
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/product" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          
          {/* Error Routes di dalam Dashboard */}
          <Route path="/error-400" element={<NotFound errorCode="400" errorDescription="Bad Request." />} />
          <Route path="/error-401" element={<NotFound errorCode="401" errorDescription="Unauthorized." />} />
          <Route path="/error-403" element={<NotFound errorCode="403" errorDescription="Forbidden." />} />
        </Route>

        {/* --- 3. AUTH ROUTES (Tanpa Sidebar) --- */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Catch All 404 */}
        <Route path="*" element={<NotFound errorCode="404" errorDescription="Page not found" />} />
      </Routes>
    </Suspense>
  );
}

export default App;