export async function fetchCountries() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name",
    );
    const responseBody = await response.json();

    return responseBody;
  } catch (error) {
    console.error("Error fetching countries: ", error);
    return [];
  }
}
