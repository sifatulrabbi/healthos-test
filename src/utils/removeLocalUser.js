/** remove locally stored jwt token
 * @returns {void}
 */
export function removeLocalUser() {
  localStorage.removeItem("auth_user");
}
