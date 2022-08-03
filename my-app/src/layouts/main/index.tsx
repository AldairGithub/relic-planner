import { useState, useEffect } from "react"
import { fetchData } from "../../services/api"
import { getListOfItems } from "../../utils/list"
import { Header } from "../header"

export const Main = () => {

  function initialize() {
    fetchData()
      .then(data => {
        localStorage.setItem("data", JSON.stringify(data));
        getListOfItems(data)
      })
  }

  useEffect(() => {

    // async/await functions work in one direction, we can only work
    // with data from the api while insde our callback(.then({}))
    // we need to create a function that works with this data
    let data = JSON.parse(localStorage.getItem("data") || "[]")
    console.log("from storage: ");
    
    console.log(data);
    getListOfItems(data)
    
    if (data == "[]") {
      console.log("initializing...");
      initialize()
    } 

  }, [])

  return (
    <>
      <Header />
      {/* here my pages will exists */}
      {/* need to include a nav bar for opening and closing states */}
    </>
  )
}