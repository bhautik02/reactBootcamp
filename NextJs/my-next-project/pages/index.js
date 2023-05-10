import { MongoClient } from "mongodb";
import MeetupList from "./../components/meetups/MeetupList";

export default function Home(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://bhautik02:12345@nasacluster.nv87djh.mongodb.net/meetUp?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetup = await meetupCollection.find().toArray();
  console.log(meetup);

  return {
    props: {
      meetups: meetup.map((value) => {
        return {
          title: value.title,
          image: value.image,
          address: value.address,
          id: value._id.toString(),
        };
      }),
    },
    revalidate: 1,
  };
}
