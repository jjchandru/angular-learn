import { Movie } from './movie/model/movie';
import { Genre } from './movie/model/genre';
import { MpaaRating } from './movie/model/mpaa-rating';

export let genres: Genre[] = [
    { id: 1, name: "Action" },
    { id: 2, name: "Adventure" },
    { id: 3, name: "Drama" },
    { id: 4, name: "Comedy" },
    { id: 5, name: "Horror" },
    { id: 6, name: "Thriller" }
];

export let mpaaRatings: MpaaRating[] = [
    { id: 1, name: "G" },
    { id: 1, name: "PG-13" },
    { id: 1, name: "PG-18" },
    { id: 1, name: "R" },
    { id: 1, name: "NC-17" },
];

export let movies : Movie[] = [
    {
        id: 1,
        title: "Joker",
        genres: [genres[1], genres[5]],
        releaseDate: new Date(2019, 7, 31),
        mpaaRating: mpaaRatings[1],
        rating: 8.5,
        duration: 122,
        bookingsOpen: true,
        budget: 70000000
    },
    {
        id: 2,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        genres: [genres[0], genres[1]],
        releaseDate: new Date(2001, 11, 19),
        mpaaRating: mpaaRatings[1],
        rating: 8.8,
        duration: 178,
        bookingsOpen: true,
        budget: 887800000
    },
    {
        id: 3,
        title: "Rocketman",
        genres: [genres[2]],
        releaseDate: new Date(2019, 4, 16),
        mpaaRating: mpaaRatings[3],
        rating: 7.3,
        duration: 121,
        bookingsOpen: true,
        budget: 40000000
    },
    {
        id: 4,
        title: "Pet Sematary",
        genres: [genres[4]],
        releaseDate: new Date(2019, 2, 16),
        mpaaRating: mpaaRatings[3],
        rating: 5.7,
        duration: 101,
        bookingsOpen: true,
        budget: 21000000
    },
    {
        id: 5,
        title: "Parasite",
        genres: [genres[2], genres[3]],
        releaseDate: new Date(2019, 4, 21),
        mpaaRating: mpaaRatings[3],
        rating: 8.6,
        duration: 132,
        bookingsOpen: true,
        budget: 11400000
    },
    {
        id: 6,
        title: "Ford v Ferrari",
        genres: [genres[0], genres[2]],
        releaseDate: new Date(2019, 7, 30),
        mpaaRating: mpaaRatings[1],
        rating: 8.1,
        duration: 152,
        bookingsOpen: true,
        budget: 97600000
    },
    {
        id: 7,
        title: "Star Wars: Episode IX - The Rise of Skywalker",
        genres: [genres[0], genres[1]],
        releaseDate: new Date(2019, 11, 16),
        mpaaRating: mpaaRatings[1],
        rating: 6.7,
        duration: 142,
        bookingsOpen: true,
        budget: 275000000
    },
    {
        id: 8,
        title: "Godzilla: King of the Monsters",
        genres: [genres[0], genres[1]],
        releaseDate: new Date(2019, 4, 13),
        mpaaRating: mpaaRatings[1],
        rating: 6.1,
        duration: 132,
        bookingsOpen: true,
        budget: 200000000
    }
];

