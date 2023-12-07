import { getFruits } from "@/lib/store/selectors";
import { actualFruitAllInfo } from "@/lib/store/slices/fruits";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-responsive-modal";
type Props = {
  open: boolean;
  clicked: () => void;
};
const ModalDetail: React.FC<Props> = ({ open, clicked }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { fruitSelected, fruitSelectedInfo } = useSelector(getFruits);
  const dispatch = useDispatch();
  useEffect(() => {
    setOpenModal(open);
    setLoading(true);
    if (Object.keys(fruitSelected).length > 0) {
      let config = {
        method: "get",
        url: `https://api.predic8.de` + fruitSelected.self_link,
      };
      axios(config)
        .then(function (response) {
          console.log("entro");
          dispatch(actualFruitAllInfo(response.data));
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
        });
    }
  }, [fruitSelected]);

  const ListStates = () => {
    return (
      <>
        <h5 className="mb-2 text-2xl font-bold  text-principal-170 mb-10">
          Information
        </h5>
        <div className="flex flex-col justify-center items-center mt-10 mb-10">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={`https://api.predic8.de${fruitSelectedInfo.image_link}`}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {fruitSelectedInfo.name}
              </div>
              <p className="text-gray-700 text-base">
                Price <b>{fruitSelectedInfo.price}</b>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const LoadingSpinner = () => {
    return (
      <>
        <div className="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <>
        <Modal
          open={open}
          onClose={clicked}
          center
          classNames={{
            overlay: "OverlayModal",
            modal: "ModalStyle",
          }}
        >
          {!loading ? <ListStates /> : <LoadingSpinner />}
        </Modal>
      </>
    </>
  );
};

export default ModalDetail;
