import { useState } from "react";
import ReactMarkdown from "react-markdown";

const Modal = ( props ) =>
{
    const { isOpen, activeNote, onClose, deleteNote, isAddNew, onUpdateNote, addNote } = props;

    const [ markdownInput, setMarkdownInput ] = useState();

    const handleAddNewNote = ( event ) =>
    {
        setMarkdownInput( event.target.value );
        console.log( markdownInput );
    }

    if ( isOpen && isAddNew )
    {
        return (
            <div className="modal__wrapper" role="presentation">
                <article className="modal" role="dialog" aria-modal="true">
                    <header className="modal__header">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#666666" className="icon icon--back" onClick={ onClose }><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
                        <div className="action-buttons" role="presentation">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#666666" className="icon icon--save" onClick={ addNote }><path d="M0 0h24v24H0z" fill="none" /><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#666666" className="icon icon--delete" onClick={ () => deleteNote( activeNote.id ) }><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                        </div>
                    </header>
                    <section className="modal__body">
                        <textarea
                            autoFocus
                            name="body"
                            id="body"
                            aria-label="Note body"
                            value={ markdownInput }
                            onChange={ handleAddNewNote }
                            className="markdown" />
                        {/* <ReactMarkdown children={ markdownInput } /> */ }
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
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#666666" className="icon icon--back" onClick={ onClose }><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
                        <div className="action-buttons" role="presentation">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#666666" className="icon icon--edit"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#666666" className="icon icon--delete" onClick={ () => deleteNote( activeNote.id ) }><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                        </div>
                    </header>
                    <section className="modal__body">
                        <section className="note">
                            <ReactMarkdown source={ markdownInput } />
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