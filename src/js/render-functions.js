export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images
    .map(
      image => `
      <a href="${image.largeImageURL}" class="image-card">
        <img src="${image.webformatURL}" alt="${image.tags}" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>: ${image.likes}
          </p>
          <p class="info-item">
            <b>Views</b>: ${image.views}
          </p>
          <p class="info-item">
            <b>Comments</b>: ${image.comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>: ${image.downloads}
          </p>
        </div>
      </a>
    `
    )
    .join('');
}

export function showLoader() {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  loader.innerHTML =
    '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
  document.body.appendChild(loader);
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}
