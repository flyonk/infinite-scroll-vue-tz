/**
 * Fetches a list of users from the randomuser.me API
 * @param {number} page - The page number to fetch
 * @param {number} results - The number of results per page
 * @returns {Promise<Object>} - The API response
 */
export async function fetchUsers(page = 1, results = 15) {
  const response = await fetch(
    `https://randomuser.me/api/?page=${page}&results=${results}`,
  )
  const data = await response.json()
  return data
}
