/**
 * Fetches a list of users from the randomuser.me API.
 * @param {number} page - The page number to fetch.
 * @param {number} results - The number of results per page.
 * @returns {Promise<Object>} - The API response.
 */
export async function fetchUsers(page = 1, results = 15) {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?page=${page}&results=${results}`,
    )
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}
