import { httpsCallable } from "firebase/functions";
import { createContext, useContext, useEffect, useState } from "react";
import { functions } from "../firebase.config";
const useListingProvider = createContext();

export function ListingsProvider({ children }) {
  const [listings, setListings] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await fetch(
  //         //   `${process.env.REACT_APP_WORLD_NEWS_API_URL}search-news?api-key=${process.env.REACT_APP_WORLD_NEWS_API_KEY}`
  //         //   "https://api.worldnewsapi.com/search-news?source-countries=ca&api-key=6dda304f9a7e42baae6e45c557631f3e"
  //         "https://api.remax.ca/api/v1/listings/distance?size=10&from=0&distance.centreLat=50.4079569&distance.centreLon=-104.6140568&distance.maxDistanceInMetre=10000&distance.sortByProximity=asc&features.priceListMin=379905&features.priceListMax=419895&features.listingTypeIds=100"
  //       );
  //       if (data.ok) {
  //         console.log(data);
  //         const listings = await data.json();
  //         console.log(listings);

  //         setListings(listings);
  //       }
  //     } catch (error) {}
  //   })();
  // }, []);

  useEffect(() => {
    console.log("This is where we are");
    const getListingFromApi = httpsCallable(functions, "getListingFromApi");
    getListingFromApi().then((result) => {
      console.log("Hello there");
      console.log(result);
    });
  }, []);
  return (
    <useListingProvider.Provider value={listings}>
      {children}
    </useListingProvider.Provider>
  );
}

export function useListing() {
  return useContext(useListingProvider);
}
