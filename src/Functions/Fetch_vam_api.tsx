export function fetch_VAM_API() {
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.vam.ac.uk/v2/objects/search?q="england"'
      );
      if (!response.ok) {
        throw new Error("API call response error");
      }
      const data = await response.json();
      console.log(data.records);
      //TODO: Translate these records into ArtObjects
      return data.records;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}
