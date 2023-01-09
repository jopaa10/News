import { useEffect, useState } from "react";
import { fetchAllStories } from "../api/StoriesApi";
import { useGlobalContext } from "../context";
import { SET_LOADING, SET_STORIES } from "../context/actions";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

export const GetStories = () => {
  const { state, dispatch } = useGlobalContext();
  console.log(state.hits);

  const fetchStories = async () => {
    dispatch({ type: SET_LOADING });

    const response = await fetchAllStories(state.query, state.page);
    const rdata = await response.json();
    dispatch({
      type: SET_STORIES,
      payload: { hits: rdata.hits, nbPages: rdata.nbPages },
    });
  };

  useEffect(() => {
    if (state.hits === [] && state.isLoading) return;
    fetchStories();
  }, []);
};
