export function renderVenue(container, venue) {
  container.innerHTML = "";

  const img = document.createElement("img");
  img.src = venue.media?.[0]?.url || "";
  img.alt = venue.media?.[0]?.alt || venue.name;

  container.append(img);
}
