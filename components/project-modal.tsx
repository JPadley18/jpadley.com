import { CustomFlowbiteTheme, Flowbite, Modal } from "flowbite-react"
import Divider from "./divider";

// Define custom styling for the Modal component
const modalTheme: CustomFlowbiteTheme = {
    "modal": {
        "root": {
            "show": {
                "on": "flex bg-gray-900 bg-opacity-90",
                "off": "hidden"
            },
        },
        "content": {
            "inner": "relative rounded-lg bg-slate-900 shadow-lg shadow-gray-600 border border-gray-200 flex flex-col max-h-[90vh]"
        },
        "header": {
            "base": "flex items-start justify-between rounded-t p-5",
            "title": "text-5xl text-slate-300 [text-shadow:2px_2px_3px_#700000,-2px_-2px_3px_#000099] inline"
        },
    }
};

export default function ProjectModal({ modalName, modalTitle, modalContent, modalProps }:
    { modalName: string, modalTitle: string, modalContent: string, modalProps: {openModal: string | undefined, setOpenModal: React.Dispatch<React.SetStateAction<string | undefined>>} }) {
    return (
        <Flowbite theme={{theme: modalTheme}}>
            <Modal dismissible show={modalProps.openModal === modalName} onClose={() => modalProps.setOpenModal("")}>
                <Modal.Header>{modalTitle}</Modal.Header>
                <hr className="my-3 mx-auto h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50 w-1/2" />
                <Modal.Body>
                    <div className="space-y-6">
                        {modalContent}
                    </div>
                </Modal.Body>
            </Modal>
        </Flowbite>
    )
}