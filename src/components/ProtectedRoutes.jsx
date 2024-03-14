import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { hideLoading } from "../redux/features/alertSlice";
import { setUser } from "../redux/features/userSlice";
import { setStoreData } from "../redux/features/storeSlice";
import { setProductStoreData } from "../redux/features/orderProductSlice";
import { setAllStoreData } from "../redux/features/overallorderslice";
import { BASE_URL } from "../refer";

const ProtectedRoutes = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      let res = await fetch(`${BASE_URL}/auth/getUserData`, {
        method: "post",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      res = await res.json();
      dispatch(hideLoading());
      // console.log(res);

      if (res.success) {
        dispatch(setUser(res.data));
      } else {
        <Navigate to="/login" />;
        localStorage.clear();
      }
    } catch (error) {
      dispatch(hideLoading());

      localStorage.clear();
    }
  };
  const getAllData = async () => {
    try {
      const token = localStorage.getItem("token");
      let res = await fetch(`${BASE_URL}/auth/getallproduct`, {
        method: "post",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      res = await res.json();
      dispatch(setStoreData(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  const getAllOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      let res = await fetch(`${BASE_URL}/auth/getallorders`, {
        method: "post",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      res = await res.json();
      dispatch(setAllStoreData(res.data));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllcustomerOrder = async () => {
    try {
      const token = localStorage.getItem("token");
      let res = await fetch(`${BASE_URL}/auth/getallcustomerorder`, {
        method: "post",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      res = await res.json();
      dispatch(setProductStoreData(res.data));
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line
    if (!user) {
      getUser(); // eslint-disable-next-line
    }
    getAllData(); // eslint-disable-next-line
    getAllcustomerOrder(); // eslint-disable-next-line
    getAllOrders(); // eslint-disable-next-line

    // eslint-disable-next-line
  }, [user]);
  if (localStorage.getItem("token")) return children;
  else return <Navigate to="/login" />;
};

export default ProtectedRoutes;
