import ReactMarkdown from "react-markdown";

const Modal = ( props ) =>
{
    const { isOpen, activeNote, onClose, deleteNote, isAddNew } = props;

    if ( isOpen && isAddNew )
    {
        return (
            <div className="modal__wrapper" role="presentation">
                <article className="modal" role="dialog" aria-modal="true">
                    <header className="modal__header">
                        <span className="icon icon--back" onClick={ onClose }></span>
                        <div className="action-buttons" role="presentation">
                            <span className="icon icon--edit"></span>
                            <span className="icon icon--delete" onClick={ () => deleteNote( activeNote.id ) }></span>
                        </div>
                    </header>
                    <section className="modal__body">
                        <ReactMarkdown />
                        <input type="text" id="title" autoFocus aria-label="Title" />
                        <textarea name="body" id="body" aria-label="Note body" cols="30" rows="10"></textarea>
                    </section>
                </article>
            </div>
        );
    } else if ( isOpen )
    {
        return (
            <div className="modal__wrapper" role="presentation">
                <article className="modal" role="dialog" aria-modal="true">
                    <header className="modal__header">
                        <span className="icon icon--back" onClick={ onClose }></span>
                        <div className="action-buttons" role="presentation">
                            <span className="icon icon--edit"></span>
                            <span className="icon icon--delete" onClick={ () => deleteNote( activeNote.id ) }></span>
                        </div>
                    </header>
                    <section className="modal__body">
                        <section className="note">
                            <h1 className="note__title">{ activeNote.title }</h1>
                            <p>{ activeNote.body }</p>
                        </section>
                    </section>
                </article>
            </div>
        );
    }
    else
    {
        return null;
    }
};

export default Modal;