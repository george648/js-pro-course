import './modalWrapper.scss';
import { withPortal } from './../../../hocs/withPortal';



const ModalComponent = ( {children, closeModalBtn }) => {
    return (
        <div className="modalWrapper">
            <div className="modalOverlay"></div>
            <div>
                <div className="modalContent">
                    <div className="closeModalBtnBlock">
                        <button onClick={closeModalBtn} className="closeModalBtn">X</button>
                    </div>
                    <div className="changingModalContent">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Modal = withPortal(ModalComponent);
