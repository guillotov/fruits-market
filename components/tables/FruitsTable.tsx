import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../../components/layouts/Mainlayout";
import DataTable from "react-data-table-component";

import FilterComponent from "./FilterComponent";
import "react-responsive-modal/styles.css";
import ModalDetail from "../modals/ModalDetail";
import { actualFruit, getAllFruits } from "@/lib/store/slices/fruits";
import { getFruits } from "@/lib/store/selectors";

const FruitsTable = () => {
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [modal, setModal] = useState(false);
  const { fruitsData } = useSelector(getFruits);
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Nombre",
      selector: (row) => row.name,
    },
    {
      cell: (row) => (
        <button
          onClick={() => handleButtonClick(row)}
          className="bg-principal-10 hover:bg-principal-20 text-white font-bold py-2 px-4 rounded"
        >
          Ver más
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const handleButtonClick = (row) => {
    console.log(row)
    dispatch(actualFruit(row));
    setModal(true);
  };
  useEffect(() => {
    var config = {
      method: "get",
      url: "https://api.predic8.de/shop/v2/products?start=1&limit=20",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        dispatch(getAllFruits(response.data.products));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const filteredItems = fruitsData.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <MainLayout>
      <>
        <ModalDetail
          open={modal}
          clicked={() => {
            setModal(false);
          }}
        />
        <DataTable
          columns={columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          persistTableHead
        />
      </>
    </MainLayout>
  );
};

export default FruitsTable;
