import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main className="container mx-auto md:grid pt-10 md:pt-10">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
