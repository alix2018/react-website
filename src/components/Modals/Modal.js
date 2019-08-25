import React from 'react';
import './Modal.css';
import Paragraph from './Paragraph';

function Modal({showModal, closeModal, listSubtitles, modalInfo, paragraphInfo, children}) {
  const showHideClassName = showModal ? 'modal display-block' : 'modal display-none';
  // TODO: const showHideDivBehindModal = showModal ? 'modal-div display-block' : 'modal display-none';
  const menuBar = document.querySelector('ul.menu-effect');
  if (menuBar && showModal) {
    menuBar.style.pointerEvents = 'none';
  }
  return (
    <>
      {/* <div className={showHideDivBehindModal}/> */}
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="close" onClick={closeModal}/>
          <div id="container1">
            <div id="container2">
              <div className={`${modalInfo.modalName} box`}>
                <section className="page-one">
                  <div className="main-info">
                    <h1>{modalInfo.firstTitle}<br/>
                      {modalInfo.secondTitle}
                    </h1>
                    <h2>{modalInfo.firstSubtitle}<br/>
                      {modalInfo.secondSubtitle}
                    </h2>
                    {listSubtitles.map(item => {
                      return (
                        <section key={item.category}>
                          <div className="container-categories">
                            <div className="line-categories"/>
                            <div className="categories">{item.category}</div>
                          </div>
                          <div className="details">{item.details}</div>
                        </section>
                      );
                    })}
                  </div>
                  <img className="flat" src={`../../../public/images/${modalInfo.imageName}.png`}/>
                  <div className="bottom-right">
                    <Paragraph>
                      {paragraphInfo}
                    </Paragraph>
                  </div>
                </section>
              </div>
              {children}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Modal;