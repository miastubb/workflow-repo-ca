import { getVenues } from "../../api/venues/getVenues.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderVenueList } from "../../ui/venues/renderVenueList.js";

export async function displayVenueList() {
  const container = document.querySelector("#venue-container");

  if (!container) {
    throw new Error("Could not find #venue-container on the feed page");
  }

  try {
    const venues = await getVenues();
    renderVenueList(container, venues);
  } catch (error) {
    displayMessage(container, "error", error.message);
  }
}
