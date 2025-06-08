import api from "@/Config/api";
import * as types from "./ActionTypes";

// Get user wallet
export const getUserWallet = (jwt) => async (dispatch) => {
  dispatch({ type: types.GET_USER_WALLET_REQUEST });

  try {
    const response = await api.get("/api/wallet", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: types.GET_USER_WALLET_SUCCESS,
      payload: response.data,
    });
    console.log("user wallet", response.data);
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.GET_USER_WALLET_FAILURE,
      error: error.message,
    });
  }
};

// Get wallet transactions
export const getWalletTransactions = ({ jwt }) => async (dispatch) => {
  dispatch({ type: types.GET_WALLET_TRANSACTION_REQUEST });

  try {
    const response = await api.get("/api/wallet/transactions", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: types.GET_WALLET_TRANSACTIONS_SUCCESS,
      payload: response.data,
    });

    console.log("wallet transactions", response.data);
  } catch (error) {
    console.error("error", error);
    dispatch({
      type: types.GET_WALLET_TRANSACTION_FAILURE,
      error: error.message,
    });
  }
};

// Deposit money into wallet
export const depositMoney = ({ jwt, orderId, paymentId, navigate }) => async (dispatch) => {
  console.log("deposit Money -----  Action")
  dispatch({ type: types.DEPOSIT_MONEY_REQUEST });

  console.log("Deposit Money  ---------" , orderId)
  try {
    const response = await api.put(
      "/api/wallet/deposit",
      null,
      {
        params: {
          order_id: orderId,
          payment_id: paymentId,
        },
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    dispatch({
      type: types.DEPOSIT_MONEY_SUCCESS,
      payload: response.data,
    });

    console.log("Deposit response:", response.data);
    navigate("/wallet");
    
  } 
  catch (error) {
    console.error(error);
    dispatch({
      type: types.DEPOSIT_MONEY_FAILURE,
      error: error.message,
    });
  }
};

// Initiate payment (redirect to payment gateway)
export const paymentHandler = ({ jwt, amount, paymentMethod }) => async (dispatch) => {

  console.log("Payment Handler");
  dispatch({ type: types.DEPOSIT_MONEY_REQUEST });

  try {

    const response = await api.post(
      `/api/payment/${paymentMethod}/amount/${amount}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    // Redirect to payment page
    console.log("Payment URL:", response.data.paymentUrl);
    window.location.href = response.data.paymentUrl;

    // Optional: dispatch success if needed
    // dispatch({
    //   type: types.DEPOSIT_MONEY_SUCCESS,
    //   payload: response.data,
    // });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.DEPOSIT_MONEY_FAILURE,
      error: error.message,
    });
  }
};

// Transfer money to another wallet
export const transferMoney = ({ jwt, walletId, reqData }) => async (dispatch) => {
  dispatch({ type: types.TRANSFER_MONEY_REQUEST });

  try {
    const response = await api.put(
      `/api/wallet/${walletId}/transfer`,
      reqData,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    dispatch({
      type: types.TRANSFER_MONEY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.TRANSFER_MONEY_FAILURE,
      error: error.message,
    });
  }
};