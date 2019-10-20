/**
 * determine if the profile button should be shown
 *
 * @param {string} env process.env.NODE_ENV
 * @param {object} user auth user context
 */
function showProfileButton(env, user) {
  return env!=='production' || !!user;
}

export default showProfileButton;
