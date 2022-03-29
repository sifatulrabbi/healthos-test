/** save jwt token to the localStorage
 * @param {string} token
 * @return {void}
 */
export function saveLocalUser(token) {
  localStorage.setItem("auth_user", token);
}
