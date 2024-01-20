export const url = `http://localhost:3000`;
export async function fetchMeals() {
  try {
    const response = await fetch(`${url}/meals`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
