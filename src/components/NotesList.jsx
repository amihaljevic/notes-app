import Note from "./Note";
import { useState } from "react";
import uuid from "react-uuid";
import Modal from "../components/Modal";

const NotesList = ( props ) =>
{
    const [ notes, setNotes ] = useState( [] );
    const [ activeNote, setActiveNote ] = useState( "" );
    const [ isModalOpen, setIsModalOpen ] = useState( false );
    const [ isAddNewNoteModal, setIsAddNewNoteModal ] = useState( false );

    console.log( notes );

    const handleAddNote = () =>
    {
        setIsAddNewNoteModal( true );
        setIsModalOpen( !isModalOpen );

        const newNote = {
            id: uuid(),
            title: "This is a note",
            // subtitle: "Subtitle",
            body: "This is a body of a note",
            lastModified: Date.now()
        };

        setNotes( [ newNote, ...notes ] );

        console.log( notes );
    };

    const deleteNote = ( noteId ) =>
    {
        setNotes( notes.filter( note => note.id !== noteId ) );
        console.log( 'delete note' );
        closeModal();
    };

    const openModal = ( item ) =>
    {
        setActiveNote( item );
        setIsModalOpen( !isModalOpen );

        console.log( 'note clicked' );
    };

    const closeModal = () =>
    {
        setIsModalOpen( !isModalOpen );
        setIsAddNewNoteModal( !isAddNewNoteModal );
    };

    return (
        <>
            <article className="grid">
                <Note isAddNew={ true } onAddNote={ handleAddNote } />

                { notes !== null && notes.length > 0
                    ? notes.map( ( note ) =>
                    {
                        return (
                            <Note
                                key={ note.id }
                                title={ note.title }
                                body={ note.body }
                                lastModified={ note.lastModified }
                                openModal={ () => openModal( note ) }
                            />
                        );
                    } )
                    : null
                }
            </article>

            <Modal
                isOpen={ isModalOpen }
                onClose={ closeModal }
                deleteNote={ deleteNote }
                activeNote={ activeNote }
                isAddNew={ isAddNewNoteModal }
            />
        </>
    );
};

export default NotesList;