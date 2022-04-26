import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

function YMap({ addresses }) {
    const mapData = {
        center: [addresses[0].geo.lat, addresses[0].geo.lng],
        zoom: 1,
    };
    return (
        <div className="w-full h-full h-96 pt-8 pl-16">
            <YMaps>
                <Map
                    style={{ width: "60%", height: "100%" }}
                    defaultState={mapData}>
                    {addresses.map(address =>
                        <Placemark
                            key={address.id}
                            geometry={[address.geo.lat, address.geo.lng]}
                            properties={{
                                balloonContentBody:
                                    ` <div> <div>City: ${address.city}</div>
                                <div> Street: ${address.street}</div>
                                <div> Suite: ${address.suite}</div>
                                <div> Zipcode: ${address.zipcode}</div>
                                <div> Lat: ${address.geo.lat}, Lng: ${address.geo.lng}</div>
                                    </div>`
                            }}
                            modules={["geoObject.addon.balloon"]} />)}
                </Map>
            </YMaps>
        </div>
    )
};

export default YMap;