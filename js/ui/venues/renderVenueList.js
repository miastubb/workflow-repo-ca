export function renderVenueList(container, venues) {
  if (!venues || venues.length === 0) {
    container.innerHTML = "<div class='text-center'>No venues found</div>";
    return;
  }

  const venueElements = venues.map((venue) => createVenueCard(venue));
  container.innerHTML = "";
  container.append(...venueElements);
}

const createVenueCard = (venue) => {
  const { media, id } = venue;

  const card = document.createElement("a");
  card.className = "bg-cover bg-center h-64 rounded-lg shadow-md";
  card.href = `/venue/?id=${id}`;

  const imageUrl = media?.[0]?.url || "https://placehold.co/400x400";
  card.style.backgroundImage = `url(${imageUrl})`;

  return card;
};
