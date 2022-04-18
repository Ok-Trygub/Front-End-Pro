'use strict';

const photos_app = (() => {

        const photosConfiguration = {
            photosContainer: '#photosContainer',
            databaseKey: 'AlbumId',
            API_URL: 'https://jsonplaceholder.typicode.com/photos?albumId='
        }

        const controller = new PhotosController(
            photosConfiguration,
            PhotosView,
            PhotosModel,
        )
        return controller;
    }
)();