/** get stored jwt token from the localStorage
 * @returns {string | null}
 */
export function getLocalUser() {
  const token = localStorage.getItem("auth_user");
  return token ? token : null;
}
