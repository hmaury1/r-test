import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import useHttp from "../hooks/use-http";

function AllMeetupsPage() {
  const { isLoading, error, sendRequest } = useHttp();
  const [ loadMeetups, setLoadedMeetups ] = useState([]);

  useEffect(() => {
    sendRequest({
      url: 'https://react-course-ace89-default-rtdb.firebaseio.com/meetups.json'
    }, traformData)
    return () => {
      // this arrow function is like willUnmount
    }
  }, []); // empty deps is like DidMount

  const traformData = (data) => {
    const meetups = [];
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        meetups.push({
          id: key,
          ...data[key]
        });
      }
    }
    setLoadedMeetups(meetups)
  }

  if (error) {
    console.error(error)
    return <section>There is an error loading the data...</section>;
  } 

  if (isLoading) {
    return <section>Loading...</section>;
  } 

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadMeetups}></MeetupList>
    </section>
  );
}

export default AllMeetupsPage;
