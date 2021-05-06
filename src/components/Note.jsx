const Note = ( props ) =>
{
    const { isAddNew, onAddNote, title, body, lastModified, openModal, onClick } = props;

    if ( isAddNew )
    {
        return (
            <article className="card card--new" onClick={ onClick }>
                <span className="icon--add icon--lg"></span>
            </article>
        );
    } else
    {
        return (
            <article className="card" onClick={ openModal }>
                <h1>{ title }</h1>
                {/* <h2>{ new Date( lastModified ).toLocaleDateString( "hr", {
                    hour: "2-digit",
                    minute: "2-digit"
                } ) }</h2> */}
                <p>{ body && body.substring( 0, 100 ) + "..." }</p>
            </article>
        );
    }
};

export default Note;