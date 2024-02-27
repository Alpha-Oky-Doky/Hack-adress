"use client";

import React, { FormEvent } from "react";
// initialize Mapbox API with the access token
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxleGFuZHJlZnlsIiwiYSI6ImNsdDAydWtraDB4eDgyam8yczhpd2o1cGYifQ.x2xuKW0u6wz1jXcNTJnllg";

const Inputs = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // display from data
    console.log(formData.get("address"));
    console.log(formData.get("box"));
    // request mapxbox api using address and access token
    let urlToRequest = `https://api.mapbox.com/geocoding/v5/mapbox.places/${formData.get(
      "address"
    )}.json?access_token=pk.eyJ1IjoiYWxleGFuZHJlZnlsIiwiYSI6ImNsdDAydWtraDB4eDgyam8yczhpd2o1cGYifQ.x2xuKW0u6wz1jXcNTJnllg`;
    if (formData.get("box") != null) {
      urlToRequest = urlToRequest + `&limit=${formData.get("box")}`;
    }
    const response = await fetch(urlToRequest);
    const data = await response.json();
    // display the data
    console.log(data);
    // fill result div with the data
    let htmlToDisplay = `<h1 class="text-2xl font-bold">Results:</h1>`;
    const result = document.getElementById("result");
    data.features.forEach((element: any) => {
      htmlToDisplay = htmlToDisplay + `<p>-  ${element.place_name}</p>`;
    });
    htmlToDisplay = htmlToDisplay + `<div id="map" class="h-96 w-full"></div>`;
    result.innerHTML = htmlToDisplay;

    // insert the map with the first result
    const coordinates = data.features[0].center;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: coordinates,
      zoom: 12,
    });
    // set the marker in the center of the map
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  }

  return (
    <div className="flex flex-row w-full">
      {/* Left pannel */}
      <div className="w-1/2 p-5">
        <form action="" className="flex flex-col gap-5" onSubmit={onSubmit}>
          <label htmlFor="address">Enter the target address:</label>
          <input
            type="text"
            placeholder="address ( mandatory )"
            name="address"
          />
          <label htmlFor="nearby">
            Enter the nearby elements (comma separated):
          </label>
          <input
            type="text"
            placeholder="Nearby elements (Optional)"
            name="nearby"
          />
          {/* List type of place  */}
          <label htmlFor="place">
            Select a type of accommodation: (Optional)
          </label>
          <select name="place">
            <option value="appartement">Appartement</option>
            <option value="house">House</option>
            <option value="school">Locality</option>
          </select>
          <div className="flex">
            <label htmlFor="box">
              Tick this box if you want 10 results instead of 5:
            </label>
            <input type="checkbox" name="box" value="10" className="ml-5" />
          </div>

          <button type="submit" className="w-fit">
            Submit
          </button>
        </form>
      </div>
      {/* Right Pannel */}
      <div className="w-1/2 p-5 border-4 border-r-0" id="result"></div>
    </div>
  );
};

export default Inputs;
