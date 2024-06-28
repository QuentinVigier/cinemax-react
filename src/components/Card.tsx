interface Card {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
}

interface Movies {
    movies: Card[];
}

export default function Card({ movies }: Movies) {
    return(
        <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {movies.map((card) => (
            <div className="p-3 transition-shadow duration-200 ease-in-out border rounded-lg shadow-md bg-slate-50 hover:shadow-lg" key={card.imdbID}>
            <div className=""> 
                <img 
                src={
                    card.Poster ? card.Poster : `https://placehold.co/330x430/gray/white?text=${card.Title}`
                } 
                className="rounded-lg" 
                alt={card.Title} />
                <div className="flex flex-col justify-between p-2">
                <h5 className="text-xl font-light">{card.Title}</h5>
                <p className="">{card.Year}</p>
                </div>
            </div>
        </div>
        ))
    }
    </section>    
    )
};