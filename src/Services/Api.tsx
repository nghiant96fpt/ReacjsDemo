import axios from "axios";
import Constants from "../Utils/Constants";

interface AxiosParams {
  path: string;
  params?: any;
  body?: any;
  method?: "GET" | "POST" | "DELETE";
}

const ApiRequest = async (props: AxiosParams) => {
  try {
    const { path, params, body, method = "GET" } = props;

    const result = await axios({
      url: path,
      method: method,
      baseURL: Constants.BASE_URL,
      params: params,
      data: body,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "lEHeaJLm_TKtI1bU",
      },
    });

    return result.data;
  } catch (e) {
    return e;
  }
};

export default ApiRequest;
