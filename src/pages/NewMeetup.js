import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom';
import useHttp from '../hooks/use-http';

function NewMeetupPage() {
  const { isLoading, error, sendRequest } = useHttp();
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    sendRequest({
        url: 'https://react-course-ace89-default-rtdb.firebaseio.com/meetups.json',
        method: 'POST',
        body: meetupData,
        headers: {
          'Content-Type': 'application/json',
        },
    }, () => {
        navigate('/');
    });   
  }

  if (isLoading) {
    return <section>Saving...</section>;
  }

  if (error) {
    console.error(error);
    return <section>There is an error saving the data...</section>;
  }

  return (
    <div>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupPage;
