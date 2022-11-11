import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main className="container mx-auto md:grid mt-10">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
