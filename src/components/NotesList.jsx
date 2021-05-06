import Note from "./Note";
import { useState, useEffect } from "react";
import uuid from "react-uuid";
import Modal from "../components/Modal";

const NotesList = ( props ) =>
{
    const [ notes, setNotes ] = useState(
        localStorage.notes ? JSON.parse( localStorage.notes ) : []
    );
    const [ activeNote, setActiveNote ] = useState( "" );
    const [ isModalOpen, setIsModalOpen ] = useState( false );
    const [ isAddNewNoteModal, setIsAddNewNoteModal ] = useState( false );

    useEffect( () =>
    {
        localStorage.setItem( "notes", JSON.stringify( notes ) );
    }, [ notes ] );

    console.log( notes );

    const handleAddNote = () =>
    {
        const newNote = {
            id: uuid(),
            body: "This is a body of a note",
            lastModified: Date.now()
        };

        setNotes( [ newNote, ...notes ] );

        console.log( notes );
    };

    const onUpdateNote = ( updatedNote ) =>
    {
        const updatedNotesArray = notes.map( note =>
        {
            if ( note.id === activeNote )
            {
                return updatedNote;
            }
            return note;
        } );

        setNotes( updatedNotesArray );
    }

    const deleteNote = ( noteId ) =>
    {
        setNotes( notes.filter( note => note.id !== noteId ) );
        console.log( 'delete note' );
        closeModal();
    };

    const openAddModal = () =>
    {
        setIsAddNewNoteModal( true );
        setIsModalOpen( !isModalOpen );
    }

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
                <Note isAddNew={ true } onClick={ openAddModal } />

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
                onUpdateNote={ onUpdateNote }
                addNote={ handleAddNote }
            />
        </>
    );
};

export default NotesList;