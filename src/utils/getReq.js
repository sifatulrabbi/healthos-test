import axios from "axios";

/** get request function
 * @param {string} url
 * @returns {Promise<any>}
 */
export async function getReq(url) {
  try {
    const res = await axios.get(url);
    if (res.status !== 200) throw new Error("Unable to get");
    if (!res.data) throw new Error("No data found");

    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
