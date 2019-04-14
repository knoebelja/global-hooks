import axios from "axios";

function makeFetcher(method, setValue) {
  return async function() {
    try {
      const res = await axios({ method, url: `https://httpbin.org/${method}` });
      setValue({ status: res.status, url: res.data.url });
    } catch (err) {
      console.error(err);
    }
  };
}

export default makeFetcher;
