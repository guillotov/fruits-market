import React from "react";
import FruitsTable from "../../components/tables/FruitsTable";
import { MainLayout } from "../../components/layouts/Mainlayout";
import Navbar from "../../components/navigation/Navbar";

const Dashboard = () => {
  return (
    <MainLayout>
      <Navbar/>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="block rounded-lg bg-white p-6 shadow-lg w-3/6">
          <h5 className="mb-2 text-2xl font-bold  text-principal-10">
            Fruits List
          </h5>
          <FruitsTable />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
