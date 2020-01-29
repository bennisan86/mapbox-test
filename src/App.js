import React, {useState} from 'react';
import './App.css';
import ReactMapGL, { Marker, Popup, LinearInterpolator } from 'react-map-gl';
import * as parkData from './data/skateparks.json'
import { easeCubic } from 'd3-ease';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.5211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })
  
  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/bennisan86/ck5z4fzh61v6v1ilhbx39414i"
        onViewportChange={viewport => setViewport(viewport)}>
        {parkData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}>
              <button className="marker-btn" onClick={(e) => {
                e.preventDefault();
                setSelectedPark(park);
                setViewport({
                  latitude: park.geometry.coordinates[1],
                  longitude: park.geometry.coordinates[0],
                  width: viewport.width,
                  height: viewport.height,
                  zoom: 11,
                  transitionDuration: 1000,
                  transitionInterpolator: new LinearInterpolator(),
                  transitionEasing: easeCubic
                });

                }}>
                <img src='/skateboard.svg' alt='kateboard' />
              </button>
          </Marker>
        ))}
        {selectedPark && (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            captureScroll={true}
            onClose={() => {
              setSelectedPark(null);
            }}>
            <div className="innerBox">
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet quam a velit feugiat luctus. In et varius turpis. Pellentesque porttitor viverra massa, eget eleifend ipsum commodo vitae. Fusce quis erat felis. Sed non ullamcorper velit. Vestibulum tincidunt mi et quam fermentum rhoncus sit amet ut nibh. Proin feugiat enim enim. Integer venenatis vestibulum quam venenatis laoreet. Nullam aliquam blandit fringilla. Suspendisse maximus, nibh at vehicula aliquet, mauris odio condimentum orci, ac ultricies diam mi at leo. Ut congue quam at justo cursus efficitur. Sed facilisis felis non rhoncus ultrices. Nulla id suscipit elit. Proin vestibulum mollis porta. Pellentesque sodales et enim ac feugiat. Maecenas posuere dolor mauris, nec dapibus erat blandit et.

Nullam sed finibus massa. Phasellus tincidunt sodales neque, quis faucibus metus interdum a. Sed suscipit dui nec lobortis sollicitudin. In bibendum fringilla lectus quis porta. Cras eu semper dui. Integer ornare consequat finibus. Donec mattis velit quis metus molestie luctus. Nullam sagittis, ante vitae consequat mattis, dolor nisi blandit ante, eu vulputate tellus leo vitae risus. Cras vulputate justo congue felis aliquam, a viverra nunc lobortis. Suspendisse gravida congue quam ut bibendum. Sed non fermentum neque. Phasellus tortor nibh, egestas et euismod at, vestibulum at dolor. Vestibulum at metus vehicula mauris sodales eleifend.

Proin cursus fringilla erat sed vulputate. Fusce ante dui, accumsan vitae consequat ut, placerat nec felis. Cras tristique felis placerat diam hendrerit porttitor. Suspendisse sed dui sed mi ornare malesuada eu sed elit. Nam maximus velit a elit elementum pulvinar. Pellentesque posuere arcu blandit est commodo, ut commodo metus convallis. Morbi dui lacus, facilisis in leo vel, euismod faucibus dui. Pellentesque a mollis nisl, vitae varius tortor. Nam condimentum iaculis risus sed congue. Maecenas tincidunt ante et erat dictum, vestibulum cursus leo convallis. Aliquam aliquam luctus turpis id suscipit. Aenean ac sapien lorem. Nam lacinia lacus non est bibendum eleifend.

Morbi quis facilisis sem. Phasellus consequat ornare est. Integer rhoncus dui ligula. Curabitur ornare ante ut mi lacinia ultricies. Sed et tortor justo. Cras at scelerisque lorem, vel varius arcu. Nam porta bibendum massa, vitae dignissim ex tempus vitae. Nunc feugiat feugiat augue ut auctor. Curabitur eu mi quis nisl faucibus rutrum vitae quis ex. Integer in arcu auctor, viverra diam in, aliquet justo.

Mauris fringilla lorem in molestie aliquam. Fusce bibendum tincidunt faucibus. Nam sit amet malesuada libero. Nam id nunc orci. Pellentesque condimentum lectus et nisl cursus, ac tempus metus fringilla. Aliquam leo lacus, congue vel mi sed, tincidunt ullamcorper nunc. Sed sodales efficitur felis, eu aliquet sapien scelerisque id. Duis massa lacus, efficitur ut tempor et, dapibus ut diam. Ut id tempor augue. Morbi felis odio, suscipit eget massa sed, tincidunt rhoncus ligula. Sed et lorem ac justo tristique aliquet sit amet vel dolor. Mauris vel porta elit. Ut nibh nulla, condimentum et enim sit amet, venenatis varius nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet quam a velit feugiat luctus. In et varius turpis. Pellentesque porttitor viverra massa, eget eleifend ipsum commodo vitae. Fusce quis erat felis. Sed non ullamcorper velit. Vestibulum tincidunt mi et quam fermentum rhoncus sit amet ut nibh. Proin feugiat enim enim. Integer venenatis vestibulum quam venenatis laoreet. Nullam aliquam blandit fringilla. Suspendisse maximus, nibh at vehicula aliquet, mauris odio condimentum orci, ac ultricies diam mi at leo. Ut congue quam at justo cursus efficitur. Sed facilisis felis non rhoncus ultrices. Nulla id suscipit elit. Proin vestibulum mollis porta. Pellentesque sodales et enim ac feugiat. Maecenas posuere dolor mauris, nec dapibus erat blandit et.

Nullam sed finibus massa. Phasellus tincidunt sodales neque, quis faucibus metus interdum a. Sed suscipit dui nec lobortis sollicitudin. In bibendum fringilla lectus quis porta. Cras eu semper dui. Integer ornare consequat finibus. Donec mattis velit quis metus molestie luctus. Nullam sagittis, ante vitae consequat mattis, dolor nisi blandit ante, eu vulputate tellus leo vitae risus. Cras vulputate justo congue felis aliquam, a viverra nunc lobortis. Suspendisse gravida congue quam ut bibendum. Sed non fermentum neque. Phasellus tortor nibh, egestas et euismod at, vestibulum at dolor. Vestibulum at metus vehicula mauris sodales eleifend.

Proin cursus fringilla erat sed vulputate. Fusce ante dui, accumsan vitae consequat ut, placerat nec felis. Cras tristique felis placerat diam hendrerit porttitor. Suspendisse sed dui sed mi ornare malesuada eu sed elit. Nam maximus velit a elit elementum pulvinar. Pellentesque posuere arcu blandit est commodo, ut commodo metus convallis. Morbi dui lacus, facilisis in leo vel, euismod faucibus dui. Pellentesque a mollis nisl, vitae varius tortor. Nam condimentum iaculis risus sed congue. Maecenas tincidunt ante et erat dictum, vestibulum cursus leo convallis. Aliquam aliquam luctus turpis id suscipit. Aenean ac sapien lorem. Nam lacinia lacus non est bibendum eleifend.

Morbi quis facilisis sem. Phasellus consequat ornare est. Integer rhoncus dui ligula. Curabitur ornare ante ut mi lacinia ultricies. Sed et tortor justo. Cras at scelerisque lorem, vel varius arcu. Nam porta bibendum massa, vitae dignissim ex tempus vitae. Nunc feugiat feugiat augue ut auctor. Curabitur eu mi quis nisl faucibus rutrum vitae quis ex. Integer in arcu auctor, viverra diam in, aliquet justo.

Mauris fringilla lorem in molestie aliquam. Fusce bibendum tincidunt faucibus. Nam sit amet malesuada libero. Nam id nunc orci. Pellentesque condimentum lectus et nisl cursus, ac tempus metus fringilla. Aliquam leo lacus, congue vel mi sed, tincidunt ullamcorper nunc. Sed sodales efficitur felis, eu aliquet sapien scelerisque id. Duis massa lacus, efficitur ut tempor et, dapibus ut diam. Ut id tempor augue. Morbi felis odio, suscipit eget massa sed, tincidunt rhoncus ligula. Sed et lorem ac justo tristique aliquet sit amet vel dolor. Mauris vel porta elit. Ut nibh nulla, condimentum et enim sit amet, venenatis varius nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet quam a velit feugiat luctus. In et varius turpis. Pellentesque porttitor viverra massa, eget eleifend ipsum commodo vitae. Fusce quis erat felis. Sed non ullamcorper velit. Vestibulum tincidunt mi et quam fermentum rhoncus sit amet ut nibh. Proin feugiat enim enim. Integer venenatis vestibulum quam venenatis laoreet. Nullam aliquam blandit fringilla. Suspendisse maximus, nibh at vehicula aliquet, mauris odio condimentum orci, ac ultricies diam mi at leo. Ut congue quam at justo cursus efficitur. Sed facilisis felis non rhoncus ultrices. Nulla id suscipit elit. Proin vestibulum mollis porta. Pellentesque sodales et enim ac feugiat. Maecenas posuere dolor mauris, nec dapibus erat blandit et.

Nullam sed finibus massa. Phasellus tincidunt sodales neque, quis faucibus metus interdum a. Sed suscipit dui nec lobortis sollicitudin. In bibendum fringilla lectus quis porta. Cras eu semper dui. Integer ornare consequat finibus. Donec mattis velit quis metus molestie luctus. Nullam sagittis, ante vitae consequat mattis, dolor nisi blandit ante, eu vulputate tellus leo vitae risus. Cras vulputate justo congue felis aliquam, a viverra nunc lobortis. Suspendisse gravida congue quam ut bibendum. Sed non fermentum neque. Phasellus tortor nibh, egestas et euismod at, vestibulum at dolor. Vestibulum at metus vehicula mauris sodales eleifend.

Proin cursus fringilla erat sed vulputate. Fusce ante dui, accumsan vitae consequat ut, placerat nec felis. Cras tristique felis placerat diam hendrerit porttitor. Suspendisse sed dui sed mi ornare malesuada eu sed elit. Nam maximus velit a elit elementum pulvinar. Pellentesque posuere arcu blandit est commodo, ut commodo metus convallis. Morbi dui lacus, facilisis in leo vel, euismod faucibus dui. Pellentesque a mollis nisl, vitae varius tortor. Nam condimentum iaculis risus sed congue. Maecenas tincidunt ante et erat dictum, vestibulum cursus leo convallis. Aliquam aliquam luctus turpis id suscipit. Aenean ac sapien lorem. Nam lacinia lacus non est bibendum eleifend.

Morbi quis facilisis sem. Phasellus consequat ornare est. Integer rhoncus dui ligula. Curabitur ornare ante ut mi lacinia ultricies. Sed et tortor justo. Cras at scelerisque lorem, vel varius arcu. Nam porta bibendum massa, vitae dignissim ex tempus vitae. Nunc feugiat feugiat augue ut auctor. Curabitur eu mi quis nisl faucibus rutrum vitae quis ex. Integer in arcu auctor, viverra diam in, aliquet justo.

Mauris fringilla lorem in molestie aliquam. Fusce bibendum tincidunt faucibus. Nam sit amet malesuada libero. Nam id nunc orci. Pellentesque condimentum lectus et nisl cursus, ac tempus metus fringilla. Aliquam leo lacus, congue vel mi sed, tincidunt ullamcorper nunc. Sed sodales efficitur felis, eu aliquet sapien scelerisque id. Duis massa lacus, efficitur ut tempor et, dapibus ut diam. Ut id tempor augue. Morbi felis odio, suscipit eget massa sed, tincidunt rhoncus ligula. Sed et lorem ac justo tristique aliquet sit amet vel dolor. Mauris vel porta elit. Ut nibh nulla, condimentum et enim sit amet, venenatis varius nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet quam a velit feugiat luctus. In et varius turpis. Pellentesque porttitor viverra massa, eget eleifend ipsum commodo vitae. Fusce quis erat felis. Sed non ullamcorper velit. Vestibulum tincidunt mi et quam fermentum rhoncus sit amet ut nibh. Proin feugiat enim enim. Integer venenatis vestibulum quam venenatis laoreet. Nullam aliquam blandit fringilla. Suspendisse maximus, nibh at vehicula aliquet, mauris odio condimentum orci, ac ultricies diam mi at leo. Ut congue quam at justo cursus efficitur. Sed facilisis felis non rhoncus ultrices. Nulla id suscipit elit. Proin vestibulum mollis porta. Pellentesque sodales et enim ac feugiat. Maecenas posuere dolor mauris, nec dapibus erat blandit et.

Nullam sed finibus massa. Phasellus tincidunt sodales neque, quis faucibus metus interdum a. Sed suscipit dui nec lobortis sollicitudin. In bibendum fringilla lectus quis porta. Cras eu semper dui. Integer ornare consequat finibus. Donec mattis velit quis metus molestie luctus. Nullam sagittis, ante vitae consequat mattis, dolor nisi blandit ante, eu vulputate tellus leo vitae risus. Cras vulputate justo congue felis aliquam, a viverra nunc lobortis. Suspendisse gravida congue quam ut bibendum. Sed non fermentum neque. Phasellus tortor nibh, egestas et euismod at, vestibulum at dolor. Vestibulum at metus vehicula mauris sodales eleifend.

Proin cursus fringilla erat sed vulputate. Fusce ante dui, accumsan vitae consequat ut, placerat nec felis. Cras tristique felis placerat diam hendrerit porttitor. Suspendisse sed dui sed mi ornare malesuada eu sed elit. Nam maximus velit a elit elementum pulvinar. Pellentesque posuere arcu blandit est commodo, ut commodo metus convallis. Morbi dui lacus, facilisis in leo vel, euismod faucibus dui. Pellentesque a mollis nisl, vitae varius tortor. Nam condimentum iaculis risus sed congue. Maecenas tincidunt ante et erat dictum, vestibulum cursus leo convallis. Aliquam aliquam luctus turpis id suscipit. Aenean ac sapien lorem. Nam lacinia lacus non est bibendum eleifend.

Morbi quis facilisis sem. Phasellus consequat ornare est. Integer rhoncus dui ligula. Curabitur ornare ante ut mi lacinia ultricies. Sed et tortor justo. Cras at scelerisque lorem, vel varius arcu. Nam porta bibendum massa, vitae dignissim ex tempus vitae. Nunc feugiat feugiat augue ut auctor. Curabitur eu mi quis nisl faucibus rutrum vitae quis ex. Integer in arcu auctor, viverra diam in, aliquet justo.

Mauris fringilla lorem in molestie aliquam. Fusce bibendum tincidunt faucibus. Nam sit amet malesuada libero. Nam id nunc orci. Pellentesque condimentum lectus et nisl cursus, ac tempus metus fringilla. Aliquam leo lacus, congue vel mi sed, tincidunt ullamcorper nunc. Sed sodales efficitur felis, eu aliquet sapien scelerisque id. Duis massa lacus, efficitur ut tempor et, dapibus ut diam. Ut id tempor augue. Morbi felis odio, suscipit eget massa sed, tincidunt rhoncus ligula. Sed et lorem ac justo tristique aliquet sit amet vel dolor. Mauris vel porta elit. Ut nibh nulla, condimentum et enim sit amet, venenatis varius nisi.</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}

