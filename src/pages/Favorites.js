import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";


function FavoritesPage() {
    const FavoritesCtx = useContext(FavoritesContext);

    let content; 

    if (FavoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>;
    } else {
        content = <MeetupList meetups={FavoritesCtx.favorites}></MeetupList>;
    }

    return <section>
    <h1>My Favorites</h1>
    {content}
  </section>
}

export default FavoritesPage;